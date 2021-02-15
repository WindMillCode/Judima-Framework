let website:any = {}
let beforeItems  = [{
	"key": "before-text",
	type:"div",
	"value":"Before Items",
	"split": "3",
	"height":"100",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	"googleSheets": {},
},
{
	"key": "before-text",
	type:"date",
	"value":"Before Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "before-text",
	type:"input",
	"value":"Before Items",
	"split": "3",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "before-text",
	// "type": "gsap-cursor",
	type:"bullet point",
	"value":"Before Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
}].slice((Math.random()*3)+1)
let afterItems  = [{
	"key": "after-text",
	type:"div",
	"value":"after Items",
	"split": "3",
	"next":"true",
	"height":"100",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	"googleSheets": {},
},
{
	"key": "after-text",
	type:"date",
	"value":"after Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "after-text",
	type:"input",
	"value":"after Items",
	"split": "3",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "after-text",
	// "type": "gsap-cursor",
	type:"bullet point",
	"value":"after Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
}]
let betweenItems  = [{
	"key": "between-text",
	type:"div",
	"value":"between Items",
	"split": "3",
	"next":"true",
	"height":"100",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	"googleSheets": {},
},
{
	"key": "between-text",
	type:"date",
	"value":"between Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "between-text",
	type:"input",
	"value":"between Items",
	"split": "3",
	options:{
		css:{
			"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
		}
	},
	// "height":"1",
	"googleSheets": {},
},
{
	"key": "between-text",
	// "type": "gsap-cursor",
	type:"bullet point",
	"value":"between Items",
	"split": "3",
	// "height":"1",
	"googleSheets": {},
}]
let group1 = [
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
		"split": "5",
		"height":"150",
		"googleSheets": {},

	},
]
let group2 = [
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
]
let controls = [            {
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
	"split": "6",
	"googleSheets": {},
},]

let secondOuterDelta = [
	{
		"key": "my-input-counter",
		"type": "count",
		"value":"3.",
		"next":"true",
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
		"next":"true",
		delta:{
			"group":"secondOuterDelta"
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
		"split": "2",
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
]

//
let nesting_development =  {
	"title": "nesting_development",
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
						name:"innerDelta",
						type:"add_remove_button"
					}
				],
			},
			nest:{
				"group":[
					{
						name:"webRTC",
						type:"regular"
					},
					{
						name:"schemas",
						type:"regular"
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
			"key": "localVideo",
			"value": "",
			"type": "video",
			"split": "5",
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
			"nest":{
				group:"webRTC",
				name:"B1",
				under:"A1"
			},
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
			"nest":{
				group:"webRTC",
				name:"A1",
				// under:null
			},
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
			"key": "startButton",
			"value": "Start",
			"type": "button",
			"next":"true",
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
			"nest":{
				group:"schemas",
				name:"A1",
				// under:null
			},
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
			"nest":{
				group:"schemas",
				name:"B1",
				under:"A1"
			},
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
		{
		    "key": "my-table",
		    "type": "simpleTable",
		    "value":"",
			"nest":{
				group:"schemas",
				name:"B1",
				under:"A1"
				// under:null
			},
		    "background":"blue",
		    // "split": "3",
		    // "width":"300",
		    // "height":"250",
		    "googleSheets": {},
		    "options":{
		        "css":{
		            // "justify-self":"flex-start",
		            // "flex-grow":"1"
		            "height":"300px",
		            "width":"400px",
		            "order":1
		        }
		    }
		},
		{
			"key": "my-counter",
			"type": "count",
			"value":"1.",

			delta:{
				"group":"innerDelta",
			},
			nest:{
				group:"schemas",
				name:"D1",
				under:"C1"
			},

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
			nest:{
				group:"schemas",
				name:"D2",
				under:"C1"
			},
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
			delta:{
				"group":"innerDelta",
			},
			nest:{
				group:"schemas",
				name:"C1",
				under:"B3"
			},
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

			delta:{
				"group":"innerDelta",
				type:"add",
				by:"1"
			},
			nest:{
				group:"schemas",
				name:"C2",
				under:"B3"
			},

			"split": "3",
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
			nest:{
				group:"schemas",
				name:"C3",
				under:"B3"
			},
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
			nest:{
				group:"schemas",
				name:"B3",
				under:"A1"
			},
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
}
let  nesting_and_duplicate_development =     {
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
			nest:{
				"group":[
					{
						name:"webRTC",
						type:"regular"
					},
					{
						name:"schemas",
						type:"regular"
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
			gsapCusor:{
				"group":"a",
				"copyPath":"true",

			},
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
			"split": "2",
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
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "more-text",
			"type": "text",
			"value":"More Items",
			"split": "3",
			"height":"250",
			"fontSize":72,
			"googleSheets": {},
		},

		{
			"key": "my-input-counter",
			"type": "count",
			"value":"2.",
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
			"nest":{
				group:"webRTC",
				name:"B1",
				under:"A1"
			},
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
			"nest":{
				group:"webRTC",
				name:"A1",
				// under:null
			},
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
		...secondOuterDelta,
		{
			"key": "startButton",
			"value": "Start",
			"type": "button",
			"next":"true",
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
			"nest":{
				group:"schemas",
				name:"A1",
				// under:null
			},
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
			"nest":{
				group:"schemas",
				name:"B1",
				under:"A1"
			},
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
		{
		    "key": "my-table",
		    "type": "simpleTable",
		    "value":"",
			"nest":{
				group:"schemas",
				name:"B1",
				under:"A1"
				// under:null
			},
		    "background":"blue",
		    // "split": "3",
		    // "width":"300",
		    // "height":"250",
		    "googleSheets": {},
		    "options":{
		        "css":{
		            // "justify-self":"flex-start",
		            // "flex-grow":"1"
		            "height":"300px",
		            "width":"400px",
		            "order":1
		        }
		    }
		},
		{
			"key": "my-counter",
			"type": "count",
			"value":"1.",

			delta:{
				"group":"innerDelta",
			},
			nest:{
				group:"schemas",
				name:"D1",
				under:"C1"
			},

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
			nest:{
				group:"schemas",
				name:"D2",
				under:"C1"
			},
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
			delta:{
				"group":"innerDelta",
			},
			nest:{
				group:"schemas",
				name:"C1",
				under:"B3"
			},
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
					"overflow":"visible"
					// "justify-content":"space-between",
					// "flex-wrap":"wrap"
				}
			}
		},
		{
			"key": "inner-add",
			"type": "button",
			"value":"Add Another",

			delta:{
				"group":"innerDelta",
				type:"add",
				by:"1"
			},
			nest:{
				group:"schemas",
				name:"C2",
				under:"B3"
			},

			"split": "3",
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
			nest:{
				group:"schemas",
				name:"C3",
				under:"B3"
			},
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
			nest:{
				group:"schemas",
				name:"B3",
				under:"A1"
			},
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
		}





	] .map((x:any,i)=>{
		x.key += "-nested-duplicate-multiple"
		return x
	})
}



let nesting_and_duplicate_testing =  [

    nesting_and_duplicate_development,
    {
        "title": "error indicator",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
				// "height":"1000",
				delta:{
				},
                // "background": "rgb(155, 9, 104)",
				"googleSheets": {},
				options:{
					css:{
						// "background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
						// "clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
					}
                }
			},
            {
                "key": "my-indicator",
				type:"text",
                "value":"No errors",
				"split": "3",
				options:{
					css:{
						height:"200px",
						color:"black"
					}
				},
                "googleSheets": {},
			},
			{
                "key": "my-indicator-message",
				type:"text",
                "value":"UPDATE",
				"split": "9",
				options:{
					css:{
						height:"200px",
						color:"black"
					}
				},
                "googleSheets": {},
			},




        ]
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

            ...group1,

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
                "split": "3",
                "googleSheets": {},
			},



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
			...group1,

			...controls,
			...[
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
					top:-20,
					"left":"800",
					"split": "2",
					"height":"150",
					"googleSheets": {},

				},
			]





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

           ...controls,
		   ...group1






        ] .map((x:any,i)=>{
			x.key += "-after-controls"
			return x
		})
	},

    {
        "title": "before contols  with items before",
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
			...beforeItems,
            {
                "key": "my-input-counter",
                "type": "text",
				"value":"1.",
				"next":"true", //mabye math.random see what it can do
				delta:{
					"group":"outerDelta"
				},
                "split": "9",
                "googleSheets": {},
                "options":{
                    "css":{
                    }
                }
			},
            ...group1,
			...controls


        ] .map((x:any,i)=>{
			x.key += "-before-controls-items-before"
			return x
		})
	},
    {
        "title": "around controls with items before",
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
			...beforeItems,
            {
                "key": "my-input-counter",
                "type": "count",
				"value":"1.",
				"next":"true", //mabye math.random see what it can do
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
			x.key += "-around-controls-items-before"
			return x
		})
	},
	{
        "title": "after controls items before",
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
			...beforeItems,
            {
                "key": "add",
                "type": "button",
				"value":"Add ",
				"next":"true",
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
			x.key += "-after-controls-items-before"
			return x
		})
	},

    {
        "title": "before contols  with items after",
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
                "split": "3",
                "googleSheets": {},
			},
			...afterItems,


        ] .map((x:any,i)=>{
			x.key += "-before-controls-items-after"
			return x
		})
	},
    {
        "title": "around controls with items after",
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
			...afterItems,





        ] .map((x:any,i)=>{
			x.key += "-around-controls-items-after"
			return x
		})
	},
	{
        "title": "after controls items after",
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
			...afterItems,





        ] .map((x:any,i)=>{
			x.key += "-after-controls-items-after"
			return x
		})
	},

    {
        "title": "before contols  with items between",
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
			...betweenItems,
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
                "split": "3",
                "googleSheets": {},
			},



        ] .map((x:any,i)=>{
			x.key += "-before-controls-items-between"
			return x
		})
	},
    {
        "title": "around controls with items between top",
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
			...betweenItems,
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
			x.key += "-around-controls-items-after"
			return x
		})
	},
    {
        "title": "around controls with items between bottom",
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
			...betweenItems,
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
			x.key += "-around-controls-items-after"
			return x
		})
	},
    {
        "title": "around controls with items between both",
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
			...betweenItems,
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
			...betweenItems,
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
			x.key += "-around-controls-items-after"
			return x
		})
	},
	{
        "title": "after controls items between",
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
			...betweenItems,
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
			x.key += "-after-controls-items-after"
			return x
		})
	},

    {
        "title": "before contols  with items between before",
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
			...beforeItems,
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
			...betweenItems,
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
                "split": "3",
                "googleSheets": {},
			},



        ] .map((x:any,i)=>{
			x.key += "-before-controls-items-between-before"
			return x
		})
	},
    {
        "title": "before contols  with items between after",
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
			...betweenItems,
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
                "split": "3",
                "googleSheets": {},
			},
			...afterItems


        ] .map((x:any,i)=>{
			x.key += "-before-controls-items-between-after"
			return x
		})
	},

	{
        "title": "after controls items between before",
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
			...beforeItems,
            {
                "key": "add",
                "type": "button",
				"value":"Add ",
				"next":"true",
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
			...betweenItems,
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
			x.key += "-after-controls-items-after"
			return x
		})
	},
	{
        "title": "after controls items between after",
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
			...betweenItems,
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
			...afterItems





        ] .map((x:any,i)=>{
			x.key += "-after-controls-items-after"
			return x
		})
	},

]
//

//

let latch_dropdown_duplicate_nesting_development = {
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
				]
			},
			nest:{
				"group":[
					{
						name:"dropdown",
						type:"regular"
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
		    "key": "my-text",
			// delta:{
			// 	"group":"outerDelta"
			// },
		    "type": "text",
		    "value":"Some Text",
		    "background":"blue",
		    "googleSheets": {},
			"split":"4",
		},
		{
			"key": "my-overlay",
			"type": "div",
			"value":"",
			"background":"yellow",
			"nest":{
				group:"dropdown",
				name:"A1",
				// under:"Z1"
			},
			// "width":"500",
			"split":"8",
			"height":"1200",
			"googleSheets": {},
			"options":{
				"css":{
					display:"flex",
					"flex-direction":"row",
					"justify-content":"space-around",
					"align-items":"space-between",
					// "place-content":"space-around",
					"flex-wrap":"wrap"
				}
			}
		},
		{
			"key": "my-dropdown-1",
			type:"dropdown",
			value:"1 Dropdown",
			delta:{
				"group":"outerDelta",

			},
			"nest":{
				group:"dropdown",
				name:"B1",
				under:"A1"
			},
			latch:{
				options:[ //look to changes this to options
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
				],
				// "state":"open"

			},
			"split": "3",
			options:{
				css:{
					order:-3
				}
			},
			"googleSheets": {},
		},
		// {
		// 	"key": "my-dropdown-2",
		// 	type:"dropdown",
		// 	value:"2 Dropdown",
		// 	delta:{
		// 		"group":"outerDelta",

		// 	},
		// 	"nest":{
		// 		group:"dropdown",
		// 		name:"B2",
		// 		under:"A1"
		// 	},
		// 	latch:{
		// 		options:[ //look to changes this to options
		// 			"E",
		// 			"F",
		// 			"G",
		// 			"H",
		// 		],
		// 		// "state":"open"

		// 	},
		// 	options:{
		// 		css:{
		// 			order:-2
		// 		}
		// 	},
		// 	"split": "3",
		// 	"googleSheets": {},
		// },
		// {
		// 	"key": "my-dropdown-3",
		// 	type:"dropdown",
		// 	value:"3 Dropdown",
		// 	delta:{
		// 		"group":"outerDelta",
		// 	},
		// 	"nest":{
		// 		group:"dropdown",
		// 		name:"B3",
		// 		under:"A1"
		// 	},
		// 	latch:{
		// 		options:[ //look to changes this to options
		// 			"I",
		// 			"J",
		// 			"K",
		// 		],
		// 		"state":"open"

		// 	},
		// 	options:{
		// 		css:{
		// 			order:-1
		// 		}
		// 	},
		// 	"split": "3",
		// 	"googleSheets": {},
		// },
		{
			"key": "localVideo",
			// delta:{
			// 	"group":"outerDelta"
			// },
			"value": "",
			"type": "video",
			"split": "5",
			// "width":"420",
			"height":500,
			"googleSheets": {},
		},
		{
			"key": "add",
			"type": "button",
			"value":"Add ",
			delta:{
				"group":"outerDelta",
				"type":"add",
				"by":1
			},
			"nest":{
				group:"dropdown",
				name:"B4",
				under:"A1"
			},
			"next":"true",
			"split": "2",
			options:{
				css:{
					"flex-shrink":1,
					"height":"100px"
				}
			},
			"googleSheets": {},
		},
		{
			"key": "remove",
			"type": "button",
			"value":"Remove",
			delta:{
				"group":"outerDelta",
				"type":"remove",
				"by":1
			},
			"nest":{
				group:"dropdown",
				name:"B5",
				under:"A1"
			},
			options:{
				css:{
					"flex-shrink":1,
					"height":"100px"
				}
			},
			"split": "3",
			"googleSheets": {},
		},




	] .map((x:any,i)=>{
		x.key += "-latch-dropdown-duplicate"
		return x
	})
}
let latch_dropdown_duplicate_development = {
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
				]
			},
			nest:{

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
		    "key": "my-text",
			delta:{
				"group":"outerDelta"
			},
		    "type": "text",
		    "value":"Some Text",
		    "background":"blue",
		    "googleSheets": {},
			"split":"4",
		},
		{
			"key": "my-dropdown-1",
			type:"dropdown",
			value:"1 Dropdown",
			delta:{
				"group":"outerDelta",

			},
			latch:{
				options:[ //look to changes this to options
					"A",
					"B",
					"C",
					"D",
				],
				// "state":"open"

			},
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown-2",
			type:"dropdown",
			value:"2 Dropdown",
			delta:{
				"group":"outerDelta",

			},
			latch:{
				options:[ //look to changes this to options
					"E",
					"F",
					"G",
					"H",
				],
				// "state":"open"

			},
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown-3",
			type:"dropdown",
			value:"3 Dropdown",
			delta:{
				"group":"outerDelta",

			},
			latch:{
				options:[ //look to changes this to options
					"I",
					"J",
					"K",
				],
				"state":"open"

			},
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "localVideo",
			delta:{
				"group":"outerDelta"
			},
			"value": "",
			"type": "video",
			"split": "5",
			// "width":"420",
			"height":500,
			"googleSheets": {},
		},
		{
			"key": "add",
			"type": "button",
			"value":"Add ",
			delta:{
				"group":"outerDelta",
				"type":"add",
				"by":1
			},
			"next":"true",
			"split": "2",
			"googleSheets": {},
		},
		{
			"key": "remove",
			"type": "button",
			"value":"Remove",
			delta:{
				"group":"outerDelta",
				"type":"remove",
				"by":1
			},
			"split": "3",
			"googleSheets": {},
		},




	] .map((x:any,i)=>{
		x.key += "-latch-dropdown-duplicate"
		return x
	})
}
let latch_dropdown_development = {
	"title": "development",
	"type_slug": "forms",
	"metafields": [

		{
			"key": "Body",
			"type": "body",
			"stack": "60",
			// "height":"1000",
			delta:{

			},
			nest:{

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
			"key": "my-cursor",
			// "type": "gsap-cursor",
			type:"text",
			// "value":"Items",
			// "split": "3",
			gsapCusor:{
				"group":"a",
				"copyPath":"true",

			},
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
		    "key": "my-table",
		    "type": "simpleTable",
		    "value":"",
		    "background":"blue",
		    "googleSheets": {},
			"split":"4",
			"height":"300"
		},
		{
			"key": "my-dropdown",
			type:"dropdown",
			value:"Select Item",
			latch:{
				options:[ //look to changes this to options
					"Boston",
					"St. Paul",
					"Bungalese",
					"Artic",
					"Oceania",
					"Paciic",
					"Canada"
				],

			},
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "localVideo",
			"value": "",
			"type": "video",
			"split": "5",
			// "width":"420",
			"height":500,
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"dropdown",
			value:"Select Item",
			latch:{
				options:[ //look to changes this to options
					"Toronto",
					"Suriya"
				],

			},
			"split": "3",
			"googleSheets": {},
		},




	] .map((x:any,i)=>{
		x.key += "-latch-dropdown"
		return x
	})
}
let latch_dropdown_at_base_development = {
	"title": "development",
	"type_slug": "forms",
	"metafields": [

		{
			"key": "Body",
			"type": "body",
			"stack": "60",
			// "height":"1000",
			delta:{

			},
			nest:{

			},
			"googleSheets": {},
			options:{
				css:{
					"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
					// "clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
				}
			}
		},
		{
			"key": "my-cursor",
			// "type": "gsap-cursor",
			type:"text",
			// "value":"Items",
			// "split": "3",
			gsapCusor:{
				"group":"a",
				"copyPath":"true",

			},
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
			"key": "my-dropdown",
			type:"dropdown",
			value:"Select Item",
			latch:{
				options:[ //look to changes this to options
					"Toronto",
					"Anaheim",
					"Minneapolis",
					"Contregan"
				],

			},
			"split": "3",
			"googleSheets": {},
		},




	] .map((x:any,i)=>{
		x.key += "-latch-dropdown-base"
		return x
	})
}
let latch_dropdown_nesting_development = {
	"title": "latch_dropdown_nesting_development",
	"type_slug": "forms",
	"metafields": [

		{
			"key": "Body",
			"type": "body",
			"stack": "60",
			// "height":"1000",
			delta:{

			},
			nest:{
				"group":[
					{
						name:"dropdown",
						type:"regular"
					},
				],
			},
			"googleSheets": {},
			options:{
				css:{
					"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
					"clip-path":"polygon(100% 11%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)"
				}
			}
		},
		{
			"key": "my-cursor",
			// "type": "gsap-cursor",
			type:"text",
			// "value":"Items",
			// "split": "3",
			gsapCusor:{
				"group":"a",
				"copyPath":"true",

			},
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
			"key": "my-overlay",
			"type": "div",
			"value":"",
			"background":"yellow",
			"nest":{
				group:"dropdown",
				name:"A1",
				// under:"Z1"
			},
			// "width":"500",
			"split":"8",
			"height":"400",
			"googleSheets": {},
			"options":{
				"css":{
					display:"flex",
					"flex-direction":"row",
					"justify-content":"space-around",
					"align-items":"space-between",
					// "place-content":"space-around",
					"flex-wrap":"wrap"
				}
			}
		},
		{
			"key": "my-first-dropdown",
			type:"dropdown",
			value:"Comes First",
			"nest":{
				group:"dropdown",
				name:"B2",
				under:"A1"
			},
			latch:{
				options:[ //look to changes this to options
					"Sudafed",
					"Dalcus",
					"Omarus",
					"Toronto",
					"Anaheim",
					"Minneapolis",
					"Contregan",
				],

			},
			options:{
				css:{
					width:"200px",
					order:-2
				}
			},
			// "split": "3",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"dropdown",
			value:"Comes Second",
			"nest":{
				group:"dropdown",
				name:"B3",
				under:"A1"
			},
			latch:{
				options:[ //look to changes this to options
					"Toronto",
					"Anaheim",
					"Minneapolis",
					"Contregan"
				],

			},
			options:{
				css:{
					width:"200px",
					order:-1
				}
			},
			// "split": "3",
			"googleSheets": {},
		},
		{
		    "key": "my-table",
		    "type": "simpleTable",
		    "value":"",
			"nest":{
				group:"dropdown",
				name:"B1",
				under:"A1"
			},
		    "background":"blue",
		    // "split": "3",
		    // "width":"300",
		    // "height":"250",
		    "googleSheets": {},
		    "options":{
		        "css":{
		            // "justify-self":"flex-start",
		            // "flex-grow":"1",
		            "height":"300px",
		            "width":"400px",
					// order:3
		        }
		    }
		},
		{
			"key": "localVideo",
			"value": "",
			"type": "video",
			"split": "5",
			"nest":{
				group:"dropdown",
				name:"B4",
				under:"A1"
			},
			// "width":"420",
			"height":500,
			"googleSheets": {},
		},





	] .map((x:any,i)=>{
		x.key += "-latch-dropdown-nesting"
		return x
	})
}


let latch_testing = [

	// latch_dropdown_nesting_development,
	// latch_dropdown_at_base_development,
	// latch_dropdown_development,
	// latch_dropdown_duplicate_development
	latch_dropdown_duplicate_nesting_development
]
//

//

// all we test is that we can resize the borard
let component_sizing_development ={
	"title": "development",
	"type_slug": "forms",
	"metafields": [

		{
			"key": "Body",
			"type": "body",
			"stack": "60",
			// "height":"1000",
			delta:{

			},
			nest:{

			},
			height:"1000",
			// width:"648",
			"googleSheets": {},
			options:{
				css:{
					"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
					"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)",
					width:"125%"
				}
			}
		},
		{
			"key": "my-cursor",
			// "type": "gsap-cursor",
			type:"text",
			// "value":"Items",
			// "split": "3",
			gsapCusor:{
				"group":"a",
				"copyPath":"true",

			},
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
		    "key": "my-table",
		    "type": "simpleTable",
		    "value":"",
		    "background":"blue",
		    "googleSheets": {},
			"split":"4",
			"height":"300"
		},
		{
			"key": "my-dropdown",
			type:"text",
			value:"Some Text",
			background:"red",
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"textbox",
			value:"Some Text",
			"split": "3",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"loading",
			"split": "3",
			"color":"blue",
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"button",
			value:"I dont do anything",
			"split": "3",
			"color":"blue",
			"googleSheets": {},
		},
		{
			"key": "localVideo",
			"value": "",
			"type": "video",
			"split": "5",
			// "width":"420",
			"height":500,
			"googleSheets": {},
		},
		{
			"key": "my-dropdown",
			type:"dropdown",
			value:"Select Item",
			latch:{
				options:[ //look to changes this to options
					"Toronto",
					"Suriya"
				],

			},
			"split": "3",
			"googleSheets": {},
		},




	] .map((x:any,i)=>{
		x.key += "-component-sizing"
		return x
	})
}

let component_position_development = [
	{
		"title": "navigation",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				"left":-147,
				delta:{

				},
				nest:{

				},
				"googleSheets": {},
				options:{
					css:{
						width:"125%"
					}
				}
			},
			{
				"key": "heading",
				type:"heading",
				"value":"Judima",
				// "split": "3",
				"text-align":"left",
				options:{
					css:{
						height:"200px",
						"text-align":"left",
						"font-family":"Gilgongo Doro"
					}
				},
				"googleSheets": {},
			},
            {
                "key": "image-1",
                "type": "image",
                "imageURL":"angular.png",
                "height":"100",
                "split":2,
            },
			{
				"key": "home",
				type:"text",
				"value":"Home",

			},
			{
				"key": "about",
				type:"text",
				"value":"About",

			},
			{
				"key": "articles",
				type:"text",
				"value":"Articles",

			},
			{
				"key": "videos",
				type:"text",
				"value":"Videos",

			},
			{
				"key": "newsletter",
				type:"text",
				"value":"Newsletter",
				next:"true",
				top:-40,
				left:400
			},
			{
				"key": "guides",
				type:"text",

				// top:-40,
				top:-40,
				"value":"Guides",
			},
			{
				"key": "books",
				type:"text",
				// top:-40,
				top:-40,
				"value":"Books",
			},




		] .map((x:any,i)=>{
			x.key += "-component-position"
			return x
		})
	},
	{
		"title": "aside",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				// "left":-147,
				height:1700,
				// width:500,
				delta:{
					group:[
						{
							name:"media_card",
							type:"repeat"
						}
					]
				},
				nest:{
					"group":[
						{
							name:"menu",
							type:"regular"
						},
					],
				},
				"googleSheets": {},
				options:{
					css:{
						width:"25%"
					}
				}
			},
			{
				"key": "heading",
				type:"heading",
				"value":"Menu",
				// "split": "3",
				"text-align":"left",
				options:{
					css:{
						height:"200px",
						"text-align":"left",
						"font-family":"Gilgongo Doro"
					}
				},
				"googleSheets": {},
			},
			{
				"key": "container",
				type:"div",
				"value":"Home",
				split:2,
				height:200,
				options:{
					css:{
						border:"5px solid red",
						display:"flex",
						// "flex-flow":""
					}
				},
				delta:{
					group:"media_card",
					by:5,
				},
				"nest":{
					group:"menu",
					name:"A1",
				},
			},
            {
                "key": "image-1",
                "type": "image",
                "imageURL":"python.jpg",
				"nest":{
					group:"menu",
					name:"B1",
					under:"A1"
				},
				delta:{
					group:"media_card",
					by:5,
				},
				options:{
					css:{
						height:"170px",
						width:"170px"
					}
				}
            },
            {
                "key": "text",
                "type": "text",
                "value":`Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
				"nest":{
					group:"menu",
					name:"B2",
					under:"A1"
				},
				delta:{
					group:"media_card",
					by:5,
				}
            },






		] .map((x:any,i)=>{
			x.key += "-component-position"
			return x
		})
	},
	{
		"title": "article",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				"stack": "60",
				// "height":"1000",
				left:200,
				delta:{

				},
				nest:{

				},
				height:"1000",
				// width:"648",
				"googleSheets": {},
				options:{
					css:{
						"background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
						"clip-path":"polygon(100% 0%, 0% 0%, 0% 99%, 38% 28%, 68% 67%)",
						width:"125%"
					}
				}
			},
			{
				"key": "my-cursor",
				// "type": "gsap-cursor",
				type:"text",
				// "value":"Items",
				// "split": "3",
				gsapCusor:{
					"group":"a",
					"copyPath":"true",

				},
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
				"key": "my-table",
				"type": "simpleTable",
				"value":"",
				"background":"blue",
				"googleSheets": {},
				"split":"4",
				"height":"300"
			},
			{
				"key": "my-dropdown",
				type:"text",
				value:"Some Text",
				background:"red",
				"split": "3",
				"googleSheets": {},
			},
			{
				"key": "my-dropdown",
				type:"textbox",
				value:"Some Text",
				"split": "3",
				"googleSheets": {},
			},
			{
				"key": "my-dropdown",
				type:"loading",
				"split": "3",
				"color":"blue",
				"googleSheets": {},
			},
			{
				"key": "my-dropdown",
				type:"button",
				value:"I dont do anything",
				"split": "3",
				"color":"blue",
				"googleSheets": {},
			},
			{
				"key": "localVideo",
				"value": "",
				"type": "video",
				"split": "5",
				// "width":"420",
				"height":500,
				"googleSheets": {},
			},
			{
				"key": "my-dropdown",
				type:"dropdown",
				value:"Select Item",
				latch:{
					options:[ //look to changes this to options
						"Toronto",
						"Suriya"
					],

				},
				"split": "3",
				"googleSheets": {},
			},




		] .map((x:any,i)=>{
			x.key += "-component-position"
			return x
		})
	},

]
//

let component_dimension_testing = [
	// component_sizing_development,
	...component_position_development
]
//
website.convertCMS = component_dimension_testing


export default website
