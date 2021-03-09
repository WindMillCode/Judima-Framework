# AngularTemplateProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

It is currrently at   [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-rc2

## Educational
* every other software stack on sevearl platforms the software is doing the same things
    * in web design this is not the case
    * the zChild and its framework was designed to boil down browsers with imperial force
        and make them all do the same thing

### The zChild 
* consider it the prophesized savior, its task is one to do the same thing no matter which 
    software is in the website, which OS ... whichever variables exist the zChild will be the same === sucess


### ryber.addAppScripts
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

### zChild properties
* quanity -what type of zChild it is
    * there are 4 types of zChild we will discuss static and dynamic, if you are a beginner you will quickly led down the rabbit hole of understanding the other two types
    (hint:one is quantum)
        * __static zChild__
            * its quanity value is 3
            * this type of zChild means its element is always on the DOM, it will meet the minium requirements
                * full cross-browser responsiveness
                * full modularity capability to interact with any given library,software,plugin, framework(non Angular framework)
        * __dynamic zChild__
            * its quantity value is 2
            * its element comes in and out of the DOM when its not needed its taken completly out of memory. you interact with  data , functions ,lifecycle hook on the entrance and exit of the dynamic zChild 
            * __NEVER REFERENCE DIRECTLY THESE zChildren BY USING THEIR SYMBOLS, ALWAYS WORK IN THE DELTANODE SYSTEM AND REFRENCE THEM IN TERMS OF THE ARRAY PROVIDE BY ITS DELTANODE GROUP

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

#### Features

* if a feature cannot be assoicated with an element place it on the component board, its an element that will always be present until we can find another type of angular directive 



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
* removed needed for dynamic element management block
    * by having controlled condtionals for deltaNode groups and treating the dynamics as part of the zChild by splitting them to the feature position moving logic, we achieve much
    * so the elements that would be considered moving,must be accomodating even if the dynamic elements are not there, we can accomodate this by using the prepare hook
    before the elements come on the DOM. If too difficult we'll take another look
* customExports
    *deltaNode
        * made a lifecycle hook 


### Issues
* for dynamic clean up you mainly wants to take care of things in clean up, what we did in the GNDC project saved us a ton but even for the dynamic elements in lifecycle hook 'done' instead of 'prepare' position doesnt always work, use the lifecycle hooks and place dynaimc code in the clean up block as you go from one media query to another ,
    * if you do cleanup in the block you only have to worry about position of lifecycle hook 'done', but u can debate this because position of lifecycle hook 'prepare' is still position
    * try to turn to repitition in position so devs can use the code more easily
    * the dynamic elements code in features and position are the same, try to turn into a cohesive fn
*  when the add and remove button are on the same line as the items to duplicates, the items to be moved dont know how to react properly this can be seen from movingKeep in desktop mediaQuery fix this
* you must keep all items that belong with nesting, filtered out of dynamicPosiiton
* multipleGroup Nesting should happen before top Level 

### Tasks

* when a click button is unsubscribed, it holds on so if the component is re-mounted, you get an unsubscribed error, and this reflects in the UI refusing to resize properly follow up

* environment should choose the website.ts file not angular.json
    * enviromnent.ts should be for dev,prod,staging, it should have options for website.ts but they are independent of their own prod,staging,dev
* make function do more responsively
    * stack should be able to handle several media queries by deciding if elements
    overlap with the given measure and continue to stack

* use symbol arrays so you can make yr functions more reusable/


* turn repeated code of dynamic code blocks to 1 liners
* any directive that uses element attr should have its name as its own prop, what if we have to change the attr but the element attr is requried to stay the same uh oh 

* textarea and input have form attribute specifiying the form element it belongs to. This is great learn about the HTMLform element , Angular Forms given the green light to add form element to template.html

* give your framework a name 
Judima
Jumida 

* Renderer2 setStyle overrides, changing the css objects in zChild fix this 
* give directives access to the zChildren 

* reach out to cosmicjs
    * explain how there should be custom types, so my editors can know what fields to fill out
    * explain how there should be a helper field for enums
    * explain how I should have to manually pick each object to make a change if I want to make a change across several I can do so easily

* follow up on the node that makes up the html element
    * display:table gives you the true height of the element as represented by nodes in the DOM
    * the text node represents the true height of text elements in the DOM

* form options type in inputHandle, always provide a count
  * no count is a broken setup, form submission is not done properly, however I see the need for the set,
find out what happens to the data and fix
    * provide access to the aux element, there you will find the true value, and during submission provide that result instead of the data types ( array, set) used to creaete the result




#### Misc
* in educational explain that if that the limit is 30 zSymbols and if you need more, increase the limit when you init the CO
* in education talk about ryber update, 
    * talk about how spot allows you to insert an element you forgot into the right spot in the CO (h1,h2,h5)  h3 ???    array.splice(spot,0,h3) so you can keep accesbility and dont have to rewrite your code


#### Coding logic

* __accessing__ - when you a data type init. to be accessed such as a getting a list of subscriptions that belong to  a specific component use object:{array:[object:{}]}
* __categorizing__ - when a data type is used to populate and the data is being organized into fields, use an array:[objects]
* __navigation__ - navigation should be switch statements based on the __judima url__ (a combination of url and session data summarizing the user current state ) not the user session and url alone, however you cant see the judima url in the navbar
* __Testing__
    * if items are added, the end user says no items, does the app react appropriately
    * are the correct amount of items  in data reflect the UI, remember to unsubscribe if items are taken out of the DOM



#### what we can do

* on navigation, if something happens to quickly to skip say a loading page, angular knows not to crash but recongize the skip in UI navigation and loading the page appropriate with the current state



#### Styling 
* vanilla-tilt.js
* [glassmorphism](https://www.youtube.com/watch?v=hv0rNxr1XXk)
*[clip path make shapes in css](https://www.youtube.com/watch?v=wfaDzSL6ll0)
* [bennett feely](https://bennettfeely.com/clippy/)
* passport js jwt
