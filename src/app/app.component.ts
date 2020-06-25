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

Modernizr = window.Modernizr = window.Modernizr || {}
    // Modernizr setup IE 
    try{
        Modernizr.addTest('inputTypeDate', function() {
            try{
            const i = document.createElement('input');
            i.type = 'date'
            document.body.appendChild(i );
            document.body.removeChild(i );
            // ANGULAR MIGHT GET MAD ABT THIS
            return true
            }
            catch(e){
                return false
            }
        });
    }
    catch(e){
        Modernizr.inputtypedate = false
    }
    //   


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
    private googleCreds: any = null

    formCO:Array<any> = Array.from(Array(0),(x,i)=> {return 'formCO'+ i })
    headingCO:Array<any> = Array.from(Array(0),(x,i)=> {return 'headingCO'+ i })
        
ngOnInit(){
    console.log('app ngOnInit fires on mount')


    //gapi setup
    const s = this.renderer2.createElement('script');
    let ba = this
    s.onload = function(){
        let assertion = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodWJzcG90Y2xpZW50bWVkaWF0b3JAcXVpY2tzdGFydC0xNTg5NjYwMjk5MTA5LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic2NvcGUiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyIsImF1ZCI6Imh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwiZXhwIjoxNTkyMTY2MDQ0LjA3NiwiaWF0IjoxNTkyMTY1OTI0LjA3Nn0.PoXs3xnPC-jTB5cdiyREpW8YWQrnwvjjiiZjRLLHbrav9jowwnspD7lCAhqBMcfqzz83n8luUJqFZPnbFVsVCHEhYENZXvnn_yetKAA43O41Go4rQXcmSi0uhlyQnIYlqGMDKigl3vf9hPFZLR8rgnD_hGrnx8jvwqsCy_Oh5P3uH520_XRAuB6qSp58zXSXV8QRxBESt5nI9H37gxty69KaaHaiPaWniFTRA0ronnMzadatnWY3LigZsJyCYRdOOUKRChM3vuxk6AK_IWD-EY8lgpmUtGPAmzvtQgJVnwnwY2uxg2lWe2taSJENao6OHR8NYi9kKYuCEtnqCbFVqA"

        ba.http.post(
            "https://oauth2.googleapis.com/token",
            `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=`+assertion,
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }       
        ).pipe(
            catchError((error:any)=>{
                // console.log(error)
                return of([])
            })
        )
        .subscribe((a:any)=>{
            console.log(a)
            let myToken = a.access_token
  
            gapi.load('client', ()=>{
                // gapi.client.init({apiKey}).then(function () {
                    gapi.client.setToken({access_token:myToken})
                    gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
                    // console.log('we have authenticated and loaded the reuried sheets api library')
                    // console.log(gapi)
                    // gapi.auth2.getAuthInstance().signIn()
    
                // }).catch((e)=>{
                //       console.warn(e)
                // })            
            });
            
            
        })         
        
    };
    s.onreadystatechange = ()=>{
        if (s.readyState === 'complete') {
            s.onload()
        }
    }
    s.type = 'text/javascript';
    s.src = "https://apis.google.com/js/api.js"; // Defines someGlobalObject
    s.text = ``;
    // this.renderer2.appendChild(window.document.body, s);
    //

    
    /* App Setup*/
    esInit(this.ryber,['headingES','formES'])
    coInit(
        this.ryber,
        [...this.headingCO,...this.formCO ],
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
        // console.log(this.ryber.appCurrentNav)
        // console.log(   window.location   )
        // console.log(
        //     window.name,
        //     this.ryber.appReloaded
        // )

        
        if(   window.name === ''   ){


            window.name = '/'


        }
   

        if(   this.ryber.appReloaded !== 'true'){


            window.name = this.ryber.appCurrentNav


        }            


        if(   this.ryber.appCurrentNav  === '/' || this.ryber.appCurrentNav  === '/home'    ){


            let arr = [...this.formCO].sort()
            this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()
            // console.log(this.ryber.appViewCompleteArray)


            if(
                arr.filter((x,i) =>{ 
                    return this.ryber.appViewCompleteArray[i] !== x 
                }).length === 0 && arr.length === this.ryber.appViewCompleteArray.length
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


              
        
    })     

    // console.log(location.pathname)
}

ngAfterViewInit(){
    console.log('app ngAfterViewInit fires on mount')    
}

ngOnDestroy(){
    console.log('app ngOnDestroy fires on dismount')
}

}
