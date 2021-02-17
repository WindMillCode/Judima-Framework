import { Component, OnInit, OnDestroy } from '@angular/core';
import { RyberService } from './ryber.service';
import {  Subject,  of, Subscription, ReplaySubject,  merge } from 'rxjs';
import { eventDispatcher, esInit, coInit } from './customExports'
import { tap } from 'rxjs/operators'
import { environment as env} from 'src/environments/environment';




declare global {
    interface Window { Modernizr: any;createMap:any }
    // not let or else local to this file
    var Modernizr: any
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(
        public ryber: RyberService,
    ) { }

    title = 'Judima';
    CO$: Subscription

    ngOnInit() {
        if (env.lifecycleHooks) console.log('app ngOnInit fires on mount');




        /* App Setup*/
        esInit(this.ryber, this.ryber.appCO0.metadata.ES)


        this.CO$ = merge(
            ...this.ryber.appCO0.metadata.CO.map((x, i) => {
                return this.ryber[x.valueOf()]
            })
        )
        .subscribe((coArray: any) => {
            coInit(
                this.ryber,
                coArray,
                ((devObj) => {
                    let { co } = devObj
                    co.metadata.latch = {
                        updateZChild : new ReplaySubject<any>(),
                        zChild:{},
					}

                    co.metadata.deltaNode = {
						updateZChild : new Subject<any>(),
						groups:{},
						current:null,
						component:{
							confirm:"false"
						},

                    }
					co.metadata.nest= {
						groups:{}
					}
                    co.metadata.zChildrenSubject = new Subject<any>()
                    .pipe(
                        tap((val) => {
							co.metadata.zChildren = val.directivesZChild
							co.metadata.templateMyElements = val.templateMyElements
							co.metadata.ref = val.ref
                            co.metadata.zChildren$ = of(val.directivesZChild)
                        }),
                    )
                    co.metadata.ngAfterViewInitFinished = new Subject<any>()
                })
            )
        })

        // console.log(this.ryber)


        this.ryber.appViewComplete.subscribe(() => {


            eventDispatcher({
                element: window,
                event: 'resize'
            })


            this.ryber.appViewCompleteArray = []


            if (this.ryber.appReloaded === 'true') {


                this.ryber.appReloaded = 'false'


            }




        })


	}





	ngAfterViewInit(){
		// console.log(this.ryber)
	}

    ngOnDestroy() {
        if (env.lifecycleHooks) console.log('app ngOnDestroy fires on dismount')
        this.CO$.unsubscribe?.()
        this.ryber.appViewComplete.unsubscribe?.()
    }


}




