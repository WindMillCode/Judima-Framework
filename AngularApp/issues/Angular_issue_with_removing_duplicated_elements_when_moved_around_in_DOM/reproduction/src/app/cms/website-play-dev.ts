let website:any = {}



// where the issue is
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
		    "type": "text",
		    "value":"",
		    "background":"",
		    "googleSheets": {},
			"split":"4",
			"height":"1",
			"options":{
				css:{
					width:"1px",
					height:"1px"
				}
			}
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
				"state":"open"

			},
			"split": "3",
			options:{
				css:{
					order:-3
				}
			},
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
// 

let latch_dropdown_duplicate_development = {
	"title": "development",
	"type_slug": "forms",
	"metafields": [

		{
			"key": "Body",
			"type": "body",
			"stack": "200",
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
		    "type": "text",
		    "value":"",
		    "background":"",
		    "googleSheets": {},
			"split":"4",
			"height":"1",
			"options":{
				css:{
					width:"1px",
					height:"1px"
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

			latch:{
				options:[ //look to changes this to options
					"A",
					"B",
					"C",
				],
				"state":"open"

			},
			"split": "3",
			options:{
				css:{
					order:-3
				}
			},
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


let latch_testing = [

	// latch_dropdown_nesting_development,
	// latch_dropdown_at_base_development,
	// latch_dropdown_development,

	latch_dropdown_duplicate_nesting_development,
	latch_dropdown_duplicate_development,
]
//
website.convertCMS =  latch_testing


export default website
