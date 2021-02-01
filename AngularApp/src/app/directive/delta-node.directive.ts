
import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest,timer } from 'rxjs';
import { ryberUpdate,ryberUpdateFactory,deltaNode, eventDispatcher, numberParse, objectCopy } from '../customExports'
import { catchError, delay,first } from 'rxjs/operators'
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
	// {name:{

	// 	type:string,
	// 	targets:Array<any>
	// }}
	subscriptions: Array<Subscription> = []

	constructor(
		private el: ElementRef,
		private http: HttpClient,
		private renderer: Renderer2,
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
						this.ryber[this.extras.co.valueOf()].metadata.zChildrenSubject
					])
					.pipe(first())
					.subscribe((result) => {



						this.zChildren = this.ryber[this.extras.co.valueOf()].metadata.zChildren
						this.templateMyElements = this.ryber[this.extras.co.valueOf()].metadata.templateMyElements
						this.ref =this.ryber[this.extras.co.valueOf()].metadata.ref
						// keep proper note of the elements on the dom
						// this.subscriptions.push(
						// 	this.templateMyElements.changes
						// 	.subscribe((result)=>{
						// 		console.log(result)
						// 		// this.ryber[co].metadata.deltaNode.updateZChild.next()
						// 	})
						// )
						//

						// gathering all the deltaGroups in the component
						this.extras.group
						.forEach((x:any,i)=>{
							groups[x.name] = {
								type:x.type,
								targets:[],
								hooks:{
									directive:"prepare",
									component:"prepare"
								}
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

						// sorting the elements associated to respetive groups
						Object.entries(groups)
						.forEach((x:any,i)=>{
							let key = x[0]
							let val = x[1]

							// we should have 1 add button and 1 remove button, the rest are multipled in the DOM
							if(val.type ==="add_remove_button"){
								val.targets =val.targets
								.map((y:any,j)=>{
									// logic for add button concept
									if(y[1]?.extras?.appDeltaNode?.type === "add"){
										val.add = {target:y,by:+y[1].extras.appDeltaNode.by}
									}
									//

									//logic for remove button concept
									if(y[1]?.extras?.appDeltaNode?.type === "remove"){
										val.remove = {target:y,by:+y[1].extras.appDeltaNode.by}
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
								this.subscriptions.push(
									fromEvent(
										val.add.target[1].element,"click",

									)
									.subscribe((result:any)=>{


										Array(val.add.by).fill(null)
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
														// y[1].extras.appDeltaNode.increment.counter +=1
														return (++y[1].extras.appDeltaNode.increment.counter)+mySplit[1]
													}
													return y[1].innerText?.item
												})()
												// css["background-color"]= "blue"
												addedDeltas.push(
													rUD({
														co,
														bool:y[1].bool,
														css,
														cssDefault:y[1].cssDefault,
														text,
														extras:objectCopy(y[1].extras),
														val:y[1].val.split("f_o_r_m_")[1]
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
											// console.log("why I freeze")
											ryber[co].metadata.deltaNode.updateZChild.next()

										})





									})
								)

								//

								// remove concept logic
								this.subscriptions.push(
									fromEvent(val.remove.target[1].element,"click")
									.subscribe((result:any)=>{

									})
								)
								//
							}
							//


						})
						//

						// console.log(this.subscriptions)




					})
				)

			}
			//


		}
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

