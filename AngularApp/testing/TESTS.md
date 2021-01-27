# UNIT TESTS


    ryberUpdate
    
    make sure if the CO doesnt exist generate a new CO
    make sure if the signature is not set to "" to leave it alone if the option is undefined
    make sure bools got to the right index and if there is no bool or an invalid bool return p
    make sure quanitiy is pushed and gets a value of 3
    make sure different CO get handled the way they are supposed to
    dont have the dev use this to get the ryber
    update the formCO so the dev does not have to do it
        but for route control the dev might have to do it, its not every sencod
        the dev is adding a CO
    make sure for css there is an object with z-index 3 provided if creds are not met
    make sure that the right generator is used to added the symbol for the zChild

# E2E TESTS 

Make sure you can visit the webpage
Make sure the responsiveness is working 
Make sure them components dont overflow
Make sure panel borders realign properly on all mediaqueries


# Nesting

* refer to  [here](C:\Users\oluod\My_Notebook\Google\API\bigquery\AngularApp\testing\e2e)
* make sure that elements can go inside one another
* make sure that elements get added and removed in their flex container
* make sure  add/remove button outside the flex container can contain whats going on inside the flex container
* make sure on adding subtracting, functionality is preseved,
* ablility to add non copied elements to the dom
* things work in tandem
* formmatting for multipleGroup top leve zChild and nested might not be supported, avoid having nested and top level in the same multipleGroup


* when items are added in multiple Group and they have an item inside another, make sure only the proper items are properly duplicated
* latching items, should be positioned as intented and contain items as intended, mabye not going along with the formatting from component.ts
    * toggle, 
    * move with targetzChild
    * populate like nest    
    * make sure board moves if nest extends the page, and collaspes if necessary
    * multiple should be supported

* when items are added in multpleGroup make sure moving is properly done, sending the right data to dynamicPosition
* multipleGroup inside does not disrupt mutlipleGroup outside

# Duplicates

* when the add and remove button are on the same line as the items to duplicates, the items to be moved dont know how to react properly this can be seen from movingKeep in desktop mediaQuery fix this

# Directives
* for each logic that requires several elements, have an id which indicates the element thats in control, then subscribe to the zChildrenSub=ject to gather ids from all the zChildren the directives  need to express the feature. the group should have its group id bearing the directive is used several times in the same component


# Components 
* do we need display table

# Ryber
*  make sure every element can  get css and attribute support as defined by options in objects
* consider changing from key to class and having classes support _ in its name
* every zChild.extras needs 
	* appNest directive,
	* component
	* type
	* extend
	* multipleGroup
* no zChildren contain function with refrences to external data or data types that do such
* use zSymbolNeeded ="true" to indicate that a directive needs its own zChild symbol

## judima object
* indicates to the judima framework how to specifcally deal with this element
* make sure you use formatIgnore to indicate to judima

## cms

* all cms transformations should conform to the standards provided in cms/website*.ts
## button

* should more directives go on button, on  just more zChildren for different features
* try to abstract all required logic to the directive 
