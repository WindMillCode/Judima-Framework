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
    ) { };

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
        
        // formComponent Instances
        formMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        formMyElementsArray: any[] = [];               
        formCO3:componentObject ={ 
            metadata:{
            },
            generator:(function(){
                return function *generator() {
                    var index = 8352;
                    while (true)
                    yield index++;
                }()
            })(),            
            quantity:[
                [],
                [
                    {
                        signature:"containing",
                        quantity:[[3]],
                        bool:[["div"]], 
                        val:[
                            ["f_o_r_m_Board"],
                        ],  
                        text:[
                            [],
                        ],
                        symbol:[["&#8353"]],
                        ngCss:[
                            [
                                {
                                    height:"400px",
                                    width:"100%",
                                    // "z-index":"1",
                                    "background-color":"rgb(255, 241, 204)",
                                    top:"0px"                                
                                }                                                                                                      
                            ]                    
                        ],                  
                        extras:[
                            [],
                            [],
                            []                      
                        ]
                    },                      
                    ...Array.from(Array(1),()=> {
                        return {
                            signature:"",
                            quantity:[
                                [],
                                [],
                                []
                            ],
                            bool:[
                                [],
                                [],
                                []
                            ], 
                            val:[
                                [],
                                [],
                                []
                            ], 
                            text:[
                                [],
                                [],
                                []
                            ],
                            symbol:[
                                [],
                                [],
                                []
                            ],                            
                            ngCss:[
                                [],
                                [],
                                []                   
                            ],      
                            extras:[
                                [],
                                [
                                    // ...Array.from(Array(5),()=> { 
                                    //     return {
                                    //         deltaIndex:1
                                    //     }
                                    // }),          
                                    // {
                                    //     attr:{
                                    //         min:0,
                                    //         max:200
                                    //     },
                                    //     deltaIndex:1
                                    // },
                                    // ...Array.from(Array(2),()=> { 
                                    //     return {
                                    //         deltaIndex:1,
                                    //         appDateClick:{
                                    //             confirm:"true"
                                    //         }                                            
                                    //     }
                                    // }),                                                                
                                ],
                                []                      
                            ]
                    }})                                                                                                                                                                                                                   
                ]
            ],       
        };                                              
        //        
    /* */   
    
    
    /*overlay*/

        // overlayComponent events
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
        
        // overlayComponent Instances
            //if overlayCO0 acts up check in formpanelResponsive you might have a bad check to prevent from loading the top
        overlayMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        overlayMyElementsArray: any[] = [];        
      
              
        //        
    /* */  

    
    
}