import { Injectable,ChangeDetectorRef } from "@angular/core";
import { Observable, of, Subject, Subscription, } from "rxjs";
// import { Router,RouterEvent } from "@angular/router";
import { zChildren, componentObject,numberParse,ryberUpdate, objectCopy,cms } from "./customExports";
import { HttpClient } from "@angular/common/http";
import * as website from "./database/website.json";




@Injectable({
  providedIn: "root"
})
export class RyberService {

    constructor(
        // private router:Router
        public http:HttpClient
    ) { 


        let rUD = ((a)=>{
            return (zConsist)=>{
                ryberUpdate.call(a,zConsist)
            }
        })(this)

        // cms setup
        let regex = {
            phone:'[(]?[2-9]{1}[0-9]{2}[)-. ]?[2-9]{1}[0-9]{2}[-. ]?[0-9]{4}',
            dl:'^[0-9]{7,8}$',
            ssn:'[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{4}',
            zip:'^(\d\w){5}(?:[-\s](\d|\w){4})?$',
        }        
        let cmsData = cms()
        // console.log(cmsData)
        let sucessCMS = cmsData.status === undefined ? true : false // change if bad check 
        let convertCMS:any = {}
        if(sucessCMS){
            
            console.log(cmsData)
            // convert cms api data to our format
            convertCMS = cmsData
            .objects
            .map((x,i)=>{
                return {
                    title:x.title,
                    metafields:x.metafields
                    .map((x,i)=>{

                        let options =
                        x.options
                        .map((y,j)=>{
                            return Object.values(x.options[j])
                        })
                        options = Object.fromEntries(options)
                        return {
                            key  : x.key,
                            type : options.type,
                            value: options.value,
                            group: options.group,
                            count: options.count
                        }
                    }),
                    gen: (function(){
                        return function *generator() {
                            var index = 0;
                            while (true)
                            yield index++;
                        }()
                    })()                    
                }   

            })   
            //

            //console.log(JSON.stringify(convertCMS,null,4)) // when the app is online  and you change the cms data
                      
        
        }
        else{
            
            convertCMS = website.default
            convertCMS
            .map((x,i)=>{
                x.gen =(function(){
                    return function *generator() {
                        var index = 0;
                        while (true)
                        yield index++;
                    }()
                })()                    
                return x
            })
        }
        // sucessCMS = false
        //        
        console.log(convertCMS)
        
        // making our website react to data given by the CMS
            // we use the cms data to direct how many components come onto the DOM and what they are doing
            // we make rUD templates to minic the elements or element group we want to work with 
            // we look at metafields which contains an array of all the data we need to represent on the DOM 
            // we can use the generator as well as looping to get done as needed
            // we use zChildTemplate so we dont have to remember how to setup each element
                //FIXME we dont need the developer to type in default vals, store in a cookie or figure it out how to get data when user is offline
            convertCMS
            .forEach((x,i)=>{
                let co = 'formCO'+i
                console.log(co,x)    

                rUD({
                    co,
                    ryber:this,
                    signature:x.title,
                    css:{
                        height:"300px",
                        width:"100%",
                        top:"0px",
                        "background-color": i % 2 === 0 ? "rgb(153, 253, 225)" : "rgb(153, 223, 255)",
                    }
                })               
            })
        //          


        console.log(this)
        

        function zChildTemplate(devObj:{ // objects for rUD calls custom to the dev and the website
            co? :string,
            mf?:{
                key:string
                type:string,
                value:any,
                group?:any // options for type options
                count?:any //
            },
            options?:any
        }):any{

            let {co,options} = devObj
            if(options === undefined){
                options = {}
            }
            
            let {key,type,value,group,count} =devObj.mf 
            if(type === "title"){
                let css = {
                    width:'688px',
                    "font-size":"54px",
                    top:"1213px",
                    height:'62px',
                    left:'388px',
                } 
                
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '54px') : null 
                })()

                rUD({
                    co,
                    bool:'h1',
                    text: value,
                    css         
                })                
            }

            else if(type === "input"){
                let extend = {
                            type:'text',
                            placeholder:value,
                            form:'myForm',
                            
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }

            else if(type === "email"){
                let extend = {
                            type:'email',
                            placeholder:value,
                            form:'myForm',
                            
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }            

            else if(type === "phone"){
                let extend = {
                            type:'tel',
                            placeholder:value,
                            form:'myForm',
                            pattern:regex.phone
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }  
            
            else if(type === "zipcode"){
                let extend = {
                            type:Modernizr.inputtypes.number ? 'number' : 'text',
                            placeholder:value,
                            form:'myForm',
                            pattern:regex.zip
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }
            
            else if(type === "drivers license"){
                let extend = {
                            type:'text',
                            placeholder:value,
                            form:'myForm',
                            pattern:regex.dl
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }
            
            else if(type === "social security"){
                let extend = {
                            type:'text',
                            placeholder:value,
                            form:'myForm',
                            pattern:regex.ssn
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:options.appDateClick                
                    }          
                })                     
            }            

            else if(type === "date"){
                let extend = {
                            type:'text',
                            placeholder:value,
                            form:'myForm',
                            
                        }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1085px',
                    "font-size":"32px",
                    top:"0px",
                    height:"41px",
                    left:'90px'
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'i',
                    val:key.split("_").reverse()[0] + ' f_o_r_m_Input',
                    css:(options.css === undefined ? 
                        {
                            width:'1085px',
                            "font-size":"32px",
                            top:"0px",
                            height:"41px",
                            left:'90px'
                        }:options.css
                    ),
                    extras:{
                        extend,
                        deltaIndex:1,
                        appFocusFont:{
                            confirm:'true',
                            fontSizeDefault:"32px"
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:this[co.valueOf()].quantity[1][1].signature + " "+ value,
                        },
                        appDateClick:{
                            confirm:"true"
                        }            
                    }          
                })                     
            }            

            else if(type === "text"){

                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    width:'1173px',
                    "font-size":"30px",
                    top:"648px",
                    height:"104px",
                    left:'90px',
                } 
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()

                rUD({
                    co,
                    bool:'p',
                    val:key.split("_").reverse()[0] + '  f_o_r_m_Text',
                    text:value,
                    css         
                })                        
            }  
            
            else if(type === "options"){

                if(count !== undefined && this[co.valueOf()].metadata.toggleButton.options[group.valueOf()] === undefined ){
                    this[co.valueOf()].metadata.toggleButton.options[group.valueOf()] = {
                        selectedElement:[],
                        count,
                        stuff:[]                        
                    }
                }
                options.required === 'false' ? null:(options.required = 'true') 
                let css = {
                    "width": "341px",
                    "top": "1590px",
                    "height": "54px",
                    "left": "50px",
                    "font-size":"21px",
                }
                options.css === undefined ? undefined :(()=>{
                    css = options.css; 
                    css['font-size'] === undefined ?  (  css['font-size'] = '30px') : null 
                })()
                console.log(group)
                rUD({
                    co,
                    bool:'a',
                    val:key.split("_").reverse()[0] + '  f_o_r_m_Selection',
                    text:value,
                    css,
                    extras:{
                        toggleButton:{
                            confirm:'true',
                            onBackgroundColor:'black',
                            onColor: 'white',
                            offBackgroundColor:'transparent',
                            offColor:'black',
                            selected: this[co.valueOf()].metadata.toggleButton.options[group.valueOf()] === undefined  ? 'false' : ()=>{return this[co.valueOf()].metadata.toggleButton.options[group.valueOf()]},
                        },
                        appInputHandle:{
                            confirm:'true',
                            zChild:new Subject<any>(),
                            co:new Subject<any>(),
                            name:group,
                            value,
                        }          
                    }         

                })                        
            }              
        }

        let zCT = ((a)=>{
            return (zConsist)=>{
                zChildTemplate.call(a,zConsist)
            }
        })(this)  
        //
        
        
        
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

            // check if were greater than v9
            if(
                parseInt(document.querySelector("body > app-root").attributes["ng-version"].value.split(".")[0]) >= 9
            ){
                a(event)
            }
            else{
                a()
            }
            //

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

        //dev additions

        //
    /* */
    
    
    /*form*/

        // formComponent data

        //

        // formComponent events
        formCO:  Array<any>  = Array.from(Array(1),(x,i)=> {return 'formCO'+ i })      
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
    
    

    
    
}

