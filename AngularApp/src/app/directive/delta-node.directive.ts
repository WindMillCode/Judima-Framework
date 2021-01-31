
import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy } from '../customExports'
import { catchError, delay } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
	selector: '[appDeltaNode]'
})
export class DeltaNodeDirective {

	@Input() deltaNode: any;
	extras: any;
	zChildren: any;
	agGrid: any = {
		zSymbol: ""
	}
	subscriptions: Array<Subscription> = []

	constructor(
		private el: ElementRef,
		private http: HttpClient,
		private renderer: Renderer2,
		private ryber: RyberService
	) { }


	@HostListener('click') onClick() {



	}

	ngOnInit() {
		this.extras = this.deltaNode
		if (this.extras?.confirm === 'true') {


			this.subscriptions.push(
				combineLatest([
					this.ryber[this.extras.co.valueOf()].metadata.zChildrenSubject
				])
				.subscribe((result) => {

					this.zChildren = this.ryber[this.extras.co.valueOf()].metadata.zChildren

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
		}
	}
}

