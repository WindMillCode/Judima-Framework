import {objectCopy,zProtoComponent,zProtoChildren, zChildren} from '../customExports'



let website:any = {}

let login_development:Array<zProtoComponent> = [

	{
		"title": "login_page",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				stack:0,
				// height:900,
				nest:{
					group:[
						{
							name:"login-card",
							type:"regular"
						}
					]
				},
				delta:{
					group:[
						{
							name:"login_card",
							type:"repeat",
							by:3
						}
					]
				},
				navigation:{

					name:"login"
				},

				options:{
					css:{
						// width:"125%"
					},
					judima:{
						mobile:{
							stack:20,
							footerSpace:50
						},
						desktop:{
							footerSpace:240
						}
					},
					extras:{

						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
						appRoommate:{
							confirm:"true",
							type:"body",
						},
						appSection:{
							confirm:"true"
						}
					}
				},

			},
			{
				"key":"facebook_title",
				type:"image",
				imageURL:"login_facebook_title.svg",
				width:200,
				height:70,
				left:30,
				top:70,
				options:{
					css:{
						"z-index":2
					}
				},

				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				}
			},
			{
				"key":"recent_logins",
				type:"text",
				value:"Recent Logins",
				next:"true",
				options:{
					css:{
						"font-family":"SFProDisplay-Regular"
					}
				},
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				},
				width:200,
			},
			{
				"key":"choose_Acct",
				type:"text",
				value:"Click your picture or add an account.",
				next:"true",
				options:{
					css:{
						"font-family":"SFProDisplay-Regular",
						"font-size":"15px"
					}
				},
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				},
				width:300,

				// height:70,
			},
			{
				key:"email-phone-number",
				type:"input",
				left:750,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"facebook_login_credentials"
					},
					zChildren:[
						{
							bool:"div",
							val:"login-display a_p_p_Container",
							group:["facebook_login_credentials"],
							css:{
								"z-index":3
							},
							logic:{
								desktop:{
									width:1.1,
									height:1.25,
									top:-40,
									left:-20,
								},
								mobile:{
									width:(devObj)=>{
										let {zSymbol,css,delta,zChildren} = devObj

										return delta.current.max.value
									},
									height:1.1,
									top:-10,
									left:-10,
								}
							}
						}
					]
				},
				value:"Email or Phone Number",
				options:{
					css:{
						"font-size":"17px"
					}
				}

			},
			{
				key:"password",
				type:"input",
				left:750,
				top:10,
				value:"Password",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"17px"
					}
				}

			},
			{
				key:"Login-button",
				type:"button",
				left:750,
				top:10,
				width:340,
				value:"Log In",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"20px"
					}
				}

			},
			{
				key:"forgot-password",
				type:"anchor",
				left:750,
				top:10,
				width:340,
				value:"Forgot Password?",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"14px",
						"text-align":"center",
						color:"blue"
					}
				}

			},
			{
				key:"strikethrough",
				type:"div",
				left:750,
				top:30,
				width:340,
				height:1,
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"14px",
						"text-align":"center",
						"background-color":"grey",
						"z-index":"4"
					}
				}

			},
			{
				key:"create-new-account a_p_p_Create_New_Account",
				type:"button",
				left:800,
				top:30,
				width:240,
				next:"true",
				value:"Create New Account",

				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"20px"
					}
				}

			},
			{
				key:"business-page",
				type:"text",
				left:870,
				top:50,
				width:240,
				next:"true",
				value:"for a celebrity, band or business.",
				options:{
					css:{
						"font-size":"14px",

					},
					judima:{
						mobile:{
							left:140,
							top:50,
							widthRatio:.5,
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"fb_create_business_page"
					},
					zChildren:[
						{
							bool:"a",
							css:{
								"font-weight":"bold",
								"font-size":"14px",
								"z-index":4
							},
							val:"business-page-link a_p_p_Anchor",
							text:"Create a Page",
							group:["fb_create_business_page"],
							logic:{
								desktop:{
									width:1.2,
									height:1.2,
									top:0,
									left:-100
								},
								mobile:{
									width:1.2,
									height:1.2,
									top:0,
									left:-100
								}
							},
						}
					],

				}

			},
			{
				"key":"login-card a_p_p_Login_Card",
				type:"div",
				next:"true",
				height:205,
				width:160,
				top:-320,
				options:{
					css:{
						"z-index":2
					},
					judima:{
						mobile:{
							width:260
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"facebook_login_card"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"rgb(240, 242, 245)"
							},
							val:"login-overlay",
							logic:{
								desktop:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.5,
									top:(devObj)=>{
										let {} = devObj
										return 0
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								},
								mobile:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.05,
									top:(devObj)=>{
										let {} = devObj
										return 0
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								}
							},
							type:["deltaNodeContainer"],
							group:["facebook_login_group","facebook_login_card","facebook_login_credentials","fb_create_business_page"]
						},
						{
							bool:"img",
							val:"login-remove",
							css:{
								"z-index":3
							},
							extras:{
								extend:{
									src:"./assets/media/x-mark.png",
								},
							},
							logic:{
								desktop:{
									width:()=>{
										return 16
									},
									height:()=>{
										return 20
									},
									top:10,
									left:10
								},
								mobile:{
									width:()=>{
										return 16
									},
									height:()=>{
										return 20
									},
									top:3,
									left:3
								}
							},
							group:["facebook_login_card"]
						},
						{
							bool:"div",
							val:"notifications-count a_p_p_Login_Card_Notifications_Count",
							css:{
								"z-index":4
							},
							logic:{
								desktop:{
									width:()=>{
										return 30
									},
									height:()=>{
										return 30
									},
									top:-10,
									left:140
								},
								mobile:{
									width:()=>{
										return 30
									},
									height:()=>{
										return 30
									},
									top:-10,
									left:240
								},
							},
							group:["facebook_login_card"]
						},
						{
							bool:"img",
							val:"account-image a_p_p_Login_Image",
							css:{
								"z-index":2
							},
							extras:{
								extend:{
									src:"./assets/media/python.jpg"
								}
							},
							logic:{
								desktop:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return (1* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .75 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.left +60
										}
										return css.left

									}
								},
								mobile:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return (.5* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .75 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.left +120
										}
										return css.left +70

									}
								}
							},
							group:["facebook_login_card"]
						},
						{
							bool:"p",
							val:"account-name a_p_p_Login_Name",
							css:{
								"z-index":3
							},
							text:"Python3",
							logic:{
								desktop:{
									width:1,
									height:.25,
									top:155,
									left:0
								},
								mobile:{
									width:1,
									height:.25,
									top:155,
									left:0
								}
							},
							group:["facebook_login_card"]
						},

					]
				},
				delta:{
					group:"login_card",
					options:{

						next:function (devObj){
							let {index}= devObj
							return (index+1) % 3 === 0 ? "true":"false"
						} ,// means deltaNode will try to place the object next to
						cssLeft:function(devObj){
							let {index,css}= devObj;
							if( (index+1) % 3 === 1  ){
									return (
									numberParse(css.left) + numberParse(css.width) + 40
									).toString() + "px"
							}

							else if( (index+1) % 3 === 2  ){
								return (
								numberParse(css.left) + ((numberParse(css.width) + 40)* 2)
								).toString() + "px"
							}
							else{
								return css.left
							}
						},
						modify:(devObj)=>{
							let {zChild,x,index,hook,co} = devObj
							// let yourFNs = []  // say if you wanna modify height, top image ...
							if(hook === "latchDirective"){
								let {targets} = zChild[x].extras.appLatch.display
								let myImg = targets[2]
								let myName = targets[3]
								let myMesg  = targets[1]
								switch (index) {
									case undefined:
										myImg = targets[3]
										myName = targets[4]
										myMesg  = targets[2]
										zChild[myMesg].innerText.item = "5"
										break;
									case 0:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/angular.png"
										zChild[myName].innerText.item = "Angular"
										zChild[myMesg].innerText.item = "3"
										break;

									case 1:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/ruby_programming.png"
										zChild[myName].innerText.item = "Ruby"
										zChild[myMesg].innerText.item = "2"
										break;
									case 2:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/plus.png"
										zChild[myName].innerText.item = "Add Account"
										zChild[myName].css.color = "blue";
										let addingDelta = 350

										zChild[x].extras.component.top = addingDelta + zChild[x].extras.component.top
										if(co.metadata.section.mediaQuery === "desktop"){
											zChild[x].css.top = (numberParse(zChild[x].css.top)+ addingDelta).toString() + "px"
										}
										break;


									// default:
									// 	addingDelta = 350
									// 	zChild[x].extras.component.top = addingDelta + zChild[x].extras.component.top
									// 	zChild[x].css.top = (numberParse(zChild[x].css.top)+ addingDelta).toString() + "px"

									// 	break;
								}

							}

						}
					}
				}
			},


		].map((x:any,i)=>{
			x.key += " login-page"
			return x
		})
	},
	{
		"title":"site-map",
		"type_slug":"forms",
		"metafields":[
			{
				key:"Body",
				type:"body",
				split:20,
				gap:20,
				navigation:{
					name:"login"
				},
				options:{
					judima:{
						moving:{
							point:"bottom",
							target:'login_page',
							coordinates:{x:0,y:0},
							type:"custom"
						},
						mobile:{
							stack:20
							// top:200,
						}
					},
				}
			},
			{
				key:"language-current",
				type:"text",
				value:"English (EN)",
				split:2,
				options:{
					css:{
						"font-size":"16px"
					}
				}
			},
			...[
			{
				key:"ES",
				type:"anchor",
				value:"Español"
			},
			{
				key:"FR",
				type:"anchor",
				value:"Français (France)"
			},
			{
				key:"ASIAN",
				type:"anchor",
				value:"中文(简体)"
			},
			{
				key:"Hebrew",
				type:"anchor",
				value:"العربية"
			},
			{
				key:"BR",
				type:"anchor",
				value:"Português (Brasil)"
			},
			{
				key:"BR",
				type:"anchor",
				value:"한국어"
			},
			{
				key:"IT",
				type:"anchor",
				value:"Italiano"
			},
			{
				key:"GR",
				type:"anchor",
				value:"Deutsch"
			},
			{
				key:"GR",//Hind
				type:"anchor",
				value:"हिन्दी"
			},
			{
				key:"JP",
				type:"anchor",
				value:"日本語"
			}

			].map((x:any,i)=>{
				x.key += " a_p_p_SiteMap_Anchor"
				return x
			}),
			{
				key:"strikethrough",
				type:"div",
				top:30,
				split:20,
				height:1,
				next:"true",
				options:{
					css:{
						"background-color":"grey",
						"z-index":"4"
					}
				}

			},
			...[
				{
					key:"sign-up",
					type:"anchor",
					value:"Sign Up"
				},
				{
					key:"login",
					type:"anchor",
					value:"Log In"
				},
				{
					key:"fb-mesg",
					type:"anchor",
					value:"Messenger"
				},
				{
					key:"watch",
					type:"anchor",
					value:"Watch"
				},
				{
					key:"ppl",
					type:"anchor",
					value:"People"
				},
				{
					key:"pages",
					type:"anchor",
					value:"Pages"
				},
				{
					key:"page-categories",
					type:"anchor",
					value:"Page Categories"
				},
				{
					key:"games",
					type:"anchor",
					value:"Games"
				},
				{
					key:"marketplace",
					type:"anchor",
					value:"Marketplace"
				},
				{
					key:"groups",
					type:"anchor",
					value:"Groups"
				},
				{
					key:"Privacy",
					type:"anchor",
					value:"Privacy"
				}
			].map((x:any,i)=>{
				x.key += " a_p_p_SiteMap_Anchor"
				return x
			})
		]
	}
]

// attribute map
// "x-mark.png":Darius Dan x-icons


let facebook_development = [
	...login_development,
]





website.convertCMS = facebook_development




export default website
