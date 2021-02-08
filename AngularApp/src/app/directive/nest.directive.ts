import { Directive, ElementRef, HostListener, Input, Renderer2, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy } from '../customExports'
import { catchError, delay,first,tap,take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appNest]'
})
export class NestDirective {

    @Input() nest: any;
    extras: any;
    zChildren: any;
	groups:any;
	subscriptions:Array<any> = []
	ref:ChangeDetectorRef

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer2: Renderer2,
        private ryber: RyberService
    ) { }


    ngOnInit() {
        this.extras = this.nest
        if (this.extras?.confirm === 'true' ) {
            // console.log("nested ngOnInit")

			if(this.extras.type === "body"){


				let {ryber,zChildren,ref} =this
				let {co} = this.extras
				let {groups} = this.groups =  ryber[co].metadata.nest
				let {nest} = ryber[co].metadata



				this.subscriptions.push(
					ryber[co].metadata.zChildrenSubject
					.pipe(first())
					.subscribe(()=>{

						// initalize needed vars fom the component
                		;({ref,zChildren} = ryber[co].metadata)
						//

						//configure object to handle nesting for different groups
						this.extras.group
						.forEach((x:any,i)=>{
							groups[x.name] = {
								type:x.type,
								targets:[],
								nestNameZSymbolMap:{},
							}
						})
						//


						// gathering all objects to their respective nestGroups
						Object.entries(zChildren)
						.forEach((x:any,i)=>{
							let zChildNest = x[1]?.extras?.appNest
							groups?.[zChildNest?.group]?.targets.push(x)
						})
						//

						// creating the nestingTree
						Object.entries(groups)
						.forEach((x:any,i)=>{
							let key = x[0]
							let val = x[1]


							// first get a map from nestName to zSymbol
							val.targets
							.forEach((y:any,j)=>{
								let nestName= y[1].extras.appNest.name
								let suffix = 0
								let finalNestName =  y[1].extras.appNest.suffix === undefined ?
								nestName :
								nestName + " " + y[1].extras.appNest.suffix
								if(!Object.keys(val.nestNameZSymbolMap).includes(finalNestName)){
									val.nestNameZSymbolMap[finalNestName] =  y[0]
								}
								// seems there might be a duplication occuring,
								// provide for a suffix and seperate the name and suffix by space
								else{

									while(Object.keys(val.nestNameZSymbolMap).includes(nestName + " " + suffix)){
										suffix += 1
									}
									y[1].extras.appNest.suffix = suffix
									val.nestNameZSymbolMap[nestName + " " + suffix] =  y[0]

								}

							})
							//

							//attempt to nest the items
							val.targets
							.forEach((y:any,j)=>{
								let {name:finalNestName,suffix,under:finalNestUnder}= y[1].extras.appNest
								if(suffix !== undefined){
									if(val.nestNameZSymbolMap[finalNestUnder + " " + suffix] !== undefined){
										finalNestUnder += " " + suffix
									}
									finalNestName += " "+ suffix
								}

								let childZSymbol = val.nestNameZSymbolMap[finalNestName]
								let parentZSymbol = 	val.nestNameZSymbolMap[finalNestUnder]
								if(parentZSymbol !== undefined){

									this.renderer2.appendChild(
										zChildren[parentZSymbol].element,
										zChildren[childZSymbol].element
									)
									this.renderer2.setStyle(
										zChildren[childZSymbol].element,
										"position",
										"static"
									)
								}

							})
							//
						})
						//

						console.log(zChildren)
						console.log(ryber[co].metadata.nest)
						this.zChildren =  zChildren
						this.groups = groups
					})
				)
			}
            let nestInit = () => {


                //gather all elements involved in the nesting operation
                this.zChildren = this.ryber[this.extras.co.valueOf()].metadata.zChildren
                Object.entries(this.zChildren)
                .forEach((x:any,i)=>{
					console.log(this.extras,i)


                    if(x[1].extras?.appNest?.group ===this.extras.group ){



                        //actual nesting
                            // this happens only once, should continue to happen if application
                            // requires element to have new parents
                            // set the order so it doesnt follow template order
                            // FIX ME, figure better logic for the order, should be flex-order


                        if(x[1].extras.appNest.under === this.extras.nest){

                            // so the children elements can be added along as well

                            //
							try {
								this.renderer2.appendChild(
									this.el.nativeElement,
									x[1].element

								)
							}
							catch (error) {

							}

                            this.renderer2.setStyle(
                                x[1].element,
                                "position",
                                "static"
                            )
                            this.extras.newBoard= x[0]
                        }
                        //

                        //the zChildren now need to have their parent as the board

                        //
                    }
                })


            }




        }
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

