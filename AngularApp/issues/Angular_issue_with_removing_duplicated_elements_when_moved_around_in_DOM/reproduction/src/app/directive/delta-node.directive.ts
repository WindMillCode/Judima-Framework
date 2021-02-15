
import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest,timer, Subject } from 'rxjs';
import { ryberUpdate,ryberUpdateFactory,deltaNode, eventDispatcher, numberParse, objectCopy,flatDeep } from '../customExports'
import { catchError, delay,first,repeat,map } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
	selector: '[appDeltaNode]'
})
export class DeltaNodeDirective {

	@Input() deltaNode: any;
	extras: any;
	zChildren: any;
	templateMyElements:any;
	ref:any;
	groups :any ={}
	subscriptions: Array<Subscription> = []
	controls:any = []

	constructor(
		private el: ElementRef,
		private http: HttpClient,
		private renderer2: Renderer2,
		private ryber: RyberService
	) { }




	ngOnInit() {
		this.extras = this.deltaNode
		if (this.extras?.confirm === 'true') {

			// command is setup only from the body this is where you can decide which elements have certain controls
			if(this.extras.type === "body"){

				let {ryber} = this
				let rUD = ryberUpdateFactory({ryber})
				let {co} = this.extras
				let {groups} = this.groups =  ryber[co].metadata.deltaNode
				let {deltaNode} = ryber[co].metadata



				this.subscriptions.push(
					combineLatest([
						ryber[co].metadata.zChildrenSubject
					])
					.pipe(first())
					.subscribe((result) => {



						this.zChildren = ryber[co].metadata.zChildren
						this.templateMyElements = ryber[co].metadata.templateMyElements
						this.ref =ryber[co].metadata.ref



						// gathering all the deltaGroups in the component
						this.extras.group
						.forEach((x:any,i)=>{
							groups[x.name] = {
								type:x.type,
								targets:[],
								hooks:{
									directive:"prepare",
									component:new Set(),
								},
								add:[],
								remove:[]
							}
						})
						//

						// gathering all objects to their respective deltaGroups
						Object.entries(this.zChildren)
						.forEach((x:any,i)=>{
							let zChildDeltaNode = x[1]?.extras?.appDeltaNode
							groups?.[zChildDeltaNode?.group]?.targets.push(x)
						})
						//


						//
						// sorting the elements associated to respetive groups
						Object.entries(groups)
						.forEach((x:any,i)=>{
							let key = x[0]
							let val = x[1]

							// controls
								// we can have several add and remove buttons
								// FIXME, disable this feature when is use in the component

							if(val.type ==="add_remove_button"){

								val.targets =val.targets
								.map((y:any,j)=>{
									// logic for add button concept
									if(y[1]?.extras?.appDeltaNode?.type === "add"){

										val.add .push ({target:y,by:+y[1].extras.appDeltaNode.by})

										this.controls.push({
											element:y[1].element,
											type:val.type
										})
									}
									//

									//logic for remove button concept
									if(y[1]?.extras?.appDeltaNode?.type === "remove"){
										val.remove.push ( {target:y,by:+y[1].extras.appDeltaNode.by})
										this.controls.push({
											element:y[1].element,
											type:val.type
										})
									}
									//


									//logic for increment
									if(y[1]?.extras?.appDeltaNode?.type === "increment"){
										y[1].extras.appDeltaNode.increment = {
											counter: +y[1].innerText?.item.split("")[0]
										}
									}
									//
									return y
								})
								.filter((y:any,j)=>{

									return [undefined,"increment"].includes(y[1]?.extras?.appDeltaNode?.type)
								})


								// add concept logic
									// provide for hooks if needed
								// rmbr each group needs it own
								val.deltas =[]
								//
								let addEvent = (devObj:any)=>{

									console.log("add button clicked")
									let {y} = devObj
 									// clear this so the component can reset and format properly
									// console.log(val.hooks.component)
									val.hooks.component.clear()
									//

									// add the deltas by val.add.by times
									Array(y.by).fill(null)
									.forEach(()=>{
										let addedDeltas =[]
										val.targets
										.forEach((y:any,j)=>{

											// add the elements onto the dom
												// now you have the option to add from original or add from deltas
											let css = objectCopy(y[1].css)
											let text = (()=>{
												if(y[1]?.extras?.appDeltaNode?.type === "increment"){
													let mySplit = y[1].innerText?.item.split("")

													return (++y[1].extras.appDeltaNode.increment.counter)+mySplit[1]
												}
												return y[1].innerText?.item
											})()
											let  extras = objectCopy(y[1].extras)
											if(extras.appDeltaNode?.options?.target?.confirm === "true"){
												extras.appDeltaNode.options.target.zSymbol = y[0]
											}

											// you must string the component name type and its symbol so it val
											// can properly receive the next symbol
											addedDeltas.push(
												rUD({
													quantity:2,
													symbol:y[1].symbol,
													co,
													bool:y[1].bool,
													css,
													cssDefault:y[1].cssDefault,
													text,
													extras,
													val:y[1].val
												})
											)

											// console.log(this.templateMyElements)
											//


										})
										this.ref.detectChanges()
										deltaNode.current = {
											deltas:addedDeltas,
											group:key
										}
										val.hooks.directive  ="add prepare"
										val.deltas.push(addedDeltas)
										ryber[co].metadata.deltaNode.updateZChild.next()

									})
									//

								}
								this.subscriptions.push(
									...val.add
									.map((y:any,j)=>{
										return combineLatest([
											fromEvent(y.target[1].element,"click")
										])
										.subscribe((result:any)=>{
											if(!y.target[1].element.disabled){
												this._disableButton()
												addEvent({result,y})
											}
										})
									})
								)

								//

								// remove concept logic
								let removeEvent = (devObj:any)=>{

									console.log("remove button clicked")
									let {y} = devObj
									// clear this so the component can reset and format properly
									val.hooks.component.clear()
									//

									// remove the deltas by val.remove.by times
									Array(y.by).fill(null)
									.forEach(()=>{

										// if there are no deltas to remove return and enable the button
										if(val.deltas.length === 0){
											this._enableButton()
											val.hooks.directive = "remove done"
											return
										}
										//
										let removeDeltas = flatDeep(val.deltas.pop(),Infinity)
										val.targets
										.forEach((y:any,j)=>{

											// properly modify the counter
												// now you have the option to add from original or add from deltas
											if(y[1]?.extras?.appDeltaNode?.type === "increment"){

												--y[1].extras.appDeltaNode.increment.counter
											}

										})

										removeDeltas
										.forEach((y:any,j)=>{
											// remove the elements from the DOM
												// we decide it will be the last index in deltas

											console.log(`
												function responsible for removing the element with the dropdown(latch) directive
											`)
											/* in actual, the API manages to remove the whole dropdown and then throw the error,
												in this minified reproduction however, the API can only remove the target element and throw the error
												leaving the rest of the dropdown elements intact
											*/
											rUD({
												symbol:y,
												type:"remove",
												co
											})
											//
										})
										this.ref.detectChanges()

										deltaNode.current = {
											deltas:removeDeltas,
											group:key
										}
										val.hooks.directive  ="remove prepare"
										ryber[co].metadata.deltaNode.updateZChild.next()




									})
									//

								}
								this.subscriptions.push(
									...val.remove
									.map((y:any,j)=>{
										return combineLatest([
											fromEvent(y.target[1].element,"click"),
										])
										.subscribe((result:any)=>{
											if(!y.target[1].element.disabled){
												this._disableButton()
												removeEvent({result,y})
											}

										})
									})
								)
								//

								// unlock the buttons once components afterViewInit is finished
								this.subscriptions.push(
									ryber[co].metadata.ngAfterViewInitFinished

									.subscribe((result:any)=>{
										this._enableButton()
									})
								)
								//

							}
							//


						})
						//

							// testing trigger click
							// of([])
							// .pipe(
							// 	delay(1),
							// 	// first(),
							// 	repeat(2)
							// )
							// .subscribe((result:any)=>{


							// 	let outerDeltaAddButton = groups["outerDelta"].add[0].target[1].element
							// 	let innerDeltaAddButton = groups["innerDelta"].add[0].target[1].element
							// 	eventDispatcher({
							// 		event:'click',
							// 		element:outerDeltaAddButton
							// 	})
							// 	// of([])
							// 	// .pipe(
							// 	// 	repeat(10)
							// 	// )
							// 	// .subscribe(()=>{
							// 	// 	eventDispatcher({
							// 	// 		event:'click',
							// 	// 		element:innerDeltaAddButton
							// 	// 	})
							// 	// })
							// })

							// of([])
							// .pipe(
							// delay(1000)
							// )
							// .subscribe((result:any)=>{

							// 	let outerDeltaRemoveButton = groups["outerDelta"].remove[0].target[1].element
							// 	eventDispatcher({
							// 		event:'click',
							// 		element:outerDeltaRemoveButton
							// 	})
							// })
							//

						// console.log(this.subscriptions)




					})
				)

			}
			//


		}
	}

	private _disableButton  (){
		this.controls
		.forEach((x:any,i)=>{
			if(x.type ==="add_remove_button"){
				this.renderer2.setAttribute(
					x.element,
					"disabled",
					"true"
				)
			}
		})
	}

	private _enableButton  (){
		this.controls
		.forEach((x:any,i)=>{
			if(x.type ==="add_remove_button"){
				this.renderer2.removeAttribute(
					x.element,
					"disabled",
				)
			}
		})
	}

	ngOnDestroy() {
		if (this.extras?.confirm === 'true') {
			this.subscriptions
			.forEach((x: any, i) => {
				try{
					x.unsubscribe()
				}
				catch(e){}

			})
			delete this.subscriptions
		}
	}
}

