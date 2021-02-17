import { Injectable, VERSION,Renderer2,RendererFactory2 } from "@angular/core";
import { Observable, of, Subject, Subscription, BehaviorSubject, ReplaySubject } from "rxjs";
import {  componentObject, ryberUpdateFactory, objectCopy } from "./customExports";
import website from './website';




@Injectable({
    providedIn: "root"
})
export class RyberService {

    private renderer2:Renderer2
	public ref:any
    constructor(
        private renderer2Factory: RendererFactory2,
		// public ref:any
    ) {

        //start renderer2
        this.renderer2 = renderer2Factory.createRenderer(null, null);
        //
        // console.log("ryberservice constructor fires")

        let rUD = ryberUpdateFactory({ryber:this})

        let zCTgen = function* generator() {
            var index = 0;
            while (true)
                yield index++;
        }()

        function zChildTemplate(devObj: { // objects for rUD calls custom to the dev and the website
            co?: string,
            mf?: any,
            options?: any
        }): any {

            let { co } = devObj


            let { mf } = devObj
            let { gsapCursor,webVitals,columnDefs,rowData,webRTC,imageURL,latch,options,nest,printGroupType, printGroup, key, type, gap, stack, value, group, count, newline, form,delta, refreshGroup, background, color, fonts, title, fontSize, italics, googleSheets, border } = mf
            let { left, top, height, width, split, next } = devObj.mf
			let component = { left, top, height, width, split, next }




			// console.log(deltaGroup,deltaType,deltaNode)
			// support for custom attribute,property and css additons
            if (options === undefined) {
                options = {
					css:{},
					extend:{},
					judima:{}
				}
			}

			else{
				if(options.extend === undefined){
					options.extend = {}
				}
				if(options.css === undefined){
					options.css = {}
				}
				if(options.judima === undefined){
					options.judima = {}
				}
			}
			//

			// feature init
			let extend:any = {}
			let judima:any ={
				topLevelZChild:(()=>{

					// if the zChild is nested
					if([nest?.group ,nest?.under].includes(undefined)){
						return "true"
					}
					//
					return "false"
				})(),
				// figure out whether the zChild should be incoporated into judima formatting logic
				formatIgnore:(()=>{

					// if the zChild is nested
					if(![nest?.group ,nest?.under].includes(undefined)){
						return "true"
					}
					//
					return "false"
				})(),
				//
				stack:{
					// when false when an element below overlaps an element above stack will do  nothing to fix it
						// when options.overlapFix === "true"
					overlapFix:"true"
					//
				}
			}
			let appNest = {
				confirm:nest?.group === undefined ? "false": "true",
				co,
				...nest,
			}
			let appDeltaNode ={
				confirm:delta?.group === undefined ? "false": "true",
				co,
				zSymbolNeeded:"true",
				...delta
			}
            let appGsapCursor = {
                confirm:gsapCursor?.group === undefined ? "false": "true",
                ...gsapCursor,
                co
            }
			let appLatch = {
				confirm: 'true',
				zSymbolNeeded: "true",// zChildSymbol goes here
				co,
				...latch,
			}
			//



            let symbol: any = ""

            if (type === "new" || type === "body") {
                let sectionDefault: any = objectCopy(this.appCO0.metadata.ryber.sectionDefault)
                let section: any = {
                    gap: gap === undefined ? sectionDefault.gap : gap,               // if the gap is wildily bigger it wont stack appropraitely, make sure we gap approaitely
                    left: left === undefined ? sectionDefault.left : left,
                    width: width === undefined ? sectionDefault.width : width,
                    split: split === undefined ? sectionDefault.split : split,
                    stack: stack === undefined ? sectionDefault.stack : stack
				}
				let css ={
					height: "300px", //must always exit
					//expected to be a percent configureble for position in FPM logic
					width: "100%",
					top: "0px",
					//
					"background-color": background,
					...options.css
				}
				let judima = {
					...options.judima
				}
                symbol = rUD({
                    co,
                    val:key.split("_").reverse()[0] + ' a_p_p_Board',
                    // ryber:this,
                    signature: title,
                    css,
                    extras: {
						judima,
                        section,
                        type,
                        component,
                        appWebVitals:{
                            confirm:webVitals?.confirm,
                            co,
						},
						appDeltaNode:{
							...appDeltaNode,
							type:"body",
						},
                        appNest:{
							type:"body",
							...appNest,
							confirm:"true"
						},
                    }
                })
            }

            else if (type === "title" || type === "heading") {

                let css = {
                    "z-index": 4,
                    display: "table",
                    "font-size": fontSize !== undefined ? fontSize + "px" : "54px",
                    "font-weight": italics,
                    'background-color': background,
                    color,
					"font-family": fonts,
					...options.css
				}
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}


                symbol = rUD({
                    co,
                    bool: 'h1',
                    text: value,
                    val: key.split("_").reverse()[0] + ' a_p_p_Heading',
                    css,
                    extras: {
                        component,
						type,
						extend,
						judima,
						appDeltaNode,
                        appNest,
					},
                })

            }


            else if (type === "text") {


                let css = {
                    "font-size": fontSize !== undefined ? fontSize + "px" : "30px",
                    "z-index": 4,
                    'background-color': background,
                    color,
                    "font-weight": italics,
                    "font-family": fonts,
					"text-align": devObj.mf["text-align"],
					...options.css
				}
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}

                symbol = rUD({
                    co,
                    bool: 'p',
                    val: key.split("_").reverse()[0] + '  a_p_p_Text',
                    text: value,
                    css,
                    extras: {
                        component,
						type,
						judima,
						extend,

						appDeltaNode,

						appNest
                    }
                })
            }

            else if (type === "div") { // for now a better use of divs?


                let css = {
                    'background-color':background,
                    color,
					overflow:"auto",  //has side effects turn to none if necessary
					...options.css
                }

				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}


                symbol = rUD({
                    co,
                    bool: 'div',
                    val: key.split("_").reverse()[0]+ ' a_p_p_Nester',
                    css,
                    extras: {
						judima,
                        component,
                        type,
						extend,
						appDeltaNode,
                        appNest,

                    }
                })
            }

            else if (type === "button") {

                let css = {
                    width: '325px',
                    "font-size": "48px",
                    top: "0px",
                    // height: "75px",
                    left: '400px',
                    "z-index": 4,
                    'background-color': background,
                    color,
                    "font-family": fonts,
					"font-weight": italics,
					...options.css
				}
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}



                symbol = rUD({
                    co,
                    bool: 'b',
                    text: value,
                    val: key.split("_").reverse()[0] + ' a_p_p_Button',
                    css,
                    extras: {
						extend,
						judima,
                        component,
						type,
						appDeltaNode,
                        appNest,
                    }
                })



            }

            else if (type === "submit button") {

                let css = {
                    width: '325px',
                    "font-size": "48px",
                    top: "0px",
                    // height:"75px",
                    // left:'400px',
                    "z-index": 4,
                    'background-color': background,
                    color,
                    "font-family": fonts,
					"font-weight": italics,
					...options.css
				}
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}

                symbol = rUD({
                    co,
                    bool: 'b',
                    text: value,
                    val: key.split("_").reverse()[0] + ' a_p_p_Button',
                    css,
                    extras: {
						extend,
						judima,
						appDeltaNode,
                        appNest,
                        appFormControl: {
                            confirm: 'true',
                            id: 'myForm',
                            co
                        },
                        component,
                        type
                    }
                })
            }


            else if (type === "dropdown") {



				form?.required === undefined ? null : ((a) => { a.required = form?.required })(extend)
				//  might have to deal with this logic on bootstrap end developer should feel free to make required as their own arg as well as form
                let css = {
                    "font-size": "24px",
                    "z-index": 5,
                    display: "table",
                    "text-align": "center",
                    'background-color': background,
                    color,
                    "font-family": fonts,
					"font-weight": italics,
					...options.css
				}
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}
				appLatch = {
					...appLatch,
					select:{
						value
					},
					type:"dropdown"
				},
				appNest = {
					...appNest,
					options:{
						positionStatic :appLatch.type === "dropdown" ? "false" :"true",
						ignore:"true"
					},
				}
				if(![appDeltaNode?.group,appNest?.group].includes( undefined )  ){
					appLatch.suffix = 0
					appLatch.trueNestUnder = appNest.under
					appDeltaNode.options = {
						target:{
							confirm:"true"
						}
					}
				}

                symbol = rUD({
                    co,
                    bool: 'a',
                    val: key.split("_").reverse()[0] + ' a_p_p_DropDownMiddle',
                    css,
                    text: value,
                    extras: {
						judima,
                        extend,
                        appLatch,
						appDeltaNode,
                        appNest,
                        component,
                        type,
                        // appInputHandle: {
                        //     googleSheets,
                        //     confirm: 'true',
                        //     type,
                        //     zSymbolNeeded:"true",
                        //     co,
                        //     name: this[co.valueOf()].quantity[1][1].signature + " " + zCTgen.next().value,
                        //     link: form?.link,
                        //     required: form?.required !== undefined ? "dropdown" : "false",
                        // }
                    },

                })


            }


            else {

                let css = {
                    "font-size": "30px",
                    "z-index": 4,
                    'background-color': background,
                    color,
                    "font-weight": italics,
                    "font-family": fonts,
					"text-align": devObj.mf["text-align"],
					...options.css
                }
				extend = {
					...extend,
					//your props here
					...options.extend
				}
				judima = {
					...judima,
					//your props here
					...options.judima
				}

                symbol = rUD({
                    co,
                    bool: 'p',
                    val: key.split("_").reverse()[0] + '  a_p_p_Text',
                    text: value,
                    css,
                    extras: {
						extend,
						judima,
                        component,
						type: "text",
						appDeltaNode,
						appNest
                    }
                })
            }

            return symbol
        }

        let zCT = ((a) => {
            return (zConsist) => {
                return zChildTemplate.call(a, zConsist)
            }
        })(this)

        // cms setup
        let cmsData



        let convertCMS: any = {}
        let myCMS: any


            //use backup cache to setup the website
            convertCMS = objectCopy(website.convertCMS)
            delete website.convertCMS
            Object.assign(this.appCO0.metadata, website)
            //



        // content setup
        let track = {}
        myCMS = Object
        .fromEntries(
            convertCMS
            .map((x, i) => {

                // tracking different components
                let mySlug = x.type_slug.split("s")[0]
                if (track[mySlug + 'CO'.valueOf()] === undefined) {
                    //co setup
                    track[mySlug + 'CO'.valueOf()] = 0
                    this[mySlug + 'CO'.valueOf()] = []
                    this[mySlug + 'CO$'.valueOf()] = new ReplaySubject<any>(1)
                    this.appCO0.metadata.CO.push(mySlug + 'CO$'.valueOf())
                    //

                    //es setup
                    this[mySlug + 'ES'.valueOf()] = objectCopy(this.appES)
                    this.appCO0.metadata.ES.push(mySlug + 'ES'.valueOf())
                    //

                }
                else {
                    track[mySlug + 'CO'.valueOf()] += 1
                }
                let co = mySlug + 'CO' + track[x.type_slug.split("s")[0] + 'CO'.valueOf()] // if a slug starts with s ????? FIXME
                this[mySlug + 'CO'.valueOf()].push(co)
                this[mySlug + 'CO$'.valueOf()].next(this[mySlug + 'CO'.valueOf()])
                //
                let x$ = of(x)


                let coOrderArray = []
                this.appCO0.metadata.ryber.CO$.push(

                    x$
                    .subscribe((item) => {
                        let coArray: any = this[mySlug + 'CO'.valueOf()]

                        x.metafields
                        .forEach((y, j) => {


                            // they forgot to create a new component fail gracefully and given them a board
                            if (j === 0) {
                                if (y.type !== "body") {
                                    coOrderArray.push(
                                        zCT({
                                            co: coArray[coArray.length - 1],
                                            mf: {
                                                key: "a_p_p_Board",
                                                type: "body",
                                                background: ["lightgrey", "white"][i % 2],
                                                title: x.title
                                            }

                                        })
                                    )
                                }
                                // debugger
                            }
                            //

                            coOrderArray.push(
                                zCT({
                                    co: coArray[coArray.length - 1],
                                    mf: j === 0 ? { ...y, title: x.title } : y
                                })
                            )
                        })
                        this[co.valueOf()].metadata.order = coOrderArray.splice(1)
                        coOrderArray = []
                    })
                )

                return [co, x]
            })
        )
        //




    };

    ngOnDestroy() {
        this.appCO0.metadata.ryber.CO$
            .forEach((x, i) => {
                x.unsubscribe?.()
            })
    }

    a: BehaviorSubject<any> = new BehaviorSubject<any>({ boardTop: '52px', boardHeight: '56px' })

    /* app*/
    appCurrentNav: string = "/home"
    appReloaded: string = "true"
    appES = {
        router: {
        },
        resize: {
        },
        click: {
        },
        load: {
        },
        input: {
        },
		zChildUpdate:{}
    }
    appSubscriptionArray: Subscription[] = []
    appViewComplete: Subject<any> = new Subject<any>()
    appViewCompleteArray: Array<any> = []
    appEventListener: Function = (a, event = null) => {
        if (typeof a === "function") {

            // check if were greater    than v9
            if (
                parseInt(VERSION.major) >= 9
            ) {
                a(event)
            }
            else {
                a()
            }
            //

        }
    }
    // so you dont get bogged by forced to fill out empty arrays
    appAvailble: Function = (item, prop) => {
        try {
            return item[prop.valueOf()]
        }
        catch (e) {
        }
    }
    //
    appEvents: Function = (devObj: {
        typesES: string,
        event: string, //property of ES
        of: Observable<any>
    }) => {
        let item = this[devObj.typesES.valueOf()][devObj.event.valueOf()].generator.next().value
        this[devObj.typesES.valueOf()]
        [devObj.event.valueOf()]
        [item] =
            devObj.of
        return item
    }
    appAddScripts:Function = (devObj) =>{
        let {scripts} = devObj
        return scripts
        .map((x, i) => {
            let s = this.renderer2.createElement('script') as HTMLScriptElement;
            this.renderer2.setAttribute(s,"type",x.type || 'text/javascript' )
            x.src ? this.renderer2.setAttribute(s,"src",x.src) : null
            x.innerText ? this.renderer2.setProperty(s,"innerText",x.innerText) : null
            x.innerText ? this.renderer2.setProperty(s,"innerHTML",x.innerText) : null
			x.async  ? this.renderer2.setAttribute(s,"async",x.async) : null
			x.defer  ? this.renderer2.setAttribute(s,"async",x.defer) : null
			x.integrity  ? this.renderer2.setAttribute(s,"integrity",x.integrity) : null
            if(x.placement){
                if(x.placement?.appendChild){
                    this.renderer2.appendChild(x.placement.appendChild, s)
                }
                else if(x.placement?.insertBefore){

                    this.renderer2.insertBefore(x.placement.insertBefore.parent, s,x.placement.insertBefore.sibling)
                }
            }
            else{
                this.renderer2.appendChild(window.document.head, s);
            }
            return {element:s,name:x.name}
        });
    }
    appTestKeyword = "root"
    appTV = ""
    // appCO  extra metadata object
    appCO0: Partial<componentObject> = {
        metadata: {
            component:{
                responsiveHeightExclude:["mat-spinner","ta","c","div","ag-grid","i","b","video","gsap-cursor","img"]
                // should be if the item is nested
            },
            ES: [], //eventSubscriptions
            CO: [],
            ryber: {
                CO$: [],
                sectionDefault: {
                    gap: 90, // if the gap is wildily bigger it wont stack appropraitely, make sure we gap approaitely
                    left: 50,
                    width: 1175,
                    split: 9,
                    stack: 20
                }
            },


            scripts:[]
        },
        quantity: []
    }
    //


    /* */








}

