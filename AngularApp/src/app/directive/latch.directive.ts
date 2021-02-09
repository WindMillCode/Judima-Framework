import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, Host,ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest, Observable } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,ryberUpdate,ryberUpdateFactory,xContain,stack, zChildren } from '../customExports'
import { catchError, delay,first } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Directive({
    selector: '[appLatch]'
})
export class LatchDirective {

    @Input() latch: any;
    extras: any;
    co:any;
    zChildren: any;
    zSymbols:Array<string /*zSymbol*/>
	templateMyElements:any
	subscriptions:Array<Subscription> = []

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer: Renderer2,
        private ryber: RyberService,
		private ref:ChangeDetectorRef
    ) { }

    @HostListener('click',['$event']) onBlur(event){
        if(this.extras?.confirm === "true"){


			if(this.extras.type === "dropdown"){

				let {zSymbols,zChildren,ref} = this


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

					let {templateMyElements} = devObj
					zChildren = ryber[co].metadata.zChildren


					if(this.extras.type === "dropdown"){
						let zChild = zChildren[this.extras.zSymbol]
						this.zSymbols = this.extras.options
						.map((x:any,i)=>{
							let extras = objectCopy(zChild.extras)
							let val = zChild.val

							// we can also use spread syntax to copy function, but make sure all object they work on are parameters
							extras.judima.formatIgnore = "true"
							extras.judima.topLevelZChild = "false"
							extras.appLatch.confirm = "false"

							// there is no additional latching that needs to be done
								// these options are not to be duplicated
								// they will latch after the select element is nested
							// delete extras.appDeltaNode
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
								css:objectCopy(zChild.css),
								cssDefault:objectCopy(zChild.cssDefault),
								text:x,
								extras:extras,
								val
							})

						})
						ref.detectChanges()
						this.extras.state = this.extras.state  || "closed"


						// let the component know we have new elements on the DOM
						ryber[co].metadata.latch.updateZChild.next({
						})
						//
					}


				})
			)
			// move with target
            this.subscriptions.push(
				combineLatest([
					// if this causes issue seperate the observables and
					// use one to refresh the zChildren
					ryber[co].metadata.zChildrenSubject,
					ryber[co].metadata.ngAfterViewInitFinished
				])
				.pipe(
					catchError((error)=>{
						return of(error)
					}),
				)
				.subscribe((result:any)=>{

					this.zChildren = result[0].directivesZChild
					let {zSymbols,zChildren} = this

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


	private _dropdownStateOpened(devObj:{zSymbols: string[], zChildren: any,ref:ChangeDetectorRef}) {
		let {zSymbols, zChildren,ref} = devObj
		zSymbols
		.forEach((x: any, i) => {
			zChildren[x].css.height = zChildren[this.extras.zSymbol].css.height;
			zChildren[x].css.width = zChildren[this.extras.zSymbol].css.width;
			zChildren[x].css.left = zChildren[this.extras.zSymbol].css.left;
			zChildren[x].css["z-index"] = zChildren[this.extras.zSymbol].css["z-index"]
			
		});
		stack({
			zChildKeys:[
				this.extras.zSymbol,
				...zSymbols],
			ref,
			zChild:zChildren,
			spacing:[null,0],
			type:'simpleStack',
			heightInclude:['t']
		})
		ref.detectChanges
	}

	private _dropdownStateClosed(devObj:{zSymbols: string[], zChildren: any,ref:ChangeDetectorRef}) {

		let {zSymbols, zChildren, ref} = devObj
		let greatestZIndex = -Infinity;
		zSymbols
		.forEach((x: any, i) => {
			zChildren[x].css.height = zChildren[this.extras.zSymbol].css.height;
			zChildren[x].css.width = zChildren[this.extras.zSymbol].css.width;
			zChildren[x].css.top = zChildren[this.extras.zSymbol].css.top;
			zChildren[x].css.left = zChildren[this.extras.zSymbol].css.left;
			zChildren[x].css["z-index"] -= 1
			if (zChildren[x].css["z-index"] > greatestZIndex) {
				greatestZIndex = zChildren[x].css["z-index"];
			}

		});

		zChildren[this.extras.zSymbol].css["z-index"] = greatestZIndex + 1;
		ref.detectChanges();
	}

    ngOnDestroy() {
        if (this.extras?.confirm === 'true') {
			this.subscriptions
			.forEach((x: any, i) => {
				x.unsubscribe()
			})
			delete this.subscriptions
        }
    }
}

