import { Injectable,ChangeDetectorRef } from "@angular/core";
import { Observable, of, Subject, Subscription, } from "rxjs";
// import { Router,RouterEvent } from "@angular/router";
import { zChildren, componentObject,numberParse,ryberUpdate } from "./customExports";
import { HttpClient } from "@angular/common/http";




@Injectable({
  providedIn: "root"
})
export class RyberService {

    constructor(
        // private router:Router
        private http:HttpClient
    ) { 


        let rUD = ((a)=>{
            return (zConsist)=>{
                ryberUpdate.call(a,zConsist)
            }
        })(this)
        
        
        // add your zChildren here
        // rUD({
        //     co:'formCO0',
        //     ryber:this,
        //     css:{
        //         height:"300px",
        //         width:"100%",
        //         top:"0px",
        //         "background-color":"rgb(255, 241, 204)",
        //     }
        // })        
    };

    /* app*/
    appCurrentNav:string = "/home"
    appReloaded:string = "true"
    // appRouterEvent$:Observable<any> = this.router.events    
    appRouterEventSubscription0:Subscription
    appSubscriptionArray:Subscription[] = []
    appViewComplete:Subject<any> =  new  Subject<any>()
    appViewCompleteArray:Array<any> = []
    appEventListener:Function = (a,event=null)=>{
        
        
        if(   typeof a === "function"   ){
        
            
            if(
                parseInt(document.querySelector("body > app-root").attributes["ng-version"].value.split(".")[0]) >= 9
            ){


                a(event)


            }


            else{
                a()
            }


        }


    }
    // so you dont get bogged by forced to fill out empty arrays
    appAvailble:Function = (item,prop)=>{
        try{
            return item[prop.valueOf()]
        }
        catch (e){
        }
    }
    //    
    appEvents: Function = (devObj:{
        typesES:string,
        event:string, //property of ES
        of:Observable<any>
    })=>{
        let item = this[devObj.typesES.valueOf()][devObj.event.valueOf()].generator.next().value
        this[devObj.typesES.valueOf()]
        [devObj.event.valueOf()]
        [item] = 
        devObj.of
        return item
    }
    appTestKeyword = "root"   
    appTV = "" 
        // appCO  extra metadata object
        appCO0:Partial<componentObject> = {
            metadata:{

            },
            quantity:[]
        }
        //
    /* */
    
    
    /*form*/

        // formComponent data

        //

        // formComponent events
        formLoadEvent$:Observable<Event> // to be deprecated
        formResizeEvent$:Observable<Event>
        formClickEvent$:Observable<Event>        
        formES:any  = {
            resize:{
            },
            click:{
            },
            load:{
            },
            input:{
            }
        }   
        // 
        
             
                
                                 
        //        
    /* */   
    
    
    /*overlay*/

        // overlayComponent events
            //deprecated make your own as needed
        overlayLoadEvent$:Observable<Event>
        overlayResizeEvent$:Observable<Event>
        overlayES:any  = {
            resize:{
            },
            click:{
            },
            load:{
            }
        }        
        overlayClickEvent$:Observable<Event>       
        // 
        
      
              
        //        
    /* */  

    
    
}

