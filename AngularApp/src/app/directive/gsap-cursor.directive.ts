import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest,timer, Subject } from 'rxjs';
import { ryberUpdate,ryberUpdateFactory, eventDispatcher, numberParse, objectCopy } from '../customExports'
import { catchError, delay,first,repeat,map } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
	selector: '[appGsapCursor]'
  })
  export class GsapCursorDirective {

	@Input() gsapCursor: any;
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
		this.extras = this.gsapCursor
		if (this.extras?.confirm === 'true') {


            // wait for gsap to load
            let {scripts} =this.ryber.appCO0.metadata

            scripts =  scripts .filter((x:any,i)=>{
                return x.name === "gsap"
            })
			//

			this.subscriptions.push(
				combineLatest([
				...Array.from(scripts,(x:any,i)=>{return fromEvent(x.element,"load")})
				])
				.pipe(
					first()
				)
				.subscribe((result:any)=>{
					this.subscriptions.push(
						fromEvent(document.body,"mousemove")
						.subscribe((result:any)=>{
							gsap.to(".a_p_p_Gsap-Cursor",{
								x:result.clientX,
								y:result.clientY,
								stagger:-0.05
							})
						})
					)
				})
			)





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

