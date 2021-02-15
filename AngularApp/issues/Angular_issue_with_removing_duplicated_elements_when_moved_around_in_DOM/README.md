# Error Report


####  Angular issue with removing duplicated elements when moved around in DOM

## Questions

Please fill out answers to these questions, it'll help us figure out
why things are going wrong.

- **What did you do?**

* I hit the remove button in  my custom made dropdown
this dropdown is not
```html
<select>
	<options></options>
	<options></options>
	<options></options>
</select>
```
it's
```html
<div>
	<a>Select Item</a>
	<a>1</a>
	<a>2...</a>
</div>
```
* the orgignal element was ```<a>Select Item</a>``` and directives were use to create the dropdown feature
* I hit the remove button to remove the element and an ngOnDestroy would fire to remove the additional elements that achieved its dropdown feature in ngOnInit


- **What did you expect to happen?**

* I expected the element and its auxillary to be removed from the DOM
* The news has been right the learning curve is getting ridiculous for Angular, beginners and advanced should be told at face value what Angular is all about I am a strong supporter for Angular, and I cannot tolerate React to its core, but this is a sad fact I now had 1 rant over Angular. I learned in ngOnDestroy you had to get @ViewChildren.changes, if you want to modify the DOM tree, observable.subscribe has a next,error,complete, which you can take advantage of in subjects, ChangeDetection.onPush should be the default strategy as its running all the time. Angular has been getting irrelevant it its features, which builds on itself in complexion while going nowhere

- **What happened instead?**

* the DOM threw an error claiming the angular code was trying  to
```
parent.insertBefore('comment','dropdown-container')
```
* the dropdown-container IS NOT a direct child of parent which is the component element 

- **Have you tried any solutions posted on similar issues in our issue tracker, stack overflow, or google?**

* I've tried many manipulations of renderer2, ChangeDetectorRef, 
* I would love to flip the couse and call ngOnDestroy then remove the element but thats not how Angular works, besides it gets called again and even though it changes the reference to null, when talking about scaling and future Angular version this is not the way to go


![](https://github.com/MichaelOdumosu57/Judima-Framework/blob/master/AngularApp/issues/Angular_issue_with_removing_duplicated_elements_when_moved_around_in_DOM/zoom_0.gif?raw=true)
<img src="https://github.com/MichaelOdumosu57/Judima-Framework/blob/master/AngularApp/issues/Angular_issue_with_removing_duplicated_elements_when_moved_around_in_DOM/zoom_0.gif?raw=true" width="40" height="40" />


## Backtrace

```
core.js:6150 ERROR DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
    at DefaultDomRenderer2.insertBefore (http://localhost:8000/vendor.js:124979:16)
    at nativeInsertBefore (http://localhost:8000/vendor.js:91073:14)
    at applyToElementOrContainer (http://localhost:8000/vendor.js:90504:7)
    at applyNodes (http://localhost:8000/vendor.js:91389:11)
    at applyNodes (http://localhost:8000/vendor.js:91366:13)
    at applyView (http://localhost:8000/vendor.js:91398:3)
    at addViewToContainer (http://localhost:8000/vendor.js:90596:3)
    at ViewContainerRef.insert (http://localhost:8000/vendor.js:109890:9)
    at ViewContainerRef.createEmbeddedView (http://localhost:8000/vendor.js:109827:12)
    at http://localhost:8000/vendor.js:140230:45

core.js:6150 ERROR TypeError: Cannot read property 'context' of null
    at NgForOf._applyChanges (ng_for_of.ts:255)
    at NgForOf.ngDoCheck (ng_for_of.ts:220)
    at callHook (core.js:2525)
    at callHooks (core.js:2492)
    at executeCheckHooks (core.js:2424)
    at refreshView (core.js:9416)
    at refreshEmbeddedViews (core.js:10527)
    at refreshView (core.js:9431)
    at detectChangesInternal (core.js:10755)
    at ViewRef.detectChanges (core.js:22750)

core.js:6150 ERROR DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
    at DefaultDomRenderer2.insertBefore (http://localhost:8000/vendor.js:124979:16)
    at nativeInsertBefore (http://localhost:8000/vendor.js:91073:14)
    at applyToElementOrContainer (http://localhost:8000/vendor.js:90504:7)
    at applyNodes (http://localhost:8000/vendor.js:91389:11)
    at applyNodes (http://localhost:8000/vendor.js:91366:13)
    at applyView (http://localhost:8000/vendor.js:91398:3)
    at addViewToContainer (http://localhost:8000/vendor.js:90596:3)
    at ViewContainerRef.insert (http://localhost:8000/vendor.js:109890:9)
    at ViewContainerRef.createEmbeddedView (http://localhost:8000/vendor.js:109827:12)
    at http://localhost:8000/vendor.js:140230:45

ERROR TypeError: Cannot read property 'context' of null
    at NgForOf._applyChanges (ng_for_of.ts:255)
    at NgForOf.ngDoCheck (ng_for_of.ts:220)
    at callHook (core.js:2525)
    at callHooks (core.js:2492)
    at executeCheckHooks (core.js:2424)
    at refreshView (core.js:9416)
    at refreshEmbeddedViews (core.js:10527)
    at refreshView (core.js:9431)
    at detectChangesInternal (core.js:10755)
    at ViewRef.detectChanges (core.js:22750)		
```

## Environment

* OS
```
os: Microsoft Windows 10 Pro
text editor : Microsoft VS Code 1.53.0
node : 14.15.4
```

* package.json
```json
{
  "name": "angular-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~11.2.0",
    "@angular/common": "~11.2.0",
    "@angular/compiler": "~11.2.0",
    "@angular/core": "~11.2.0",
    "@angular/forms": "~11.2.0",
    "@angular/platform-browser": "~11.2.0",
    "@angular/platform-browser-dynamic": "~11.2.0",
    "@angular/router": "~11.2.0",
    "@deck.gl/core": "^8.4.1",
    "@deck.gl/google-maps": "^8.4.1",
    "@deck.gl/layers": "^8.4.1",
    "ag-grid-angular": "^25.0.1",
    "ag-grid-community": "^25.0.1",
    "angular-hammer": "^2.2.0",
    "rxjs": "~6.6.0",
    "socket.io": "^2.4.1",
    "tslib": "^2.1.0",
    "zone.js": "~0.10.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1102.0",
    "@angular/cli": "~11.2.0",
    "@angular/compiler-cli": "~11.2.0",
    "@types/node": "^12.19.16",
    "codelyzer": "^6.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~4.0.2"
  }
}
```


### Additional 

* Apparently it replaces removed nodes with comments (since *ngFor will incorrectly mount directives to other elements if you try to to splice) and here since the dropdown is moved inside another element, a faulty bug appears. 
