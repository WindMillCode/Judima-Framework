import { Directive,  HostListener, Input, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, Subscription } from 'rxjs';
import {  objectCopy,ryberUpdateFactory } from '../customExports'
import { first, take } from 'rxjs/operators'



@Directive({
    selector: '[appLatch]'
})
export class LatchDirective {

    @Input() latch: any;
    extras: any;
    co:any;
    zChildren: any;
	dropdown:any= {
		container:null, /*zSymbol*/
		options:null
	}
	templateMyElements:any
	subscriptions:Array<Subscription> = []

    constructor(
        private ryber: RyberService,
		private ref:ChangeDetectorRef
    ) { }

    @HostListener('click',['$event']) onClick(event){
        if(this.extras?.confirm === "true"){


			if(this.extras.type === "dropdown"){

				let {zChildren,ref,dropdown} = this
				let {options:zSymbols} = dropdown

				if(this.extras.state === "open"){
					this._dropdownStateClosed({zSymbols, zChildren, ref});
				}

				if(this.extras.state === "closed"){

					this._dropdownStateOpened({zSymbols, zChildren,ref});

				}

				// toggle between different states
				this.extras.state = this.extras.state === "open" ? "closed":"open"
				//

			}


        }
    }



    ngOnInit() {
        this.extras = this.latch

        if (this.extras?.confirm === 'true') {
			let {ryber,ref,zChildren} = this
			let rUD = ryberUpdateFactory({ryber})
            let co = this.co = this.extras.co


            this.subscriptions.push(
				ryber[co].metadata.zChildrenSubject
				.pipe(first())
				.subscribe((devObj)=>{
					zChildren = ryber[co].metadata.zChildren
					this.templateMyElements = devObj.templateMyElements


					if(this.extras.type === "dropdown"){

						let zChild = zChildren[this.extras.zSymbol]
						// console.log(zChild.extras.appDeltaNode.options.target)
						// the problem is were using flexbox for nested elements
							// wrap the dropdown in a div
						if(zChild.extras.appNest.confirm === "true"){

							console.log("div container dropdown create so dropdown can maintain its feature despite its flexbox container")
							let {val,css} = zChild
							let extras = objectCopy(zChild.extras)

							val = this._dropdownGetOriginalVal({co, val}).split(" ")[0] + "-container";

							let containerCss = {
								...zChild.css,
								height:css.height || getComputedStyle(zChild.element).height,
								width:css.width || getComputedStyle(zChild.element).width,
								position:"static"
							}

							// rename appNest grouping convention uncoventionally
								// issues when appNest goes over

							// this is needed because how we duplicate is when we copy the target
								// this.extras.suffix has no connection to the first, so n + 1 gets updated
								// but on duplication starts at the suffix contained in the original
							if(zChild.extras.appDeltaNode.options.target.zSymbol !== undefined){
								let {zSymbol} = zChild.extras.appDeltaNode.options.target
								this.extras.suffix = zChildren[zSymbol].extras.appLatch.suffix
							}
							zChild.extras.appNest.under  = extras.appNest.name.replace(/DropDown\d+$|$/,"DropDown"+(++this.extras.suffix))
							extras.appNest.name = zChild.extras.appNest.name.replace(/DropDown\d+$|$/,"DropDown"+this.extras.suffix)
							extras.appNest.under = this.extras.trueNestUnder
							this.extras.suffix++
							zChild.extras.appNest.name = extras.appNest.name.replace(/DropDown\d+$|$/,"DropDown"+this.extras.suffix)
							zChild.extras.appNest.options.ignore = extras.appNest.options.ignore = "false"
							//

							// more modifications
							delete extras.appDeltaNode
							//

							this.dropdown.container = rUD({
								co,
								bool: 'div',
								val,
								css:containerCss,
								cssDefault:{},
								extras,
							})
						}
						//

						console.log("creating psuedo-options element for the the dropdown feature ")
						this.dropdown.options  = this.extras.options
						.map((x:any,i)=>{
							let extras = objectCopy(zChild.extras)
							let val = zChild.val
							let css = objectCopy(zChild.css)

							// we can also use spread syntax to copy function, but make sure all object they work on are parameters
							extras.judima.formatIgnore = "true"
							extras.judima.topLevelZChild = "false"
							extras.appLatch.confirm = "false"
							css["z-index"] -= 1
							css["position"] = "relative"
							if(zChild.extras.appNest.confirm === "true"){
								extras.appNest.name =extras.appNest.name.replace(/DropDown\d+$|$/,"DropDown"+ (++this.extras.suffix))
							}
							// there is no additional latching that needs to be done
								// these options are not to be duplicated
								// they will latch after the select element is nested
							delete extras.appDeltaNode
							// delete extras.appNest
							//

							if(this.extras.options.length -1  === i){
								val = val.split("a_p_p_DropDownMiddle").join("a_p_p_DropDownLast")
							}
							return rUD({
								quantity:4,
								symbol:this.extras.zSymbol,
								co,
								bool:zChild.bool,
								css,
								cssDefault:objectCopy(zChild.cssDefault),
								text:x,
								extras,
								val
							})
						})
						ref.detectChanges()

						console.log("making dropdown in opened state click on the select to close it")
						this.extras.state = this.extras.state  || "closed"


						// update zChild
							// we place here becuase the regular subject does something strange
							// and seems to want to emit old values which are causing nasty corrpution issues
						this.subscriptions.push(
							ryber[co].metadata.zChildrenSubject
							.pipe(
								take( zChildren[this.extras.zSymbol].quantity === 3 ? 2:1)
							)
							.subscribe((result:any)=>{
								if(!result?.options?.type.includes("latch")){
									return
								}

								// since this could not happen in a timely fashion I placed here instead

								if(zChild.extras.appNest.confirm === "true"){
									zChild.extras.appNest.options.ignore ="true"
									if(zChild.extras.appDeltaNode.options.target.zSymbol !== undefined){
										let {zSymbol} = zChild.extras.appDeltaNode.options.target
										zChildren[zSymbol].extras.appLatch.suffix = this.extras.suffix
									}
								}
								//

								this.zChildren = result.directivesZChild

							})
						)
						//

						// let the component know we have new elements on the DOM
						ryber[co].metadata.latch.updateZChild.next({
						})
						//

					}


				})
			)


			// move with target
            this.subscriptions.push(
				ryber[co].metadata.ngAfterViewInitFinished
				.subscribe((result:any)=>{

					let {dropdown,zChildren} = this
					let {options:zSymbols} = dropdown

					if(this.extras.type === "dropdown"){


						// attach listeneners to the options
						if(this.extras.optionsSetup !== "true"){


							this.subscriptions.push(
								...zSymbols
								.map((x:any,i)=>{
									return fromEvent(zChildren[x].element,"click")
									.subscribe((result:any)=>{
										// choose the choosen value, if the item was chosen go back to the default value
										zChildren[this.extras.zSymbol].innerText.item =
										zChildren[this.extras.zSymbol].innerText.item ===
										zChildren[x].innerText.item ?
										this.extras.select.value : zChildren[x].innerText.item
										ref.detectChanges()
										//

										// ?? option to disable this and only fire when select is clicked
										this._dropdownStateClosed({zSymbols, zChildren, ref});
										this.extras.state = "closed"
										//

									})
								})
							)
							this.extras.optionsSetup = "true"
						}
						//


						if(this.extras.state === "closed"){

							// place options behind select element
							this._dropdownStateClosed({zSymbols, zChildren, ref});
							//
						}

						else if(this.extras.state === "open"){
							this._dropdownStateOpened({zSymbols, zChildren,ref});
						}

					}
				})
			)
			//



        }
    }


	private _dropdownGetOriginalVal(devObj:{co: any, val: any}) {
		let {co,val} = devObj
		let symbol = this.extras.zSymbol;
		let judimaCssIdentifier = co
			.valueOf()
			.split("CO")[0]
			.split("")
			.join("_");
		if (symbol !== undefined) {
			let utf8Symbol = String.fromCharCode(+symbol.split("&#")[1]);

			val = val.replace(
				new RegExp(utf8Symbol),
				""
			);
		}


		val = val.replace(
			new RegExp(judimaCssIdentifier + "_"),
			""
		);
		return val;
	}

	private _dropdownStateOpened(devObj:{zSymbols: string[], zChildren: any,ref:ChangeDetectorRef}) {
		let {zSymbols, zChildren,ref} = devObj

		zChildren[this.extras.zSymbol].css.position = "relative"
		zSymbols
		.forEach((x: any, i) => {
			zChildren[x].css.width = zChildren[this.extras.zSymbol].css.width;
			zChildren[x].css.position = "relative"
		});
		ref.detectChanges()
	}

	private _dropdownStateClosed(devObj:{zSymbols: string[], zChildren: any,ref:ChangeDetectorRef}) {

		let {zSymbols, zChildren, ref} = devObj
		zChildren[this.extras.zSymbol].css.position = "absolute"
		zSymbols
		.forEach((x: any, i) => {
			zChildren[x].css.position = "absolute"

		});

		ref.detectChanges();
	}

    ngOnDestroy() {
        if (this.extras?.confirm === 'true') {

			this.subscriptions
			.forEach((x: any, i) => {
				x.unsubscribe()
			})
			delete this.subscriptions

			if(this.extras.type === "dropdown"){
				let {ryber,dropdown,co,templateMyElements} = this
				let {options:zSymbols,container} = dropdown

				// if this dropdown was nested and dupliated -1 on the suffix
				this.extras.suffix--
				//

				let rUD = ryberUpdateFactory({ryber})

				if(container !== null){
					zSymbols.push(container)
				}
				templateMyElements.changes
				.pipe(
					first(),
				)
				.subscribe({
					next:(result:any)=>{
						zSymbols
						.forEach((x:any,i)=>{
							rUD({
								symbol:x,
								type:"remove",
								co
							})
						})
						this.ref.detectChanges()
					},
				})


			}
        }
    }
}

