import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType } from '../customExports'
import { catchError, delay,first,take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'node:console';


@Directive({
    selector: '[appVanillaTilt]'
  })
  export class VanillaTiltDirective {


    @Input() vanillaTilt: any;
    extras: any;
    zChildren: any;
    subscriptions:Array<Subscription> = []
    group:any;
    ref:ChangeDetectorRef

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer2: Renderer2,
        private ryber: RyberService
    ) { }





    ngOnInit() {
        this.extras = this.vanillaTilt

        if (this.extras?.confirm === 'true' && this.extras?.type === "body"  ) {
            if(env.directive?.vanillaTilt?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' vanillaTilt ngOnInit fires on mount')
            let {ryber,extras,zChildren,subscriptions} = this
            let {co} = extras
            let {group,suffix}  = ryber[co].metadata.vanillaTilt

			let action:any = navigationType({
				type:["full"],
				fn:()=>{
					if(
						ryber.appCO0.metadata.navigation.full.navigated === "true" &&
						ryber[co].metadata.judima.init === "true"
					){
						return "return"
					}
				},
				ryber
			})



            let mainSubscription =combineLatest([
                ryber[co].metadata.zChildrenSubject,
            ])
            .subscribe((result:any) => {
                zChildren = ryber[co].metadata.zChildren
                let ref = result[0].ref || this.ref


                // feature element organization

                // reset the group for navigation and duplication
                Object.entries(group)
                .forEach((x:any,i)=>{
                    let key = x[0]
                    let val = x[1]
                    val.subscriptions?.forEach((y,j)=>{
                        y.unsubscribe()
                    })
                })
                group = {}
                //

                Object.entries(zChildren)
                .slice(2)
                .forEach((x:any,i)=>{

                    // if an element doesnt belong it doesnt belong
                    if(x[1].extras?.appVanillaTilt === undefined){
                        return
                    }
                    //

                    // start to organize the elements into groups
                        // for latch determine which duplicate it belongs to
                    let myGroup = x[1].extras.appVanillaTilt?.group || "default"
                    let myType =  x[1].extras.appVanillaTilt?.type || "default"
                    let deltaNodeGroup =  x[1].extras?.appDeltaNode?.group || x[1].extras.appLatch?.deltaNode?.group
                    // determine if there is a duplicate and which duplicate it belongs to
                    let count = 0
                    ryber[co].metadata.deltaNode.groups[deltaNodeGroup]?.deltas
                    .forEach((y:any,j)=>    {

                        let targetZSymbols = [x[0],x[1].extras.appLatch?.deltaNode?.zSymbol]

                        let included = y.some( ai => targetZSymbols.includes(ai) );
                        // console.log(included)
                        if(included){
                            count = j +1
                        }
                    })
                    //
                    myGroup = myGroup.split(suffix + count)[0] + suffix + count
                    if(group[myGroup]===undefined){
                        group[myGroup] ={
                            deltaNode:{},
                            types:{},
                            suffix,
                            count
                        }

                    }

                    // organize by type
                    if(group[myGroup].types[myType] === undefined){
                        group[myGroup].types[myType] = new Set()
                    }
                    group[myGroup].types[myType].add(x[0])
                    //

                })
                //

                // there should be one target make it tilt
                Object.entries(group)
                .forEach((x:any,i)=>{
                    let key = x[0]
                    let val = x[1]
                    // there was a navigation reinit
                    if(action.full ==="return"){
                        val.init = "false"
                    }
                    //


                    if(val.init !== "true" && val.types.target !== undefined){
                        val.init = "true"

                        let part:any = val.types.part ? Array.from(val.types.part) : []
                        let target:any = Array.from(val.types.target)
                        target
                        .forEach((y:any,j)=>{
                            VanillaTilt.init(zChildren[y].element,{
                                perspective:500,

                                "mouse-event-element":[...part.map((z,k)=>{
                                    return zChildren[z].element
                                }),zChildren[y].element],
                                // script modification wouldn't allow me to make change otherwise
                                ...zChildren[y].extras.appVanillaTilt?.initOptions
                            })

                            // make sure all attached move along with element
                            let tiltOthers = (e:any)=>{
                                part
                                .forEach((z:any,k)=>{
                                    zChildren[z].css["will-change"] = zChildren[y].element.style["will-change"]
                                    zChildren[z].css["transform"] =   zChildren[y].element.style["transform"]

                                })
                                ref.detectChanges()

                            }
                            let tiltChange = fromEvent(zChildren[y].element,"tiltChange")
                            .subscribe(tiltOthers)
                            let tiltOut =  fromEvent(zChildren[y].element,"mouseout")
                            .pipe(
                                delay(50)
                            )
                            .subscribe(tiltOthers)
                            val.subscriptions = [tiltChange,tiltOut]
                            subscriptions.push(
                                ...val.subscriptions
                            )
                            //


                        })


                    }
                })
                //



                this.zChildren = zChildren
                this.group = group
                this.ref = ref


            })
            subscriptions.push(mainSubscription)

        }
    }


	ngOnDestroy() {
		if (this.extras?.confirm === 'true') {
            if(env.directive?.vanillaTilt?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' vanillaTilt ngOnDestroy fires on dismount')
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

