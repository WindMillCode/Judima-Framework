import {   Component,OnInit,AfterViewInit,OnDestroy,ViewChildren,Inject,ElementRef,ChangeDetectorRef,ChangeDetectionStrategy,Renderer2  } from '@angular/core';
import {   RyberService   } from './ryber.service';
import {   fromEvent,Subject,Observable,of,Subscription,interval   } from 'rxjs';
import {eventDispatcher, esInit,coInit} from './customExports'
// import {   Router,RouterEvent } from '@angular/router';
import {   catchError,take,timeout,debounceTime   } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

declare global {
    interface Window { Modernizr: any; }
    // not let or else local to this file 
    var gapi:any 
    var Modernizr:any
    var SignaturePad:any
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy {

    constructor(
        public ryber: RyberService,
        private ref:ChangeDetectorRef,
        private renderer2: Renderer2,
        private http:HttpClient
    ) {}

    title = 'Template';

    // add representations here
    formCO=  this.ryber.formCO
    //
        
ngOnInit(){
    console.log('app ngOnInit fires on mount')


    //gapi setup
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://apis.google.com/js/api.js"; // Defines someGlobalObject
    s.text = ``;
    // this.renderer2.appendChild(window.document.body, s);
    //

    
    /* App Setup*/
    esInit(this.ryber,['formES'])
    coInit(
        this.ryber,
        [...this.formCO ],
        ((devObj)=>{
            devObj.co.metadata.formData = {}
        })
    )     
    

    if(   
        window.name !== '/'   &&
        window.name !== '/home'                            
    ){   


        window.name = '/home'


    }


    if(   this.ryber.appReloaded === 'true'   ){


        this.ryber.appCurrentNav = window.name 


    }            
          
    this.ryber.appViewComplete.subscribe(()=>{

        
        if(   window.name === ''   ){


            window.name = '/'


        }
   

        if(   this.ryber.appReloaded !== 'true'){


            window.name = this.ryber.appCurrentNav


        }            


        if(   ['/home','/'].includes(this.ryber.appCurrentNav)   ){


            
            this.routeDispatch({
                arr:[...this.formCO].sort(),
            })

            
            
        }


              
        
    })     

    
    // console.log(location.pathname)
}

routeDispatch(
    devObj:{
        arr:Array<any>
    }
){
    let {arr} = devObj
    arr = arr.sort()
    this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
    if(
        arr
        .filter((x,i) =>{ 
            return this.ryber.appViewCompleteArray[i] !== x 
        })
        .length === 0 && 
        arr.length === this.ryber.appViewCompleteArray.length
    ){


        console.log('dispatched')
        eventDispatcher({
            element:window,
            event:'resize'
        })        


        this.ryber.appViewCompleteArray = []


        if(   this.ryber.appReloaded === 'true'){


            this.ryber.appReloaded = 'false'


        } 
        

    }    

}

ngAfterViewInit(){
    console.log('app ngAfterViewInit fires on mount')    
}

ngOnDestroy(){
    console.log('app ngOnDestroy fires on dismount')
}

}
