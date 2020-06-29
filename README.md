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



## ToDo

### Stack

### Resources

### Goals
* removed needed for dynamic element management block
    * by having controlled condtionals for deltaNode groups and treating the dynamics as part of the zChild by splitting them to the feature position moving logic, we achieve much
    * so the elements that would be considered moving,must be accomodating even if the dynamic elements are not there, we can accomodate this by using the prepare hook
    before the elements come on the DOM. If too difficult we'll take another look


### Issues
* for dynamic clean up you mainly wants to take care of things in clean up, what we did in the GNDC project saved us a ton but even for the dynamic elements in lifecycle hook 'done' instead of 'prepare' position doesnt always work, use the lifecycle hooks and place dynaimc code in the clean up block as you go from one media query to another ,
    * if you do cleanup in the block you only have to worry about position of lifecycle hook 'done', but u can debate this because position of lifecycle hook 'prepare' is still position
    * try to turn to repitition in position so devs can use the code more easily
    * the dynamic elements code in features and position are the same, try to turn into a cohesive fn

### Tasks
* make function do more responsively
    * stack should be able to handle several media queries by deciding if elements
    overlap with the given measure and continue to stack

* use symbol arrays so you can make yr functions more reusable/

* in deltaNode make group [0] the elements you have copied, makes life soo much easier
    or at least we need those symbols of the static elements, not having them is killing us

* turn repeated code of dynamic code blocks to 1 liners

* textarea and input have form attribute specifiying the form element it belongs to. This is great learn about the HTMLform element , Angular Forms given the green light to add form element to template.html

* give your framework a name 
Judima

Jumida 


#### Misc
* in educational explain that if that the limit is 30 zSymbols and if you need more, increase the limit when you init the CO
* in education talk about ryber update, 
    * talk about how spot allows you to insert an element you forgot into the right spot in the CO (h1,h2,h5)  h3 ???    array.splice(spot,0,h3) so you can keep accesbility and dont have to rewrite your code



