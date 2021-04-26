import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType } from '../customExports'
import { catchError, delay,first,take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appTemplateDirective]'
  })
  export class TemplateDirective {


    @Input() templateDirective: any;
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


    @HostListener('click') onClick() {


        if (this.extras?.confirm === 'true') {

            let {http,subscriptions,group,zChildren,ref} = this
            //communicate with the python backend

            let data:any = {
                titleName:zChildren[group.modelName[0]].element.value,
                env:"extract_model",
                storageBuckets:group.storageBuckets.map((x:any,i)=>{
                    return zChildren[x].element.value
                })
            }
            zChildren[group.result[0]].element.innerText = "Submitting..."

            let postRequest =http.post(
                "http://localhost:3005",
                data,
                {
                    responseType: 'text',
                }
            )
            .subscribe({


                error: (error) => {

                    zChildren[group.result[0]].element.innerText =error
                    ref.detectChanges()
                    postRequest.unsubscribe()
                    eventDispatcher({
                        event: 'resize',
                        element: window
                    })
                },
                next: (result: any) => {

                    if(result.includes("an error occured")){
                        zChildren[group.result[0]].element.innerText =result
                    }
                    else{
                        zChildren[group.result[0]].element.innerText ="Result: "+result
                    }

                    postRequest.unsubscribe()
                    eventDispatcher({
                        event: 'resize',
                        element: window
                    })
                }

            })
            subscriptions.push(postRequest)
            //

        }

    }


    ngOnInit() {
        this.extras = this.templateDirective

        if (this.extras?.confirm === 'true' && this.extras?.type.includes("body")  ) {
            if(env.directive?.templateDirective?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' templateDirective ngOnInit fires on mount')
            let {ryber,extras,zChildren,subscriptions} = this
            let {co} = extras
            let {group,suffix}  = ryber[co].metadata.templateDirective

            // detects navigation
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
            //

            // optional script loading
            let {scripts} =this.ryber.appCO0.metadata
            scripts =  scripts .filter((x:any,i)=>{
                return x.name === "vanillaTilt"
            })
            let loadedScripts = Array.from(
                scripts.filter((x:any,i)=>{
                    return x.loaded !== "true"
                }),
                (x:any,i)=>{return fromEvent(x.element,"load")}
            )
            //

            let mainSubscription =combineLatest([
                ryber[co].metadata.zChildrenSubject,
                ...loadedScripts
            ])
            .subscribe((result:any) => {
                zChildren = ryber[co].metadata.zChildren
                let ref = result[0].ref || this.ref


                // feature element organization

                // reset the group for navigation and duplication
                    // if you have subscriptions unsub here
                // Object.entries(group)
                // .forEach((x:any,i)=>{
                //     let key = x[0]
                //     let val = x[1]
                //     val.subscriptions?.forEach((y,j)=>{
                //         y.unsubscribe()
                //     })
                // })
                group = {}
                //

                Object.entries(zChildren)
                .slice(2)
                .forEach((x:any,i)=>{


                    // if an element doesnt belong it doesnt belong
                    if(x[1].extras?.appTemplateDirective === undefined){
                        return
                    }
                    //

                    // start to organize the elements into groups
                        // for latch determine which duplicate it belongs to
                    let myGroup = x[1].extras.appTemplateDirective?.group || "default"
                    let myType =  x[1].extras.appTemplateDirective?.type || "default"
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
                            count,
                            subscriptions:[]
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

                this.zChildren = zChildren
                this.group = group
                this.ref = ref
                console.log(group)

            })
            subscriptions.push(mainSubscription)

        }
    }


	ngOnDestroy() {
		if (this.extras?.confirm === 'true') {
            if(env.directive?.templateDirective?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' templateDirective ngOnDestroy fires on dismount')
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

