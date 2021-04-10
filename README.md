# AngularTemplateProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

It is currrently at   [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9
## Educational
* every other software stack on sevearl platforms the software is doing the same things
    * in web design this is not the case
    * the zChild and its framework was designed to make all browsers to the same thing



### The zChild 
*  its task is one to do the same thing no matter which 
    software is in the website, which OS ... whichever variables exist the zChild will be the same === sucess

#### Foundation
* the zChildren have symbols to uniquely identify them as representations of DOM elemnets and their features, and roles ifself will play as it interacts with the rest of the app
* a zChild is unique to its components so zChildren in different componets may have the same symbol but do not be confused, they will NEVER be in the same scope, when use a symbol to access a zChild, you are using the zChild from the scope current component,zChildren do not exist outside the scope of a component and if they do, they are locked inside an object with direct reference to a component
* zChildren express a set of features which must manifest in one component, if a concept presents itself that requires the use of more than one component, refactor so the concept manifests as one component
* &#8352, represent the component element, it's width is set to 100%, its height is 0px and its kept at the top of the window and that is it concerning its interference with the application, judima prefers not to have any elements nested however  angular requries component elements in order to function, and they help elements have a defined starting position in the DOM
* &#8353 is the symbol that represents the zChild board. the board is a canvas body which provides a foundational encompassing for the component. In other words, the component and its logic knows itself in relation to the window, and can act as an entity to make itself aware to other components and know of other components
* after that its zChildren representations of DOM elements in their individuality
* they are genererated from the component's component Object, which takes advantages of Angular's binding mechanism in order to represent the element
 
#### zChild properties
* quanity -what type of zChild it is
    * there are 4 types of zChild we will discuss static and dynamic, if you are a beginner you will quickly led down the rabbit hole of understanding the other two types
        * __static zChild__
            * its quanity value is 3
            * this type of zChild means its element is always on the DOM, it will meet the minium requirements
                * full cross-browser responsiveness
                * full modularity capability to interact with any given library,software,plugin, framework(non Angular framework)
        * __dynamic zChild__
            * its quantity value is 2
            * its element comes in and out of the DOM when its not needed its taken completly out of memory. you interact with  data , functions ,lifecycle hook on the entrance and exit of the dynamic zChild 
            * __NEVER REFERENCE DIRECTLY THESE zChildren BY USING THEIR SYMBOLS, ALWAYS WORK IN THE DELTANODE SYSTEM AND REFRENCE THEM IN TERMS OF THE ARRAY PROVIDE BY ITS DELTANODE GROUP
        * __latch zChild__ 
            * its quantity is 4
            * this represents an element that is a feature of another  element, such as options in a dropdown, or overlay for an title element. they opearte as a feature of the target element 

* bool - the element it is
    as we have HTML Elements, its not logical to contain them all in the framework however you need a simple and quick way to choose the element needed
    the values will produce the following HTML Elements

|bool|HTML Element|
|:------|:------:|
|h1-6|h1-6|
|a|a|
|p|p|
|code|code|
|span|span|
|strong|strong|
|i|input|
|ta|textarea|
|c|canvas|
|l|label|
|ul|ul|
|f|form|
|div|div|
|img|img|
|b|button|
|embed|embed|
|video|video|
|audio|audio|
|mat-spinner|mat-progress-spinner|
|ag-grid|ag-grid-angular|
|gsap-cursor|"helps costruct a gsap cursor feature"|

* css HTMLElement.style
    * represents the css for the element, most likely need a 3rd party library to have to reflect sass,less ....
    * the object is binded to ngStyle, so deepCopy using spread syntax and object modification only do not set it equal to another object
    
* cssDefault- the intial css for the zChild after app.ngAfterViewInit is completed
    * helps the app greatly for the dimensionals of the zChild for window resizing granular to the pixel

* element - the HTML element

* innerText an object with item the property containing the text of the element

* symbol, the unique symbol identifying the zChild

* extras, this extends the elements, it it provides object data so extending of the element can go smoothly especially if its a role to play in expressing a feature for a group of elements, a component or the whole app
    * they have two objects
    * extend - key value pairs to set the Element attributes
    * judima - object that indicates to the framework how to treat its respective individual zChild, if not set , the component then app settings take precedience
    * the rest of the objects are from user cretead  directives, however deltaNode,navigation,latch,nest, and section are built -in and are needed for the app to function and to perform the basic abilities of any website


### The Ryber
* the Ryber is the service that creates the app from big data. Judima treats the web app it creates as big data, one can see that from the website.ts file. The ryber intializes the application and represents the entire website in its raw form

* in its constructor it starts to create component objects to represent the components in the app then transforms website.ts  using template.component.html to create Elements and place them on the DOM, binded with all the data the HTMLElementS will need to play its role in the application

* you should not edit anything here instead of zChildTemplate and ryber.appCO0
* appViewComplete,appViewCompleteArray deal with the observable representations of the component, they let the app and the developer know that the component is ready for UX/UI, for example, 

* appViewNavigation deals with navigation from one link to another

* appAvailble are for directives, since you can't use *ngIf on attribute directives appAvaiable looks for blank in which other wise would be data the directive needs to be enabled. this fn handles the one error the comes with finding undefined in places, allowing the directive to be disabled and the app to continue

* ryber.appCO0 servs as app-wide settings, features need to be expressed in terms of the app itself. Read the guides below only how to properly modify the metadata



#### ryber.addAppScripts
a way to async manage 3rd party srcripts

__FILE app.component.ts
```ts
declare global {
    interface Window { Modernizr: any;createMap:any }
    // not let or else local to this file
    var gapi: any
    var google:any
    var Modernizr: any
    var SignaturePad: any
    var seeeb: any
    var faker: any
    var Pikaday: any


    var localConnection :any
    var remoteConnection :any
    var room:any
    var io:any
    var stream:any
    var adapter:any
    var buf:any
    ...
}
....
....
      // this code is resuable and you can add more scripts anywhere in the app
        this.ryber.appCO0.metadata.scripts.push(
            ...this.ryber.appAddScripts({
                scripts:[
                    {
                        src:"https://webrtc.github.io/adapter/adapter-latest.js",
                        name:"webRTC Adapter"
                    },
                    {
                        src:"https://apis.google.com/js/api.js",
                        name:"google api"
                    },
                    (false ?{
                        src: "https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/js/faker.js"
                    } : null)
                ].filter((x:any,i)=>{
                    return x !== null
                })
            })
        )
```

__FILE__ 
* remember to make global all objects variable is creating 
```ts
            let {scripts} =this.ryber.appCO0.metadata

            scripts =  scripts .filter((x:any,i)=>{
                    return x.name === "webRTC Adapter"
                })

            //

            combineLatest([
                // load event fires once however the rxjs helps this method fire
                ...Array.from(scripts,(x:any,i)=>{return fromEvent(x.element,"load")}),
                this.ryber[this.extras.co.valueOf()].metadata.zChildrenSubject
            ])
            .subscribe(()=>{
                // ...3rd party work here
            })
```

### app.component.ts
* this is where angular intends for the application to initalize so judima uses it here
* app initalizion partly occurs here however, everything that cannot be expressed in terms of judima are async executed here such as the loading of 3rd party scripts , global variables, navigation logic, and component configuration.component configuration is required to help judima work but the main concept is setting a data object for a component whether it was required to express judima features or not. the intent is for non-judima code to be maintained here and in the ryber,however judima is flexible make as many exceptions as you wish

### customExports.ts
* judima utility library, 
### MVC VS FPM
* tradtionally we have Model View Controller
* we use Feature Postition Moving
    * feature, what I the component and my zChildren are doing
    * position where do I the component and the zChildren belong on the DOM
    * moving, what data I send other components so foreign can position on the DOM
* with this were able to get alot of done
    * full site responsiveness
    * simple structred code
    * dynamic zChildren code is a modular extensior of static zChild code
    * never worry about cross component issues again

#### form.component.ts 
* serves as the formatter for the entire app. 
* It is the algorithmic link between the DOM elements and the judima framework. its responsible for poisitioning everything on the website according to its code and settings, which completes the transformation of big data to a website representation of it. It is responsible for identifying the existence of features that are significantly involved in the formatting of the website and make sure that there is cooperation, that the features of a zChild are fully expressed as well as maintain the overall formatting structure of the app without the 2 affecting each other

* the algorithm is big because web front-end formatting development is a near-impossible tasks. there is flexbox and grid, however using the algorithm logic allows for infinite granaularity in terms of formatting control. More possible for integration of features into the website without difficulty as well as the expression of the uniqueness of Judima

* the zChildren are made here



#### Features

* if a feature cannot be assoicated with an element place it on the component board, its an element that will always be present until we can find another type of angular directive 

* features are ususally placed on the board to be distributed and managed among zChildren, because of the uncanny ability to be expressed in terms of several zChidren a component or even across a whole app

* ususally when features are expressed there is a head which serves as target when all operations occur and the zChildren invloved have types which play as parts

* theee important names
__group__
__name__
__type__ 
    * group represents the amount of elements,components or apps required to express the feature to the end user
    * name acts as the unique ID for the part of the group 
    * type is the role the part plays in the group, whether it be head tail, foot, 
     play button, submit button, arrow ...

* to implement a feature use the template-judima.directive, and initaite setup from the component body zChild, with type of body. the logic is divided into groups and types, if a name is not provided,  it will be given 'default'. It deals with navigation by going through the zChildren and assigning zSymbols to groups and types in a group object maintained on the componentObject metadata object. it deals with duplication, but looking at the  componentObject metadata deltaNode object and looking for which index an element belongs to in its deltas.

	* always be wary of navigation and duplication
	* after proper grouping and initalization is bug free, use the types to create logic for your code, once again navigation and duplication

	* navigation will make element event listeners disappear, so make sure you reattach instead of reinitalize, one example is the falseDestroy used in other componentObject metadata directives, to save the state of the feature

	* the directive needs to know as much as is needed about whether an element is duplicated, since we fail to have deltaNode properly give, the framework will be redone in a future major version where deltaNode is not only responsible for duplication but also responsible for presenting info the rest of the app can easily work with 
##### Navigation Directive
* these help the element act as a linked when clicked on navigates to different part of the site
* when performing navigation, DOM elements dont disappear, but zChildren are deleted, 
    * properly handle subscriptions
    * needed values that are initalized, need to still exist, suggest making an array and putting in an object inside appCO0.metadata/formCO0[].metadata that represents the feature concept
    * for this make sure feature stem from static zChildren and not stem from each other
* ryber.appCO0.metadata.navigation, is responsible for how navigation works, 
    * navigation.type 
        * SPA, there is no navigation, 
        * full, clicking on links will cause complete navigation, partial navigation suppport unknown,
    * the only thing needed to modify here is ryber.appCO0.metadata.navigation.full.startURL to the "/"+name that is desired, as well as of of the enum for navigation.type, any other changes will break the app
* to use them 
```ts
	{
		"title": "navigation",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				// "left":200,
				delta:{

				},
				nest:{

				},
				navigation:{
					"group":[
						{
							name:"home",
							type:"direct_link"
						},
						{
							name:"about",
							type:"direct_link"
						},
                        ...

					],
					name:"home" //if the app sees the name tied to the name in the group it will display it
				},
				"googleSheets": {},
				options:{
					css:{
						// width:"125%"
						"background-color":"rgb(205, 180, 178)"
					},
					judima:{
						mobile:{
							stack:20,
							footerSpace:50
						}
					}
				},
				appSection:{
					confirm:"true"
				}
			},

			{
				"key": "home",
				type:"text",
				"value":"Home",
				navigation:{
					group:"home",
					type:"direct_link"
				}
			},
			{
				"key": "about",
				type:"text",
				"value":"About",
				navigation:{
					group:"about",
					type:"direct_link"
				}

			},





		] .map((x:any,i)=>{
			x.key += "-main-navigation"
			return x
		})
	},

    //in another component to navigate to that componente
			{
				"key": "Body",
				"type": "body",
				"left":147,
				// height:1700,
				// width:500,
				delta:{
					group:[

					]
				},
				nest:{
					"group":[

					],
				},
				navigation:{
					name:"about"
				},
				"googleSheets": {},

			},
			{
				"key": "heading",
				type:"heading",
				"value":"About",
				// "split": "3",
				"left":"700",
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
                "key": "text",
                "type": "text",
                "value":`Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor .`,
				"next":"true",
				"split":9,
				"text-align":"center"
            },

		] .map((x:any,i)=>{
			x.key += "-navigation-about"
			return x
		})
	},     
```


##### Section Directive
* in general we dont want components to move around, however if they have to this is the main piece of code that is responsible
* it is mainly controlled by ryber.appCO0.metadata.ryber.sectionDefault,
* app.type stack, simply means stack the components one of top of anothers, useful when doing forms and simple web pages, most modern pages follow a stacked format
* app.type = custom, means that components are offset to whatever target component is given, not by using formC0 syntax but by giving the component signature name
* one component off all enabled components on a web page, must have [code] in its body  zChild, if using app.type custom, the app needs a source of truth as to the current media query its in 
```ts
				appSection:{
					confirm:"true"
				},
```
* to place a component using app.type= custom
```ts
// in a body zChild (representing the board)

options:{
    judima:{
        moving:{
            point:"bottom",
            target:'navigation', // this comes from the title of the component
            coordinates:{x:0,y:0},
            type:"custom"
        },
    },
}
```
* zChildren are placed from left to right in the DOM
* in sectionDefault these define how much space are between zChildren as the enter the dom
    * the area is sectionDefault.left +sectionDefault.width, any zChild that's width and/or left goes past it will be forced to the next line with one major exception 
    * width, and app.width should be the same, they relate to media-query checkpoints, and are better left the same, so all components can been in 1 media query state no matter the width of the browser
        * this is really important it defines how much space zChildren can be placed on a row before being moved to the next row
        * can have property { width:"number"}, and can overrivde and stay on the same row even if width and/or left is bigger than the area
    * left decides horizontal when the elemenets start on the page and is responsible for uniformity of the zChildren in a component, think of it as indentation
    * gap is how much horizontal space between zChildren, which can be unique to a component by redefining it from the body zChild, and unique to a zChild by  adding key  value pair {left:number} and/or  { "next":"true"} to the object
    * split makes things easier when deciding width is hard, it takes the dimensions alloted with width and gap and applies a fractional width size to the zChild
    this can be changed in a component with {split:number} in the body zChild
```ts
			{
				"key": "Body",
				"type": "body",
				// "left":147,
				// height:1700,
				width:1200,
                split:10,
                gap:20
            }
```
    * this means if there were 10 zChildren horiztally aligned 
```
10 gaps of 20px each 200px total gap space on the line 
1200 - 200 = 1000px alloted for the width of the zChildren
if every zChildren had a split of 1 
1/10 * 1000 = 100px final width for each zChild
```
    * stack is the vertical gap between zChildren
        * can be modified on the component using {stack:number}
        * can be modified on the zChild using {top:number}
        *  when modifying the top on zChildren when duplication is enabled,
        if the target zChildren overlap you might have set overlapFix to false, even so there is a small chance the screen will go white (infinite loop). there is an infinite loop because overlapFix was to prevent deformity by fixing overlaps, but here in your case you intended overlaps
```
				options:{
					judima:{
						stack:{
							overlapFix:"false"
						}
					}
				}
```


        
    




##### Delta-Node directive
* this deals with the act of adding, removing zChildren from the dom
    * since theres are zChildren standalone and complete in their selves, they will impact the managemnent of every featrue in the app, 
    * when zChildren are added and removed from the DOM, delta-node does well in keepiing a uniform and implied order which is to stack the duplicates
    * when making features, always consider the possiblity of duplication, 
        * identify whether a zChild is duplicated, 
        * identify the number of clones as well as its place among the number of clones
        * make sure everything associated with the clone is properly identified and removed in order on deleltion, if there is an oversight unintended app side effects will occur
        * on adding/deletion make sure the values are cleansed if to be re-used, no refrences to anything dead on incomplete
* to use 
```ts
// body zChild
[
		{
			// "height":"1000",
			delta:{
				"group":[
					{
						name:"outerDelta",
						type:"add_remove_button"
					},
					{
						name:"secondOuterDelta",
						type:"repeat",
                        by:6
					},
				],
			},
        },
zChildren
//  
            {
                "key": "image-1",
                "type": "image",
                "imageURL":"python.jpg",
				delta:{
					group:"media_card",
					// by:5,
				},
				options:{
					css:{
						height:"170px",
						width:"170px"
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
				"by":"2"
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
				"by":"4" // if the original is left it wont be removed
			},
			"split": "3",
			"googleSheets": {},
		},        
]
```

##### Nest Directive 
* working with Judima the framework works best when elements are not nested, the concept being, nested elements add an extra layer of complexity, which will cause unexpected issues
* this directive is used when you want to nest a zChild inside another a good use case is for scrolling for large text
* to use
    * if the groups match, the app will find the zChildren of the "under" value and place the the zChild with the "name" inside the target parent and so on
    
```ts
// body zChildren
[

			{
				"key": "Body",
				"type": "body",
				nest:{
					"group":[
						{
							name:"article section",
							type:"regular"
						},
					],
				},

			},
			{
				key:"container",
				type:"div",
				height:1000,
				split:9,
				top:0,
				options:{
					css:{
						"background-color":"lightgreen"
					}
				},
				"nest":{
					group:"article section",
					name:"A1",
				},
			},
			{
				"key": "heading",
				type:"heading",
				"value":"Section 1",
				"split": "9",
				// "left":"700",
				"text-align":"left",
				"nest":{
					group:"article section",
					name:"B1",
					under:"A1"
				},
				options:{
					css:{
						// height:"200px",
						"text-align":"center",
						"font-family":"Gilgongo Doro"
					}
				},
				"googleSheets": {},
			},

            {
                "key": "text",
                "type": "text",
                "value":`Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incidie.`,
				"next":"true",
				"split":9,
				"text-align":"center",
				"nest":{
					group:"article section",
					name:"B2",
					under:"A1"
				},
            },
			{
				key:"helper",
				type:"div",
				height:1,
				split:1,
				options:{
					css:{
						"background-color":"lightgreen"
					}
				},
			},            

		]

```
##### Latch Directive
* Latch directive is used when a feature of a zChild cannot be expressed without more DOM Element, which will result in more zChildren
* these elements may be topLevel but formatIgnore is applied because it must follow the positioning of the target element, whether they are options in a dropdown, a calendar for a date input or a shape appearing when a mouse hovers over an element
* when adding/removing elements with latch use this to indicate that new elements are on the DOM and zChildren should be made for them
```ts
ryber[co].metadata.latch.updateZChild.next({
})
```


###### Dropdowns
* to make a dropdown
latch.state "closed" || "open" 
```ts
"key": "my-dropdown",
type:"dropdown",
value:"Select Item",
latch:{
    options:[ 
        "Toronto",
        "Suriya"
    ]
}
```
* try not to put in close promixity, the z-index issue hasnt been solved yet

###### Display
* to make a display, we used these insteead of coloring margin, borders and padding becuase they might interfere and provide different results on the actual dimensions of the target element

* if latch.display.type === target it will act as the center of operations
* latch.display.name is the name of the element that the display will surrend
* latch.zChildren, are the metadata the create the zChild display element, 
* latch.zChildren[].logic contains references to the intended dimensions for each display according to the respective media queries
    * width and height are ratios of the the display to the combined sum of the dimensions
    * top and left are offsets for the the combined result of the coordinates
    * you can use a function to provide a custom result if desired
* latch.zChildren[].group is an array that indicates to the display to encompass all zChidren with latch.display.name included in that group, not your typical group you can say the display elemne is the group itself
* you can make displays for display, but since its a ratio just try to compute dimension results from the static zChildrem display on display is a performance issue
```ts
			{
				"key": "heading",
				type:"heading",
				"value":"Section 1",
				"split": "9",
				// "left":"700",
				"text-align":"left",
				top:300,
				delta:{
					"group":"displayDelta"
				},

				latch:{
					type:"display",
					display:{
						type:"target",
						name:"my_display_1"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"red",
							},
							val:"my-display",
							logic:{
								desktop:{
									width:1.10,
									height:function (devObj){ //can be applied with all 4
										let {current,vertical,horizontal} = devObj.delta

										return vertical.delta.value + 200

									},
									top:-40,
									left:-40
								},
								mobile:{
									width:1.10,
									height:1.10,
									top:-40,
									left:-40
								}
							},
							group:["my_display_1","my_display_2"]
						},
						{
							bool:"div",
							css:{
								"background-color":"lightgreen",
							},
							val:"my-display",
							logic:{
								desktop:{
									width:1.10,
									height:1.10,
									top:-20,
									left:-40
								},
								mobile:{
									width:1.10,
									height:1.10,
									top:-20,
									left:-40
								}
							},
							group:["my_display_3"]
						}
					]
				},
				options:{
					css:{
						// height:"200px",
						"text-align":"center",
						"font-family":"Gilgongo Doro"
					},

				},
				"googleSheets": {},
			},
            {
                "key": "text",
                "type": "text",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"my_display_2"
					},
				},
				delta:{
					"group":"displayDelta"
				},
                "value":`Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor. Et sollicitudin ac orci .`,
				"next":"true",
				"split":4,
				"text-align":"center",

            },
```
* some times we want the display to expand and collaspe as elements are added and leave the DOM, to acheive that
    * starts at first name and includes all zChildren with the name, cannot choose even odd or exclude any
```ts
			{
				"key": "heading",
				type:"heading",
				"value":"Section 1",
				"split": 5,
				// "left":"700",
				"text-align":"left",
				top:300,
				delta:{
					"group":"displayExpand"
				},

				latch:{
					type:"display",
					display:{
						type:"target",
						name:"my_display_expand_1"
					},

					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"lightgreen",
							},
							val:"my-display",
							logic:{
								desktop:{
									width:1.20,
									height:function (devObj){
										let {current,vertical,horizontal} = devObj.delta

										return vertical.delta.value + 200

									},
									top:-80,
									left:-80
								},
								mobile:{
									width:1.20,
									height:function (devObj){
										let {current,vertical,horizontal} = devObj.delta

										return vertical.delta.value + 200

									},
									top:-80,
									left:-80
								}
							},
							group:Array.from(Array(4),(x,i)=>{
								return "my_display_expand_"+(i+1)
							}),
							type:["deltaNodeContainer"]
						},
					]
				},
				options:{
					css:{
						// height:"200px",
						"text-align":"center",
						"font-family":"Gilgongo Doro"
					},
					judima:{
						mobile:{
							widthRatio:.3,
							top:500
						}
					}
				},
				"googleSheets": {},
			},
            {
                "key": "section-2",
                "type": "heading",
				top:300,
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"my_display_expand_2"
					},
				},
				options:{
					css:{
						// height:"200px",
						"text-align":"center",
						"font-family":"Gilgongo Doro"
					},
				},
				delta:{
					"group":"displayExpand"
				},
				value:"Section 2",
                "split":4,
				"text-align":"center",

            },
            {
                "key": "text",
                "type": "text",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"my_display_expand_3"
					},
				},
				delta:{
					"group":"displayExpand"
				},
                "value":`Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor. Et sollicitudin ac orci phasellus .`,
				"split":5,
				"text-align":"center",

            },
            {
                "key": "text",
                "type": "text",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"my_display_expand_4"
					},
				},
				delta:{
					"group":"displayExpand"
				},
                "value":`Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor. Et sollicitudin ac orci phasellus .`,
				"split":4,
				"text-align":"center",

            },

			{
				"key": "add",
				"type": "button",
				"value":"Add ",
				"next":"true",
				top:300,
				delta:{
					"group":"displayExpand",
					"type":"add",
					"by":"1"
				},
				options:{
					judima:{
						mobile:{
							top:200
						}
					}
				},
				"split": "3",
				"googleSheets": {},
			},
			{
				"key": "remove",
				"type": "button",
				"value":"Remove",
				top:300,
				delta:{
					"group":"displayExpand",
					"type":"remove",
					"by":"1"
				},
				"split": "3",
				"googleSheets": {},
			},
```




## types schema 
* since we cant use type we gunna have to use key as the type
    * title
    * input
        * email
        * phone
        * zipcode
        * drivers license
        * social security
        * date
    * textbox
    * bullet point
    * display
    * sub-heading
    * text
    * bold text
    * option  [option group]
    * textarea
    * button
    * file upload
    * signature
    * count 
        must be at first for multipleGroup key to enable functionality



keys
key is the css for devs, highlighter for editors
type represents the enum types schema above, there are no input-email, each entry goes as one word for types
value is the value you want the element to have

* group is for type = options
    represents the option group for a set of options you want the applicant to choose from

* nest  - when you want to place an element inside another, enum [A1:ZZ],notatton to represent which are children and which are parents
  nestUnder- the element to place the element in
  nestGroup - grouping name
	* to disable NestDirective make sure nestGroup is undefined

* count 
    group and type = options, limits the max options an user can can house to count
    say if u want top 3 choice, make count 3 and so on

* repeatable
    if the element is going to be used where there are several people and you need a value
    for each one 

* newline
    when your type === bullet point and you dont want text on the same line'

* required
    if the entry is required to be filled in the form


color, background-color,split top,left,width,height,font-size,font-family, [sheet title array]

* italics
    bold italic, 

* multipleGroup
    indicate to the framework that this is part of the elements to duplicate, 
    add and subtract buttons also needs but will not break the app

* hyperlink 
    used in anchor links, when to highlight text as a link to another website

* permission
    its agreed we need a more specific name but this is used when the website has to ask the end user if they can use cookies on their site

* [google sheet title array]
    this represent the corresponding value the form item is supposed to go into the sheet
    aggregate types
    * total: instead of give the value, take a count of all duplicates in the form
    * min,max,median,average , and it takes a group of data and find the value accordinlgly
    * sum : takes all values in the group and finds their sum 
    * count: means for each insitance of the field manifest as an entry it will be in a row group with 
    * source : if two fields in different spreadsheets are related such as applicant ID, and instead of referring to own values, use a value from the source subsheet indicated by the field
        // unclear if fields match in different subsheets if this will work
    others respective, in the same index, and if we have a situation 
        
    * monetary : turn value(s) to USD amount
    * include: concatenate all zChildren with the same field into on entry

    

    [][],
    [][][][],
    [][][][],
    [][][][],
    [][][][],
    [][][][],

    the old one out will give its last value to get the job done

    
    * datetime - gives MM/DD/YYYY . HH:MM:SS in military time
    // if date validation does not suffice, fix
    // for the guide, if the field keys are the same, its all over the entry is gone, do something about this
        // for now all fields needs to be differnt

## ToDo
* latch directives, we could have several type each can be a features of all included types this logic should refelct in latch directive or make your own directive

* navigation directive, right now simple navigation makes sure you can change the url
* think of ecommerce sites

### Stack


| tech stack | name  |
| :------------ |:---------------:| 
| cms         | cosmicjs | 
| e2e |  capybara| 
| unit |  capybara| 
| regression |  capybara|
| visual |  percy |  

### Variable files
* angular.json
* tsconfig.base.json
* template.component.ts
* template.component.html
* customExports.ts
* ryber.service.ts
* app.componennt.html
* app.component.ts
* backend/
* src/app/directive
* app.module.ts
* styles.css
* assets/
* environment.* 


### Resources

### Goals



### Issues
* for dynamic clean up you mainly wants to take care of things in clean up, what we did in the GNDC project saved us a ton but even for the dynamic elements in lifecycle hook 'done' instead of 'prepare' position doesnt always work, use the lifecycle hooks and place dynaimc code in the clean up block as you go from one media query to another ,
    * if you do cleanup in the block you only have to worry about position of lifecycle hook 'done', but u can debate this because position of lifecycle hook 'prepare' is still position
    * try to turn to repitition in position so devs can use the code more easily
    * the dynamic elements code in features and position are the same, try to turn into a cohesive fn
*  when the add and remove button are on the same line as the items to duplicates, the items to be moved dont know how to react properly this can be seen from movingKeep in desktop mediaQuery fix this
* you must keep all items that belong with nesting, filtered out of dynamicPosiiton
* multipleGroup Nesting should happen before top Level 

### Tasks


* environment should choose the website.ts file not angular.json
    * enviromnent.ts should be for dev,prod,staging, it should have options for website.ts but they are independent of their own prod,staging,dev
* make function do more responsively
    * stack should be able to handle several media queries by deciding if elements
    overlap with the given measure and continue to stack

* use symbol arrays so you can make yr functions more reusable/


* turn repeated code of dynamic code blocks to 1 liners
* any directive that uses element attr should have its name as its own prop, what if we have to change the attr but the element attr is requried to stay the same uh oh 

* textarea and input have form attribute specifiying the form element it belongs to. This is great learn about the HTMLform element , Angular Forms given the green light to add form element to template.html


* Renderer2 setStyle overrides, changing the css objects in zChild fix this 


* reach out to cosmicjs
    * explain how there should be custom types, so my editors can know what fields to fill out
    * explain how there should be a helper field for enums
    * explain how I should have to manually pick each object to make a change if I want to make a change across several I can do so easily

* follow up on the node that makes up the html element
    * display:table gives you the true height of the element as represented by nodes in the DOM
    * the text node represents the true height of text elements in the DOM







#### Misc
* in education talk about ryber update, 
    * talk about how spot allows you to insert an element you forgot into the right spot in the CO (h1,h2,h5)  h3 ???    array.splice(spot,0,h3) so you can keep accesbility and dont have to rewrite your code


#### Coding logic

* __accessing__ - when you a data type init. to be accessed such as a getting a list of subscriptions that belong to  a specific component use object:{array:[object:{}]}
* __categorizing__ - when a data type is used to populate and the data is being organized into fields, use an array:[objects]
* __navigation__ - navigation should be switch statements based on the __judima url__ (a combination of url and session data summarizing the user current state ) not the user session and url alone, however you cant see the judima url in the navbar
* __creating functions__ - if a variable is to be used only inside a function, leave define it in the fn, if it is to be used outside the function, pass it as an argument to the function and have its final result out side the function
* __Testing__
    * if items are added, the end user says no items, does the app react appropriately
    * are the correct amount of items  in data reflect the UI, remember to unsubscribe if items are taken out of the DOM



#### what we can do

* on navigation, if something happens to quickly to skip say a loading page, angular knows not to crash but recongize the skip in UI navigation and loading the page appropriate with the current state



#### Styling 
* [glassmorphism](https://www.youtube.com/watch?v=hv0rNxr1XXk)
* [clip path make shapes in css](https://www.youtube.com/watch?v=wfaDzSL6ll0)
* [bennett feely](https://bennettfeely.com/clippy/)
* passport js jwt
