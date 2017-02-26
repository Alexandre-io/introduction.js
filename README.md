# introduction.js [![Build Status](https://travis-ci.org/Alexandre-io/introduction.js.svg)](https://travis-ci.org/Alexandre-io/introduction.js) [![Codacy Badge](https://api.codacy.com/project/badge/grade/b39eadeb3b9346bc85ba05e42e5f6739)](https://www.codacy.com/app/alexandre_io/introduction-js)

[![Greenkeeper badge](https://badges.greenkeeper.io/Alexandre-io/introduction.js.svg)](https://greenkeeper.io/)
Introductions for websites to guide step-by-step your users.

Was inspired from [intro.js](https://github.com/usablica/intro.js) and [angular-intro.js](https://github.com/mendhak/angular-intro.js)

## Usage

### Without framework

**1** - Include `introduction.min.js` and `introduction.min.css` in your page.

**2** - Add `data-intro` and `data-step` to your HTML elements. (cf. examples)

### With AngularJS
**1** - Include `introduction.min.js` and `introduction.min.css` in your page.

**2** - Include `introduction.js` into your angular.module.

**3** - Add directives `ng-intro-options` and `ng-intro-method` to your HTML elements in a controller. (cf. examples)

## Install
```javascript
    bower install introduction.js --save
````

## Native API

###introductionjs([targetElm])

Creating an introductionjs object.

**Parameters:**
 - targetElm : String (optional)
   Should be defined to start introduction for specific element, for example: `#intro-farm`.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs() //without selector, start introduction for whole page
introductionjs("#intro-farm") //start introduction for element id='intro-farm'
````

-----

###introductionjs.start()

Start the introduction for defined element(s).

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().start()
````
-----

###introductionjs.goToStep(step)

Go to specific step of introduction.

**Parameters:**
 - step : Number

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().goToStep(2).start(); //starts introduction from step 2
````

-----

###introductionjs.nextStep()

Go to next step of introduction.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().start().nextStep();
````

-----

###introductionjs.previousStep()

Go to previous step of introduction.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().goToStep(3).start().previousStep(); //starts introduction from step 2
````

-----

###introductionjs.exit()

Exit the introduction.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().exit()
````

-----

###introductionjs.setOption(option, value)

Set a single option to introductionjs object.

**Parameters:**
 - option : String
   Option key name.

 - value : String/Number
   Value of the option.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().setOption("skipLabel", "Exit");
````

----

###introductionjs.setOptions(options)

Set a group of options to the introductionjs object.

**Parameters:**
 - options : Object
   Object that contains option keys with values.

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().setOptions({ 'skipLabel': 'Exit', 'tooltipPosition': 'right' });
````

----

###introductionjs.refresh()

To refresh and order layers manually

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().refresh();
````

----


###introductionjs.oncomplete(providedCallback)

Set callback for when introduction completed.

**Parameters:**
 - providedCallback : Function

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().oncomplete(function() {
  alert("end of introduction");
});
````

-----

###introductionjs.onexit(providedCallback)

Set callback to exit of introduction. Exit also means pressing `ESC` key and clicking on the overlay layer by the user.

**Parameters:**
 - providedCallback : Function

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().onexit(function() {
  alert("exit of introduction");
});
````

-----

###introductionjs.onchange(providedCallback)

Set callback to change of each step of introduction. Given callback function will be called after completing each step.
The callback function receives the element of the new step as an argument.

**Parameters:**
 - providedCallback : Function

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().onchange(function(targetElement) {
  alert("new step");
});
````

-----

###introductionjs.onbeforechange(providedCallback)

Given callback function will be called before starting a new step of introduction. The callback function receives the element of the new step as an argument.

**Parameters:**
 - providedCallback : Function

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().onbeforechange(function(targetElement) {
  alert("before new step");
});
````

-----

###introductionjs.onafterchange(providedCallback)

Given callback function will be called after starting a new step of introduction. The callback function receives the element of the new step as an argument.

**Parameters:**
 - providedCallback : Function

**Returns:**
 - introductionjs object.

**Example:**
```javascript
introductionjs().onafterchange(function(targetElement) {
  alert("after new step");
});
````

-----
###Attributes:
 - `data-intro`: The tooltip text of step
 - `data-step`: Optionally define the number (priority) of step
 - `data-tooltipClass`: Optionally define a CSS class for tooltip
 - `data-highlightClass`: Optionally append a CSS class to the helperLayer
 - `data-position`: Optionally define the position of tooltip, `top`, `left`, `right`, `bottom`, `bottom-left-aligned` (same as 'bottom'), 'bottom-middle-aligned' and 'bottom-right-aligned'. Default is `bottom`

###Options:

 - `steps`: For defining steps using JSON configuration
 - `nextLabel`: Next button label
 - `prevLabel`: Previous button label
 - `skipLabel`: Skip button label
 - `doneLabel`: Done button label
 - `tooltipPosition`: Default tooltip position
 - `tooltipClass`: Adding CSS class to all tooltips
 - `highlightClass`: Additional CSS class for the helperLayer
 - `exitOnEsc`: Exit introduction when pressing Escape button, `true` or `false`
 - `exitOnOverlayClick`: Exit introduction when clicking on overlay layer, `true` or `false`
 - `showStepNumbers`: Show steps number in the red circle or not, `true` or `false`
 - `keyboardNavigation`: Navigating with keyboard or not, `true` or `false`
 - `showButtons`: Show introduction navigation buttons or not, `true` or `false`
 - `showSkipButton`: Show skip button or not, `true` or `false` 
 - `showBullets`: Show introduction bullets or not, `true` or `false`
 - `showProgress`: Show introduction progress or not, `true` or `false`
 - `showArrow`: Show arrow to dialog or not, `true` or `false`
 - `scrollToElement`: Auto scroll to highlighted element if it's outside of viewport, `true` or `false`
 - `overlayOpacity`: Adjust the overlay opacity, `Number`
 - `disableInteraction`: Disable an interaction inside element or not, `true` or `false`
 - `swipeNavigation`: Navigating with swipe or not, `true` or `false`
 - `swipeSensibility`: Swipe sensibility

-----

## Angular API
`ng-intro-options="IntroOptions"`

You should create a `$scope.IntroOptions` in your controller which contains the introduction.js options. This also allows you to modify the options as part of your controller behavior if necessary.  You don't have to use `IntroOptions`, you can specify some other name. 

### Start method

`ng-intro-method="CallMe"` 

The directive will create a method on `$scope.CallMe` so that you can invoke it yourself later.  Make sure the there isn't a method `CallMe` already in your controller. To use the method be sure to wrap it with `$timeout`. You don't have to use `CallMe`, you can specify some other name.

### Call the start method

You can invoke it from an event such a click, 

`ng-click="CallMe();"` 

as long as you are still in the same controller scope.  You can also specify a step number in the method call, `CallMe(3);`.

You can start the intro from code, either call `$scope.CallMe();`.  If the `$scope.CallMe();` doesn't work, it might be because your DOM isn't ready. Put it in a `$timeout`.

### Autostart

If you set `ng-intro-autostart="true"`, the intro will start as soon as the directive is ready. 

### Autorefresh

If an intro tour includes dynamic content, use `ng-intro-autorefresh="true"` to call introduction.js' refresh method.

### Callbacks

Introduction.js provides several callbacks.  You can receive these callbacks in your controller.  For example, for the `onchange` event, specify the function name in the directive. 

`ng-intro-onchange="ChangeEvent"`

In your controller, create `ChangeEvent`

    $scope.ChangeEvent = function (targetElement, scope) {
        console.log("Change Event called");
        console.log(targetElement); //The target element
        console.log(this); //The introductionjs object
    };

The other introduction.js callbacks you can specify are `ng-intro-oncomplete`, `ng-intro-onexit`, `ng-intro-onchange` `ng-intro-onbeforechange` and `ng-intro-onafterchange`.

### Exit Method

`ng-intro-exit-method="ExitMe"`

Then in your controller, you can force exit using

`$scope.ExitMe(function() { //callback } );`


## Tests
```javascript
    npm test
````

## Build
```javascript
    grunt build
````