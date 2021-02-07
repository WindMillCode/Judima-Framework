import { Component, OnInit, Input, ViewChildren, AfterViewInit, Inject, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
import { RyberService } from '../ryber.service';
import { fromEvent, interval, of, from, Observable, merge, Subject, BehaviorSubject, combineLatest, forkJoin,concat } from 'rxjs';
import { catchError, take, timeout, mapTo, debounceTime, distinctUntilChanged, debounce, first, ignoreElements, tap, delay,withLatestFrom, skipUntil, map } from 'rxjs/operators';
import {
    zChildren, getTextWidth, numberParse,
    xPosition, resize, componentBootstrap,
    eventDispatcher, dropdown, dragElement, stack, xContain, minMaxDelta,
	objectCopy, responsiveMeasure, flatDeep, zChildText,componentConsole,ryberPerfect,
	deltaNode
} from '../customExports'
import { environment as env } from '../../environments/environment'

@Component({
    selector: 'app-form',
    templateUrl: '../template.component.html',
    // styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit  , AfterViewInit, OnDestroy {


    @ViewChildren('myVal', {read:ElementRef}) templateMyElements: any;

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef,
        private renderer: Renderer2,
    ) { }

    @Input() appTV:string | any;
    foo:any= {}
    typesES:string = 'formES'


    ngOnInit():void {
		if(env.lifecycleHooks) console.log(this.appTV+ 'ngOnInit fires on mount')

    }

    ngAfterViewInit(): void {
        // indicating where we are in the code
        if(env.inputHandle.options) console.groupEnd()
        if(env.lifecycleHooks) console.log( this.appTV+ 'ngAfterViewInit fires one remount')
        //

        // FPM for each component
        this.ryber['formCO']
        .forEach((xx,ii)=>{ // just becuase massive refactoring will take place so lets be gentle and use xx ii instead of x i


                if(xx !== this.appTV){
                    return
                }

                let zChild = this.zChildInit()
				let topLevelZChild = this._topLevelZChildInit()
				let formatZChild = this._formatZChildInit()
                let latchZChild
                let staticZKeys = this.staticZKeysGen(zChild)
                if(env.component.form.zChild.includes(ii)){
                    console.log("zChild for " +this.appTV , zChild);
				}
                if(env.component.form.topLevelZChild.includes(ii)){
                    console.log("topLevel zChild for " +this.appTV ,topLevelZChild);
				}



                // drags elements for you
                if(env.component.form?.drag?.includes( ii)){
                    this.toPlace(zChild)
                }
                //

				// highlights
                if(env.component.form?.highlights?.includes( ii)){
                    this.highlights(zChild,2)
                }

                //

                // giving directives data about the zChildren
                this.directivesSendData({
                    directivesZChild:zChild,
                    random:Math.random(),
                    templateMyElements:this.templateMyElements,
                    ref:this.ref
                })
                //


                /*  format factory
                so here are 3 options,
                    handle, the framework builds it out for use
                    flex, flex options 1-6 to divy how many elements  on one line
                        they will be fractions, 1/9 - 6/9 the size of our section
                    custom: not a general options to the line, its specific to an element
                        if the framework sees a  height and width, use those then the browser values

                for our section left, 90 , width 1085
                    for our section with its 1085 for a a total of 1175px document.dir = "ltr"

                    x- spacing is 90

                    if the section type is handle (this can go on body metafield cms), were going to be formatting ourselves
                    we add to the stack and once width + left is greater than 1175, the element goes to the next row
                        should we flush center, should  we keep left should we extend to fill the gap to justify
                            these can be options, but I think by default we should justify

                    split - the width can be bet determined by split/6
                    next - start zChild on the next stacking context
                */

                let section:any =  zChild["&#8353"]?.extras?.section

                if(section === undefined){
                    section = objectCopy(this.ryber.appCO0.metadata.sectionDefault)
                }

                else{
                    let sectionDefault :any = objectCopy(this.ryber.appCO0.metadata.ryber.sectionDefault)
                    section['gap'] !== undefined ?   section['gap'] :   sectionDefault.gap
                    section['left'] !== undefined ?  section['left'] :  sectionDefault.left
                    section['width'] !== undefined ? section['width'] : sectionDefault.width
                    section['split'] !== undefined ? section['split'] : sectionDefault.split
                    section['stack'] !== undefined ? section['stack'] : sectionDefault.stack
                }

                Object.keys(section)
                .forEach((x,i)=>{
                    section[x] = +section[x]
                })

                section.area =section.left + section.width
                // console.log(section)


				//grabbing the values how the browser renders them
                this.ryber[this.appTV.valueOf()].metadata.order = this.ryber[this.appTV.valueOf()].metadata.order
                .filter((x:any,i)=>{

					return !(zChild[x]?.extras?.judima?.formatIgnore === "true")
					// return true
				})

                // console.log(this.ryber[this.appTV.valueOf()].metadata.order)
                this.ryber[this.appTV.valueOf()].metadata.order
                .forEach((x,i)=>{
                    let defaultClientRect = zChild[x].element.getBoundingClientRect()
                    zChild[x].cssDefault["height"]   = defaultClientRect.height.toString() + "px"
                    zChild[x].cssDefault["width"]   = defaultClientRect.width.toString() + "px"
                    zChild[x].cssDefault["left"]   = defaultClientRect.left.toString() + "px"
                    zChild[x].cssDefault["top"]   = defaultClientRect.top.toString() + "px"
                    this.ref.detectChanges()
                })
                //

                //applying end user values
                let keep = []
                let keepCurrent = []
				let keepLast = Object.keys(topLevelZChild).slice(1,2)[0]

                let align = []
                let alignCurrent = []
                let myTotal = 0
                this.ryber[this.appTV.valueOf()].metadata.order
                .forEach((x,i)=>{

					let {component} = zChild[x].extras
					Object.keys(component)
					.forEach((y,j)=>{ // if issues look here
						let a = component[y]
						if( !isNaN(a)){
							component[y] = +(component[y])
						}

					})


                    zChild[x].css["height"] = (component.height !== undefined) ?  (component.height).toString() + "px" : zChild[x].cssDefault["height"]
                    zChild[x].css["width"] = (component.width !== undefined) ?  (component.width).toString() + "px" : zChild[x].cssDefault["width"]
                    zChild[x].css["left"] = (component.left !== undefined) ?  (component.left).toString() + "px" : zChild[x].cssDefault["left"]
                    zChild[x].css["top"] = (component.top !== undefined) ?  (component.top).toString() + "px" : zChild[x].cssDefault["top"]
                    if(zChild[x]?.css?.["width"] !== undefined){
                        if(numberParse(zChild[x].css["width"]) > section.width){
                            zChild[x].css["width"] = section.width.toString() +"px"
                        }
                    }

                    //determine width
					myTotal +=  component.split === undefined ? numberParse(zChild[x].css["width"]) : ((component.split/section.split) *  section.width)

					if(component.split === section.split){
						zChild[x].css["width"] = component.split === undefined ? zChild[x].css["width"] : (((component.split/section.split) * section.width)).toString() + "px"
					}
					else{
						zChild[x].css["width"] = component.split === undefined ? zChild[x].css["width"] : (((component.split/section.split) * section.width)-section.gap).toString() + "px"
					}

					keepCurrent.push([x,keepLast])
					alignCurrent.push(x)
                    //



                    if((!["date","ta","i"].includes(zChild[x].bool) ) && component.height === undefined ){
                        zChild[x].css["height"] = null
                        this.ref.detectChanges()
                        zChild[x].css["height"] = zChild[x].element.getBoundingClientRect().height.toString() + "px"
                        this.ref.detectChanges()
                    }




					//stacking context
						// dont use next === true when there is no need for it
                    if((myTotal  > section.width && i !== Object.keys(topLevelZChild).slice(2).length -1) || (component.next === "true" && i !== Object.keys(topLevelZChild).slice(2).length -1 )){
                        // console.log('a')
						myTotal =  numberParse(topLevelZChild[x].css["width"])

                        let a = keepCurrent.pop()
						keep.push(...keepCurrent)
                        keepLast = keepCurrent
                        .reduce((acc,y,j)=>{
							// console.log(y[0],topLevelZChild[y[0]].css["height"],acc)

                            if(numberParse(topLevelZChild[y[0]].css["height"])   > acc[1]){
                                acc = [y[0],numberParse(topLevelZChild[y[0]].css["height"])]
                            }
                            return acc
                        },["",0])[0]
                        keepCurrent = [[a[0],keepLast]]
                        let b = alignCurrent.pop()
                        align.push(alignCurrent)
                        alignCurrent = [b]
                    }

                    else if( (myTotal  < section.width  && i === Object.keys(topLevelZChild).slice(2).length -1) && ( component.next !== "true"  )  ){

                        // console.log('b')
                        myTotal =   numberParse(topLevelZChild[x].css["width"])
                        keep.push(...keepCurrent)
                        keepLast = keepCurrent
                        .reduce((acc,y,j)=>{
                            return numberParse(topLevelZChild[y[0]].css["height"]) > acc[1] ?
                            [y[0],numberParse(topLevelZChild[y[0]].css["height"])] :
                            acc
                        },["",0])[0]
                        keepCurrent = []
                        align.push(alignCurrent)
                        alignCurrent = []
                    }

                    else if( (i === Object.keys(topLevelZChild).slice(2).length -1) || (component.next === "true" )){
                        // console.log('c')
                        myTotal  =  numberParse(topLevelZChild[x].css["width"])
                        let a = keepCurrent.pop()
                        keep.push(...keepCurrent)
                        keepLast = keepCurrent
                        .reduce((acc,y,j)=>{
                            return numberParse(topLevelZChild[y[0]].css["height"]) > acc[1] ?
                            [y[0],numberParse(topLevelZChild[y[0]].css["height"])] :
                            acc
                        },["",0])[0]
                        // console.log(keepLast)
                        keepCurrent = [[a[0],keepLast]]
                        keep.push(...keepCurrent)
                        let b = alignCurrent.pop()
                        align.push(alignCurrent)
                        alignCurrent = [b]
                        align.push(alignCurrent)
					}



                    //


				})
				// console.log(keep)


                align
                .forEach((x,i)=>{
                    let gaps =
                        ((section.width) -
                        x.reduce((acc,y,j)=>{
                            acc += numberParse(zChild[y].css["width"])
                            return acc
                        },0) ) /  ( x.length-1 )
                    let gapType = x.reduce((acc,y,j)=>{
                            acc += numberParse(zChild[y].css["width"]) + (
                                zChild[y].extras?.component?.split === undefined || zChild[y].extras?.component?.split === 6 ? 0: section.gap
                            )
                            return acc
                        },0)
                    x
                    .forEach((y,j)=>{
                        //determine left
                        if(zChild[y].extras?.component?.left !== undefined){
                            return
                        }
                        if(j === 0){
                            zChild[y].css["left"] = section.left + "px"
                            // console.log(zChild[y].css["left"])
                        }
                        else{

                            zChild[y].css["left"] = (
                                numberParse(   zChild[x[j-1]].css["left"]  ) +
                                numberParse(   zChild[x[j-1]].css["width"]  ) +
                                // section.gap
                                (gapType >= section.width -300 ?gaps : section.gap)
                            ).toString() + "px"
                        }
                        //
                    })

                })
                this.ref.detectChanges()

                //making sure values are true to the DOM
                staticZKeys
                .forEach((x,i)=>{
                    zChild[x].css["height"] = (zChild[x].element.getBoundingClientRect().height).toString() + "px"
                    zChild[x].css["width"] = (zChild[x].element.getBoundingClientRect().width).toString() + "px"
                    zChild[x].cssDefault["height"] = zChild[x].css["height"]
                    zChild[x].cssDefault["width"] = zChild[x].css["width"]
                    zChild[x].cssDefault["left"] = zChild[x].css["left"]
                    zChild[x].cssDefault["top"] = zChild[x].css["top"]
                })
                this.ref.detectChanges()

                //

                //init   buttons
                // console.log(group)

                //more init
                let cmsZKeys = this.ryber[this.appTV.valueOf()].metadata.order
                //

                // refresh (sigs and more in the fture) setup
				//  try to use a directive and how we deal with a directive group to deal with the problem
                //


                //stack spacing setup
                // console.log(align)
                let spacing =  [null,
                    ...Array.from(align[0],(x,i)=> {return 50}),
					...Array.from(align[1] !== undefined && align[0].length <= 1 ? align[1] : Array(0) ,(x,i)=> {return 50}),
					section.stack
                ]
                cmsZKeys
                .forEach((x:any,i)=>{
                    if(zChild[x].extras.component.top !== undefined){
                        spacing[i+1] = zChild[x].extras.component.top
                    }
                    if(spacing[i+1] === undefined){
                        spacing[i+1]= section.stack
                    }
                })
                //

                //latch setup
                this.ryber.appEvents({
                    typesES:this.typesES,
                    event:'zChildUpdate',
                    of:combineLatest([
                        this.ryber[this.appTV].metadata.latch.updateZChild,
                        this.templateMyElements.changes
                    ])
                    .pipe(
                        delay(2)
                    )
                    .subscribe((a)=>{

                        //fix the component object before continuing
                        let co = this.ryber[this.appTV]
						ryberPerfect({co});

                        zChild = this.zChildInit()
                        topLevelZChild = this._topLevelZChildInit()
                        latchZChild = this.ryber[this.appTV].metadata.latch.zChild = this._latchZChildInit()


                        this.directivesSendData({
                            directivesZChild:zChild,
                            random:Math.random()
                        })
                        eventDispatcher({
                            event:'resize',
                            element:window
                        })
                    })
                })
				//

				//deltaNode setup
					// FIX ME, flicker on the screen because templateMyElements.changes, fires several times
					// if you put a delay on updateZChild it will not work out well

				this.ryber.appEvents({
                    typesES:this.typesES,
                    event:'zChildUpdate',
                    of:combineLatest([

						// this.templateMyElements.changes,
						this.ryber[this.appTV].metadata.deltaNode.updateZChild
					])
                    .subscribe((result)=>{
                        //fix the component object before continuing
                        let co = this.ryber[this.appTV]
						ryberPerfect({co,exclude:["cssDefault"]});
						this.ref.detectChanges()
                        zChild = this.zChildInit()
                        topLevelZChild = this._topLevelZChildInit()
                        latchZChild = this.ryber[this.appTV].metadata.latch.zChild = this._latchZChildInit()



                        this.directivesSendData({
                            directivesZChild:zChild,
                            random:Math.random()
                        })

						// dynnamic element management bootstrap
						this._deltaNodeBootstrap({zChild});
						//

                        eventDispatcher({
                            event:'resize',
                            element:window
                        })
                    })
                })
				//
				let finalZChildKeys =[
					"&#8353",
					...cmsZKeys
				]

                this.ryber.appEvents({
                    typesES:this.typesES,
                    event:'resize',
                    of:(
                        this.ryber[this.ryber['formCO'][ii-1]]?.metadata[this.appTV] !== undefined ?
                        this.ryber[this.ryber['formCO'][ii-1]]?.metadata[this.appTV] :
                        fromEvent(window,'resize')
                    )
                    .subscribe((moving)=>{


                        if(moving instanceof Event){
                            moving = {
                                boardHeight : "0px",
                                boardTop : "0px"
                            }
                        }

						let {finalKeep,finalSpacing,finalAlign} =((devObj)=>{
							let {current,groups,component}  =this.ryber[this.appTV].metadata.deltaNode
							let currentGroup = groups[current?.group]

							let {finalKeep,finalSpacing,finalAlign} =devObj
							let {determineKeepGroups,inspectKeep,logicKeep} = deltaNode



							if(
								current !== null &&
								currentGroup.hooks.directive === "add prepare"
							){

								// set the component hook to "add prepare"
								if(currentGroup.hooks.component.has("remove prepare")){
									currentGroup.hooks.component.clear()
								}
								currentGroup.hooks.component.add("add prepare")
								//

								// deterimine new spacing
									component.keep = {groups:[{items:[],index:[],oneExists:"false"}]}
									// inspect the keep
									inspectKeep({
										zSymbols:"target",
										component,
										finalKeep
									})
									//

									// determine groups to be duplicated and placed in different parts of keep
									determineKeepGroups({component})
									//


									// create the logic for the new groups
									// length = 1 only means it has 0 and needs a new attach
									// length = 2 means replace both per guidance of mapping
									// console.log(component)
									logicKeep({
										hook:currentGroup.hooks.component,
										zSymbolsMap:"deltasMap",
										component,
										finalKeep,
										zChild,

									})
									component.keep.groups.reverse()
									.forEach((x:any,i)=>{
										// update the finalKeep and zChildKeys
										// finalKeep has one less then the others rmbr to add 1
										let position = x.index[0]  || finalZChildKeys.length

										finalZChildKeys.splice(
											(position+1),0,
											...x.newItems
											.map((y:any,j)=>{
												return y[0]
											})
										)
										position = x.index[0] || finalKeep.length
										finalKeep.splice(
											position,0,
											...x.newItems
										)
										//

									})
									//

								//

								//align setup
								finalAlign .map((x:any,i)=>{
									return x.map((y:any,j)=>{
										return component.deltasMap[y]
									})
									.filter((y:any,j)=>{
										return y !== undefined
									})
								})
								.filter((x:any,i)=>{
									return x.length !== 0
								})
								.forEach((x:any,i)=>{
									finalAlign.push(x)
								})
								//


								// set the component and directive hooks to "add done"
								currentGroup.hooks.component.delete("add prepare")
								currentGroup.hooks.directive = "add done"
								currentGroup.hooks.component.add("add desktop done")
								currentGroup.hooks.component.add("add mobile done")
								//

								//
							}


							else if(
								current !== null &&
								// !currentGroup.hooks.component.has("remove desktop done") &&
								currentGroup.hooks.directive === "remove prepare"
							){

								// set the component hook
								if(currentGroup.hooks.component.has("add prepare")){
									currentGroup.hooks.component.clear()
								}
								currentGroup.hooks.component.add("remove prepare")
								//


								// deterimine new spacing
								component.keep = {groups:[{items:[],index:[]}]}
									// inspect the keep

									inspectKeep({
										zSymbols:"deltas",
										component,
										finalKeep
									})
									//

									// determine groups to be removed which are in different pats of the keep
									determineKeepGroups({
										component
									})
									//

									// remove the logic for the groups
									logicKeep({
										hook:currentGroup.hooks.component,
										zSymbolsMap:"targetMap",
										component,
										finalKeep
									})
									component.keep.groups.reverse()
									.forEach((x:any,i)=>{
										// update the finalKeep and zChildKeys
										// finalKeep has one less then the others rmbr to add 1
										// x.index should start where the 0 start but they start between
											// 0,1 like add, simply subtract x.items.length to get the correct result

										let position = x.index[0]+1  || finalZChildKeys.length
										finalZChildKeys.splice(
											(position)-x.items.length,
											// (position)-x.items.length,
											x.items.length
										)
										position = x.index[0] || finalKeep.length
										finalKeep.splice(
											position-x.items.length,
											x.items.length,
										)
										//

									})
									//

								//

								// align setup
								finalAlign = finalAlign
								.filter((x:any,i)=>{

									return x
									.map((y:any,j)=>{
										return component.targetMap[y]
									}).includes(undefined)


								})

								//

								// set the component and directive hooks to "remove done"
								currentGroup.hooks.component.delete("remove prepare")
								currentGroup.hooks.directive = "remove done"
								currentGroup.hooks.component.add("remove desktop done")
								currentGroup.hooks.component.add("remove mobile done")
								//
							}
							// fixes the craziness that is xContain
							align = finalAlign
							//

							// console.log(this.ryber[this.appTV].metadata.deltaNode)
							// console.log(component,currentGroup)

							return{
								finalKeep,
								finalSpacing,
								finalAlign
							}



						})({
							finalKeep:keep,
							finalSpacing:spacing,
							finalAlign:align
						})


						// componentConsole.call(this,{
						// 	target:['formCO1','formCO2','formCO3'],
						// 	data:[finalZChildKeys,zChild]
						// })?.()
                        if(   numberParse(getComputedStyle(zChild["&#8353"].element).width) > section.area   ){

                            // element management
                            {

                                // functionality
                                {

                                    //clean up
                                    Object
                                    .keys(zChild)
                                    .slice(2)
                                    .forEach((x,i)=>{

                                        zChild[x].css["height"] = zChild[x].cssDefault["height"]
                                        zChild[x].css["width"] = zChild[x].cssDefault["width"]
                                        zChild[x].css["font-size"] = zChild[x].cssDefault["font-size"]

                                    })
                                    this.ref.detectChanges()
                                    //



                                    //responsive height
                                    // staticZKeys
                                    // .forEach((x,i)=> {
                                    //     if(!this.ryber.appCO0.metadata.component.responsiveHeightExclude.includes(zChild[x].bool )){
                                    //         zChild[x].css["height"] = null
                                    //         zChild[x].css["display"] = "table"
                                    //         this.ref.detectChanges()
                                    //         zChild[x].css["height"] =  (zChild[x].element.getBoundingClientRect().height).toString() + "px"
                                    //     }
                                    // })
									//

									let stackObj = {
                                        zChildKeys:finalZChildKeys,
                                        ref: this.ref,
                                        zChild,
                                        spacing: [null,
											...Array.from(flatDeep(finalAlign,Infinity),(x,i)=> {return section.stack}),
										],
										options:{
											overlapFix:{
												confirm:"true",
												flag:"false"
											}
										},
                                        keep:finalKeep,
                                        type:'keepSomeAligned',
                                        heightInclude:[null,...Array.from(finalAlign[0],(x,i)=> {return 'f'}),...Array.from( flatDeep(finalAlign.slice(1),Infinity),(x,i)=> {return 't'})]
									}

									// componentConsole.call(this,{
									// 	target:['formCO2'],
									// 	data:[stackObj,finalZChildKeys]
									// })?.()
									// console.log(this.appTV)
									// console.log(zChild)
									let overlapFixFlag
									;({keep,overlapFixFlag}=stack(stackObj))
									// console.log("next")
									this.ref.detectChanges()
									while(overlapFixFlag === "true"){
										stackObj.keep = keep
										stackObj.options.overlapFix.flag = "false"
										;({keep,overlapFixFlag}=stack(stackObj))
										// console.log("next")
										this.ref.detectChanges()
									}

									// align options
									let xContainObj = {
                                        preserve:{
                                            align:finalAlign,
                                            // zChild,
                                            zChild:latchZChild === undefined ? zChild:latchZChild,
                                            ref:this.ref,
                                            width:section.width,
                                            left:section.left
                                        },
                                        type:'preserve',
									}


									;( {align } = xContain(xContainObj))
									//

                                }
								//


                                //position
                                {

                                    // console.log(topLevelZChild)
                                    stack({
                                        type:"yPosition",
                                        yPosition:{
                                            zChild:topLevelZChild,
                                            moving:{
                                                top:moving.boardTop,
                                                height:moving.boardHeight
                                            },
                                            ref:this.ref
                                        }
									})

                                    // position board
                                    this.ryber[this.appTV].metadata.ngAfterViewInitFinished.next("")
                                    this.positionBoard({zChild:topLevelZChild});
                                    //
                                }
                                //

                                //moving
                                {

                                }
                                //
                            }
                            //

                        }


                        else if(    numberParse(getComputedStyle(zChild["&#8353"].element).width) > 0  ){


                            //element management
                            {
                                // functionality
                                {


                                    //clean up

                                    //




                                    // same start
                                    // staticZKeys
                                    finalZChildKeys
									.slice(1)
                                    .forEach((x,i)=>{
                                        zChild[x].css["width"] = (
                                            .9 * numberParse(getComputedStyle(zChild["&#8353"].element).width)
                                        ).toString() + "px"
                                        this.ref.detectChanges()
                                        zChild[x].css["left"] = xPosition({
                                            target:numberParse(zChild[x].css["width"]),
                                            contain: numberParse(getComputedStyle(zChild["&#8353"].element).width)
                                        }).toString() + "px"
                                    })
                                    this.ref.detectChanges()
                                    //


                                    //serveral targets


                                    let mobileShrinkFonts =   finalZChildKeys
                                        .reduce((acc,x,i)=>{
                                            if(zChild[x]?.extras?.appFocusFont?.mobileShrink  ==="true"){
                                                acc.push(x)
                                            }
                                            return acc
                                        },[])

                                    mobileShrinkFonts
                                    .forEach((x,i)=>{
                                        zChild[x].css["font-size"]  =(
                                            resize({
                                                default:numberParse(   zChild[x].cssDefault["font-size"]   ),
                                                containActual:numberParse(   getComputedStyle(   zChild["&#8353"].element   ).width   ),
                                                containDefault:540,
                                                type:'nonUniform',
                                                misc:[.052,.06],
                                                mediaQuery:[379,286,0]
                                            })
                                        ).toString() + "px"
                                    })
                                    this.ref.detectChanges()
                                    //

                                    //responsive height
                                    // staticZKeys
                                    // .forEach((x,i)=> {
                                    //     if(!this.ryber.appCO0.metadata.component.responsiveHeightExclude.includes(zChild[x].bool )){
                                    //         zChild[x].css["height"] = null
                                    //         zChild[x].css["display"] = "table"
                                    //         this.ref.detectChanges()
                                    //         zChild[x].css["height"] =  (zChild[x].element.getBoundingClientRect().height).toString() + "px"
                                    //     }
                                    // })
                                    //

                                    let responsiveMeasureTargets =finalZChildKeys
                                    .reduce((acc,x,i)=>{

                                        if( ["ta","c"].includes(zChild[x].bool)){
                                            acc.push(zChild[x])
                                        }
                                        return acc
                                    },[])
                                    responsiveMeasure({
                                        item:{
                                            target:responsiveMeasureTargets,
                                            prop:[...Array.from(Array(responsiveMeasureTargets.length),()=> { return  "height"})]
                                        },
                                        values:[
                                            ...Array.from(Array(responsiveMeasureTargets.length),()=> { return  [[1190,163],[770,303],[495,343],[391,385],[305,426],[216,487],[175,650]]})

                                        ],
                                        measure:{
                                            target:zChild["&#8353"].element,
                                            prop:"width"
                                        }
                                    })
                                    this.ref.detectChanges()

                                    stack({
                                        zChildKeys:finalZChildKeys,
                                        ref: this.ref,
                                        zChild,
                                        spacing:[null,100,section.stack],
                                        type:'simpleStack',
                                        heightInclude:[null,'f','t']
                                    })
                                    this.ref.detectChanges()




                                }
                                //

                                //position
                                {

                                    stack({
                                        type:"yPosition",
                                        yPosition:{
                                            zChild:topLevelZChild,
                                            moving:{
                                                top:moving.boardTop,
                                                height:moving.boardHeight
                                            },
                                            ref:this.ref
                                        }
                                    })



                                    // position board
                                    this.ryber[this.appTV].metadata.ngAfterViewInitFinished.next("")
                                    this.positionBoard({zChild:topLevelZChild});
                                    //


                                }
                                //

                                //moving
                                {

                                }
                                //
                            }
                            //


                        }


                        // so you wont have to find the panel
                        if(ii === env.component?.[this.appTV.split("C")[0].valueOf()]?.panelView){
                            this.currentScroll(zChild)
                        }
                        //


                        //send moving data to the next CO
                        this.ryber[this.appTV].metadata?.[this.ryber['formCO'][ii+1]]?.next?.({
                            boardTop:zChild["&#8353"].css["top"],
                            boardHeight:zChild["&#8353"].css["height"]
                        })
                        //


                    })
                })




        })

        //

		// help app.component.ts trigger and make the website using the FPM for each component
			// used for navigation
        this.ryber.appViewComplete.next(
            (function(qq){
                qq.ryber.appViewCompleteArray.push(   qq.appTV   )
            })(this)
		)
		//


    }

	private _deltaNodeBootstrap(devObj: any) {

		let {zChild} = devObj
		let { current, groups, component } = this.ryber[this.appTV].metadata.deltaNode;
		let currentGroup = groups[current?.group];
		if (current !== null && currentGroup.hooks.directive.includes("prepare")) {
			// convert needed data in to usable form

			component.deltas = current?.deltas.filter((x: any, i) => {
				return zChild[x]?.extras?.judima?.formatIgnore !== "true";
			});
			let deltasIndex = 0
			// this is because in the directive, minus removes the directive before
			// the component has proper chance to analyze
			if(currentGroup.hooks.directive.includes("add prepare")){

				deltasIndex += 1
			}
			if (currentGroup.deltas.length <= deltasIndex) {
				component.target = currentGroup?.targets.filter((x: any, i) => {
					return zChild[x[0]]?.extras?.judima?.formatIgnore !== "true";
				})
					.map((x: any, i) => {
						return x[0];
					});
			}
			else {
				// rememeber the target should be the previous even though the copy is the first
				let last = currentGroup.deltas.length - (deltasIndex+1);
				component.target = currentGroup.deltas[last].filter((x: any, i) => {
					return zChild[x]?.extras?.judima?.formatIgnore !== "true";
				});
			}

			component.targetMap = Object.fromEntries(
				component.deltas.map((x: any, i) => {
					return [x, component.target[i]];
				})
			);
			component.deltasMap = Object.fromEntries(
				component.target.map((x: any, i) => {
					return [x, component.deltas[i]];
				})
			);
			//
		}

	}

    ngOnDestroy(): void {
        if(env.lifecycleHooks) console.log(this.appTV+ '  ngOnDestroy fires on dismount')
        Object
        .values(this.ryber[this.typesES])
        .forEach((x:any,i)=>{
            Object
            .values(x)
            .forEach((y:any,j)=>{
                if(y.unsubscribe !== undefined ){
                    y.unsubscribe()
                }
            })
        })
    }

    private positionBoard(devObj?:any) {
        let {zChild}= devObj
        let max:any = Object.keys(zChild)
            .slice(2)



            max = max
            .reduce((acc: any, x, i) => {

                if(zChild[x]?.extras?.appDropDown?.change === "dropdowns"){
                    return acc
                }

                let sum = numberParse(zChild[x].css["top"]) +
                    numberParse(zChild[x].css["height"]);

                if (sum > acc[1]) {
                    acc = [x, sum];
                }
                return acc;
            }, ["", 0])[0];

        if(zChild["&#8353"].extras.component.height !== undefined){
            zChild["&#8353"].css["height"] = zChild["&#8353"].extras.component.height.toString() + "px"
        }

        else{
            zChild["&#8353"].css["height"] = (
                numberParse(zChild[max].css["top"]) +
                numberParse(zChild[max].css["height"]) +
                50 -
                numberParse(zChild["&#8353"].css["top"])
            ).toString() + "px";
        }
        this.ref.detectChanges();
    }

    private _topLevelZChildInit (){
        let topLevelZChild = this.zChildInit()
        Object.keys(topLevelZChild)
        .forEach((x:any,i)=>{



			if(topLevelZChild[x]?.extras?.judima?.topLevelZChild === "false"){
				// console.log("true")
				delete topLevelZChild[x]
			}

        })
        return topLevelZChild
	}

    private _formatZChildInit (){
        let zChild = this.zChildInit()
        Object.keys(zChild)
        .forEach((x:any,i)=>{



			if (!(zChild[x]?.extras?.judima?.formatIgnore === "true")){
				// console.log("true")
				delete zChild[x]
			}

        })
        return zChild
    }

    private _latchZChildInit(){
        let latchZChild = this.zChildInit()
        Object.keys(latchZChild)
        .filter((x:any,i)=>{
            if(latchZChild[x]?.extras?.judima?.format === "false"){
				// if(latchZChild[x]?.extras?.judima?.latchZChild === "true"){
                delete latchZChild[x]
            }
        })
        return latchZChild
    }



    private directivesSendData(devObj?:{
        directivesZChild:zChildren,
        random?:any,
        templateMyElements?:any,
        ref?:any,
        duplicate?
    }):void{


        let {directivesZChild,random,duplicate,templateMyElements,ref} = devObj
        // subjects meeded for input handle to work
        Object
        .keys(directivesZChild)
        .forEach((x,i)=>{
            if(directivesZChild[x].extras !== undefined && directivesZChild[x].extras !== null ){

                if( directivesZChild[x].extras.appDropDown !== undefined){
                    if(   directivesZChild[x].extras.appDropDown.change !== "dropdowns"){
                        directivesZChild[x].extras.appDropDown.zSymbol = x
                    }
                }
                // if zSymbolNeeded is "true" provide the zSymbol
                    // above is deprecated
                Object.values(directivesZChild[x].extras)
                .forEach((y:any,j)=>{
                    y?.zSymbolNeeded === "true" ? y.zSymbol = x : null
                })
                //
            }
        })
        this.ryber[this.appTV.valueOf()].metadata.zChildrenSubject.next(({directivesZChild,random,templateMyElements,ref}))

    }





    private zChildInit(devObj?): any {
        return componentBootstrap({
            appTV: this.appTV,
            myElements: this.templateMyElements._results,
            ryber: this.ryber,
            zProps: {
                extras: 'true',
                val:'true',
                quantity:'true'
            }
        });
    }

    private staticZKeysGen(staticZChild:zChildren): Array<string>{
        return Object
        .entries(staticZChild)
        .filter((x:any,i)=>{
            return x[1].quantity === 3
        })
        .map((x,i)=>{return x[0]})
        .slice(2)
    }

    private toPlace (staticZChild:zChildren) : any{
        return  Object.keys(staticZChild)
        .filter((x,i)=>{  return x.match("&#") !== null })
        .slice(2)
        .forEach((x,i)=>{
            dragElement(staticZChild[x].element)
        })
    }

    private highlights (staticZChild:zChildren,amount:number): void{
        Array.from(Array(2),(x,i)=> {return "&#" +(8354 + i)})
        .forEach((x,i)=>{
            staticZChild[x].css["background-color"]= "red"
        })
    }

    private currentScroll(staticZChild:zChildren,reverse?:number): void{
        let current = null
        if( reverse === undefined){
        }
        else{
            current = Object
            .keys(staticZChild)
            .reduce((acc,x,i,src)=>{
                if(i ===  reverse){
                    acc = x
                }
                return acc
            })
        }
        scrollTo(0,numberParse(getComputedStyle(staticZChild[current === null ? "&#8353" :current].element).top)-30)
    }
}

