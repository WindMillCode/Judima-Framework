# UNIT TESTS


## website.ts
* make sure next is only used if there is room to spare on the previous line

# E2E TESTS 

Make sure you can visit the webpage
Make sure the responsiveness is working 
Make sure them components dont overflow
Make sure panel borders realign properly on all mediaqueries


## Nesting

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

## Duplicates

* when the add and remove button are on the same line as the items to duplicates, the items to be moved dont know how to react properly this can be seen from movingKeep in desktop mediaQuery fix this
* only supports, when the add/remove buttons are not on the same line as the target 
	* we insert between last item that have 0 and first item that has 1
	* the items that get duplicated are the items that have 0
	* the top for each item that has only 0 is the top from the first item that has 1
	* items with  and 1 get replaced according to the mapping
	* items with 0 and 1 get replaced according
* on add one line group elements get duplicated and positioned properly
* on multi line group elements get duplicated properly
* on one line group around buttons elements get duplicated properly



|position|one line|multi line|
|:------|:------:|------:|
|before contols                                                            |         |       |            |
|around controls                                                           |         |       |            |
|after controls                                                            |         |       |            |
|before contols  with items before                                         |         |       |            |
|around controls    with items before                                      |         |       |            |
|after controls  with items before                                         |         |       |            |
|before contols  with items after                                          |         |       |            |
|around controls with items after                                          |         |       |            |
|after controls  with items after                                          |         |       |            |
|before controls with items in betwewen                                    |         |       |            |
|after controls with items in betwewen                                     |         |       |            |
|around controls with items in betwewen                                    |         |       |            |
|before controls with items in betwewen and before                         |         |       |            |
|before controls with items in betwewen and after                          |         |       |            |
|before controls with items in betwewen and around                         |         |       |            |
|after controls with items in betwewen and before                          |         |       |            |
|after controls with items in betwewen and after                           |         |       |            |
|after controls with items in betwewen and around                          |         |       |            |


duplicates with nesting

|a|b|c|
|:------|:------:|------:|
|2 or more deltas in same component inner            |         |       |            |
|2 or more deltas in same component outer            |         |       |            |
|2 or more deltas in same component in or out        |         |       |            |
* might just do random to table out the first table is exhausting

controls
|a|b|c|
|:------|:------:|------:|
|controls are not coupled standalone and can control from anywhere in the app  |         |       |            |
|several controls for an add/remove action  |         |       |            |
|disable buttons if pressed to quickly to prevent corruption|||
|hooks moved to "remove done" if there are no more elements to remove


duplicates with groups
|a|b|c|
|:------|:------:|------:|
|when we duplicate groups is there a uniqueness to indicate each duplicated group so they are not conflicting  |         |       |            |


removal 
|a|b|c|
|:------|:------:|------:|
|make sure the componentObject and zChild dont get ruined |         |       |            |
|for add remove button make sure increment is modified properly |         |       |            |
|make sure things are working|||




## Directives
* for each logic that requires several elements, have an id which indicates the element thats in control, then subscribe to the zChildrenSubject to gather ids from all the zChildren the directives  need to express the feature. the group should have its group id bearing the directive is used several times in the same component


## Components 
* do we need display table

### top level and formatting
* by default judima will format all top level zChildren in its components
* provide a flag, to ignore top level, this means that the elemnts might end up going in the div board
* provide a flag indicating the zChild should not get considered in formatting
* if a zChild is not top level it doesn't get formatted as of now, in the future the board will be the contating element, however its highly advised for the logic to have its own formatting scheme as it could break the judima app

* test that with several duplicateGroups things can  work in tandem
	* works at a basic level root out the specific causes

	* when outside_duplicates >= 2 && inside_duplicates >  outside_duplicates , app doesnt break because inputHandleModifyName does not snap. it snapped because it was not looking at the current group it was looking at all groups

	*  when outside_duplicates === 0 && inside_duplicates >  outside_duplicates
	it should not break the app on desktop

	

## Ryber
*  make sure every element can  get css and attribute support as defined by options in objects
* consider changing from key to class and having classes support _ in its name
* every zChild.extras needs 
	* appNest directive,
	* component
	* type
	* extend
	* multipleGroup
	* judima
* no zChildren contain function with refrences to external data or data types that do such
* use zSymbolNeeded ="true" to indicate that a directive needs its own zChild symbol

### judima object
* indicates to the judima framework how to specifcally deal with this element
* make sure you use formatIgnore to indicate to judima

### cms

* all cms transformations should conform to the standards provided in cms/website*.ts
### button

* should more directives go on button, on  just more zChildren for different features
* try to abstract all required logic to the directive 
