let website:any = {}

website.convertCMS = [

    {
        "title": "development",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
				// "height":"1000",
				delta:{
					"group":[
						{
							name:"outerDelta",
							type:"add_remove_button"
						},
						{
							name:"secondOuterDelta",
							type:"add_remove_button"
						},
						{
							name:"innerDelta",
							type:"add_remove_button"
						}
					],
				},
                "background": "rgb(155, 9, 104)",
				"googleSheets": {},
				options:{
					css:{
						"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
					}
                }
			},
            {
                "key": "my-cursor",
				// "type": "gsap-cursor",
				type:"text",
                // "value":"Items",
				// "split": "3",
				"height":"1",
				"width":"1",
				options:{
					css:{
						height:"200px"
					}
				},
                "googleSheets": {},
			},
            {
                "key": "my-input-counter",
                "type": "count",
				"value":"3.",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
				"value":"",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(221,101,7)"
					}
				},
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(121,101,117)"
					}
				},
				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},

            {
                "key": "add",
                "type": "button",
                "value":"Add ",
				delta:{
					"group":"outerDelta",
					"type":"add",
					"by":"1"
				},
                "next":"true",
                "split": "3",
                "googleSheets": {},
            },
            {
                "key": "remove",
                "type": "button",
                "value":"Remove",
				delta:{
					"group":"outerDelta",
					"type":"remove",
					"by":"1"
				},
                // "nestGroup":"view",
                // "nestUnder":"A1",
                // "nest":"B4",
                "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
			},
            {
                "key": "more-text",
                "type": "text",
                "value":"More Items",
                "split": "3",
                // "width":"300",
				"height":"250",
				"fontSize":72,
                "googleSheets": {},
			},

            {
                "key": "my-input-counter",
                "type": "count",
                "value":"3.",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"20px dashed rgb(54,104,254)"
					}
				},
				"next":"true",
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"20px dashed rgb(176,167,79)"
					}
				},

				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},



            {
                "key": "localVideo",
                "value": "",
                "type": "video",
				"split": "5",
				"next":"true",
                // "width":"420",
                "height":500,
                "googleSheets": {},
                webRTC:{
                    item:"localVideo"
                }
            },
            {
                "key": "remoteVideo",
                "value": "",
                "type": "video",
                "nestGroup":"webRTC",
                "nestUnder":"A1",
                "nest":"B1",
                "options":{
                    "css":{
                        width:"inherit",
                        height:"300px"
                        // filter: "blur(20px) invert(1) opacity(0.5)"
                        // filter:"hue-rotate(180deg) saturate(200%);"
                    }
                },
                "split": "4",
                // "width":"420",
                // "height":500,
                "googleSheets": {},
                webRTC:{
                    item:"remoteVideo"
                }
            },
            {
                "key": "remoteVideoContainer",
                "value": "",
                "type": "div",
                "nestGroup":"webRTC",
                "nest":"A1",
                "options":{
                    "css":{
                        background:"purple",
                        overflow:"hidden"
                    }
                },
                "split": "4",
                "width":"420",
                "height":300,
                "googleSheets": {},
                webRTC:{
                    item:"remoteVideo"
                }
			},

			{
				"key": "my-input-counter",
				"type": "count",
				"value":"1.",
				delta:{
					"group":"secondOuterDelta"
				},
				"split": "1",
				"googleSheets": {},
				"options":{
					"css":{
					}
				}
			},
			{
				"key": "my-input",
				"type": "textbox",
				"value":"setup",
				delta:{
					"group":"secondOuterDelta"
				},
				"googleSheets": {},

			},
			{
				"key": "my-div",
				"type": "div",
				"value":"",
				delta:{
					"group":"secondOuterDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(221,101,7)"
					}
				},
				"next":"true",
				"left":"400",
				"split": "3",
				"height":"250",
				"googleSheets": {},

			},
			{
				"key": "my-div",
				"type": "div",
				"value":"",
				delta:{
					"group":"secondOuterDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(121,101,117)"
					}
				},
				"left":"800",
				"split": "2",
				"height":"150",
				"googleSheets": {},

			},

			{
				"key": "add",
				"type": "button",
				"value":"Add ",
				delta:{
					"group":"secondOuterDelta",
					"type":"add",
					"by":"1"
				},
				"next":"true",
				"split": "3",
				"googleSheets": {},

			},
			{
				"key": "remove",
				"type": "button",
				"value":"Remove",
				delta:{
					"group":"secondOuterDelta",
					"type":"remove",
					"by":"1"
				},
				"split": "3",
				"googleSheets": {},
			},


            {
                "key": "startButton",
                "value": "Start",
                "type": "button",

                "split": "3",
                "googleSheets": {},
                webRTC:{
                    item:"startButton"
                }
            },
            {
                "key": "callButton",
                "value": "Call",
                "type": "button",

                "split": "3",
                "googleSheets": {},
                webRTC:{
                    item:"callButton"
                }
            },
            {
                "key": "hangupButton",
                "value": "Hang Up",
                "type": "button",

                "split": "3",
                "googleSheets": {},
                webRTC:{
                    item:"hangupButton"
                }
            },
            {
                "key": "Choose-Schema",
                "type": "div",
                "value":"",
                "background":"yellow",
                "nestGroup":"schemas",
                "nest":"A1",
                "width":"1600",
                "height":"700",
                "googleSheets": {},
                "options":{
                    "css":{
                        display:"flex",
                        "flex-direction":"row",
                        "justify-content":"space-around",
                        "align-items":"flex-start",
                        "flex-wrap":"wrap"
                    }
                }
            },
            {
                "key": "add-me",
                "type": "sub-heading",
                "value":"Add me",
                // "split": "3",
                "nestGroup":"schemas",
                "nestUnder":"A1",
                "nest":"B1",
                "width":"1600",
                // "height":"250",
                "googleSheets": {},
                "text-align":"center",
                "options":{
                    "css":{
                        "justify-self":"center",

                        // "flex-grow":"10",
                        "width":"100%"
                        // "flex-basis":"500px"
                    }
                }
            },
            // {
            //     "key": "my-table",
            //     "type": "simpleTable",
            //     "value":"",
            //     "nestGroup":"schemas",
            //     "nestUnder":"A1",
            //     "nest":"B2",
            //     "background":"blue",
            //     // "split": "3",
            //     // "width":"300",
            //     // "height":"250",
            //     "googleSheets": {},
            //     "options":{
            //         "css":{
            //             // "justify-self":"flex-start",
            //             // "flex-grow":"1"
            //             "height":"300px",
            //             "width":"400px",
            //             "order":1
            //         }
            //     }
            // },
            {
                "key": "my-counter",
                "type": "count",
                "value":"1.",
                "nestGroup":"schemas",
				delta:{
					"group":"innerDelta",
				},
                "nestUnder":"C1",
                "nest":"D1",
                // "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
                "options":{
                    "css":{
                        // "justify-self":"flex-start",
                        // "flex-grow":"1"
                        order:-3,
                        "width":"10px"
                        // "background":"white",
                        // "height":"30px",
                        // "width":"400px",
                    }
                }
            },
            {
                "key": "my-input",
                "type": "input",
                "value":"",
                "nestGroup":"schemas",
                "nestUnder":"C1",
                "nest":"D1",
				delta:{
					"group":"innerDelta",
				},
                // "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
                "options":{
                    "css":{
                        // "justify-self":"flex-start",
                        // "flex-grow":"1"
                        order:-2,
                        "background":"white",
                        "height":"50px",
                        "width":"400px",
                    }
                }
            },
            {
                "key": "form-item-container",
                "type": "div",
                "value":"",
                // "background":"red",
                // "split": "3",
				delta:{
					"group":"innerDelta",
				},
                "nestGroup":"schemas",
                "nest":"C1",
                "nestUnder":"B3",
                // "width":"1200",
                "height":"350",
                "googleSheets": {},
                "options":{
                    "css":{
                        order:-2,
                        // "width":"75%",
                        "border":"1px solid red",
                        "width":"400px",
                        "height":"50px",
                        display:"flex",
                        "flex-direction":"row",
                        "overflow":"none"
                        // "justify-content":"space-between",
                        // "flex-wrap":"wrap"
                    }
                }
            },
            {
                "key": "inner-add",
                "type": "button",
                "value":"Add Another",
                "nestGroup":"schemas",
				delta:{
					"group":"innerDelta",
					type:"add",
					by:"1"
				},
                "nestUnder":"B3",
                "nest":"C2",
                "split": "3",
                // "left":"0",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
                "options":{
                    "css":{
                        // "justify-self":"flex-start",
                        // "flex-grow":"1"
                        // order:-1,

                        // "background":"white",
                        // "height":"30px",
                        // "width":"400px",
                    }
                }
            },
            {
                "key": "inner-remove",
                "type": "button",
                "value":"Remove Another",
				delta:{
					"group":"innerDelta",
					type:"remove",
					by:"1"
				},
                "nestGroup":"schemas",
                "nestUnder":"B3",
                "nest":"C3",
                // "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
                "options":{
                    "css":{
                        // "justify-self":"flex-start",
                        // "flex-grow":"1"
                        order:0,
                        // "background":"white",
                        // "height":"30px",
                        // "width":"400px",
                    }
                }
            },
            {
                "key": "input-container",
                "type": "div",
                "value":"",
                "background":"cyan",
                // "split": "3",
                "nestGroup":"schemas",
                "nest":"B3",
                "nestUnder":"A1",
                // "width":"1200",
                "height":"350",
                "googleSheets": {},
                "options":{
                    "css":{
                        order:2,
                        // "width":"75%",
                        "width":"800px",
                        "height":"300px",
                        display:"flex",
                        "flex-direction":"column",
                        "justify-content":"space-between",
                        // "flex-wrap":"wrap"
                    }
                }
            },

        ] .map((x:any,i)=>{
			x.key += "-nested-multiple"
			return x
		})
    },

    {
        "title": "before controls",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
				// "height":"1000",
				delta:{
					"group":[
						{
							name:"outerDelta",
							type:"add_remove_button"
						}
					],
				},
                // "background": "rgb(155, 9, 104)",
				"googleSheets": {},
				options:{
					css:{
						"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
						"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
					}
                }
			},
            // {
            //     "key": "my-cursor",
			// 	// "type": "gsap-cursor",
			// 	type:"text",
            //     // "value":"Items",
			// 	// "split": "3",
			// 	"height":"1",
			// 	"width":"1",
			// 	options:{
			// 		css:{
			// 			height:"200px"
			// 		}
			// 	},
            //     "googleSheets": {},
			// },
            {
                "key": "my-input-counter",
                "type": "count",
				"value":"3.",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
				"value":"",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(221,101,7)"
					}
				},
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(121,101,117)"
					}
				},
				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},

            {
                "key": "add",
                "type": "button",
                "value":"Add ",
				delta:{
					"group":"outerDelta",
					"type":"add",
					"by":"1"
				},
                "next":"true",
                "split": "3",
                "googleSheets": {},
            },
            {
                "key": "remove",
                "type": "button",
                "value":"Remove",
				delta:{
					"group":"outerDelta",
					"type":"remove",
					"by":"1"
				},
                // "nestGroup":"view",
                // "nestUnder":"A1",
                // "nest":"B4",
                "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
			},
            // {
            //     "key": "more-text",
            //     "type": "text",
            //     "value":"More Items",
            //     "split": "3",
            //     // "width":"300",
			// 	"height":"250",
			// 	"fontSize":72,
            //     "googleSheets": {},
			// },


        ] .map((x:any,i)=>{
			x.key += "-before-controls"
			return x
		})
	},
    {
        "title": "around controls",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
				// "height":"1000",
				delta:{
					"group":[
						{
							name:"outerDelta",
							type:"add_remove_button"
						}
					],
				},

				"googleSheets": {},
				options:{
					css:{
						"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
						"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
					}
                }
			},
            {
                "key": "my-input-counter",
                "type": "count",
				"value":"1.",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
				"value":"",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"20px dashed rgb(21,121,227)"
					}
				},
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"20px dashed rgb(221,161,217)"
					}
				},
				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},

            {
                "key": "add",
                "type": "button",
                "value":"Add ",
				delta:{
					"group":"outerDelta",
					"type":"add",
					"by":"1"
				},
				next:"true",
                "split": "3",
                "googleSheets": {},
            },
            {
                "key": "remove",
                "type": "button",
                "value":"Remove",
				delta:{
					"group":"outerDelta",
					"type":"remove",
					"by":"1"
				},
                // "nestGroup":"view",
                // "nestUnder":"A1",
                // "nest":"B4",
                "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
			},

            {
                "key": "my-input-counter",
                "type": "count",
				"value":"3.",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
				"value":"",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(221,101,7)"
					}
				},
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(121,101,117)"
					}
				},
				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},





        ] .map((x:any,i)=>{
			x.key += "-around-controls"
			return x
		})
    },
    {
        "title": "after controls",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
				// "height":"1000",
				delta:{
					"group":[
						{
							name:"outerDelta",
							type:"add_remove_button"
						}
					],
				},

				"googleSheets": {},
				options:{
					css:{
						"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
						"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
					}
                }
			},

            {
                "key": "add",
                "type": "button",
                "value":"Add ",
				delta:{
					"group":"outerDelta",
					"type":"add",
					"by":"1"
				},
                "split": "3",
                "googleSheets": {},
            },
            {
                "key": "remove",
                "type": "button",
                "value":"Remove",
				delta:{
					"group":"outerDelta",
					"type":"remove",
					"by":"1"
				},
                // "nestGroup":"view",
                // "nestUnder":"A1",
                // "nest":"B4",
                "split": "3",
                // "width":"300",
                // "height":"250",
                "googleSheets": {},
			},

            {
                "key": "my-input-counter",
                "type": "count",
				"value":"3.",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
                "split": "1",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            {
                "key": "my-input",
                "type": "textbox",
                "value":"setup",
				delta:{
					"group":"outerDelta"
				},
                "googleSheets": {},

			},
            {
                "key": "my-div",
                "type": "div",
				"value":"",
				"next":"true",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(221,101,7)"
					}
				},
				"left":"400",
                "split": "3",
                "height":"250",
                "googleSheets": {},

			},
			{
                "key": "my-div",
                "type": "div",
                "value":"",
				delta:{
					"group":"outerDelta"
				},
				options:{
					css:{
						border:"30px dotted rgb(121,101,117)"
					}
				},
				"left":"800",
                "split": "2",
                "height":"150",
                "googleSheets": {},

			},





        ] .map((x:any,i)=>{
			x.key += "-after-controls"
			return x
		})
    },

].slice(1)


export default website


