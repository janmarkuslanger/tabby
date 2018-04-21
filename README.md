# tabsjs
📂 Minimalistic Vanilla JS Tabs written in ES6.

## Setup 

Include the tabs.js and tabs.css into your project. 

``` javascript
// into the <head>
<link rel="stylesheet" href="tabs.css">

// before the closing body tag 
<script src="tabs.js"></script>
```

## Usage

``` html

// wrap every container with a data-tabs 
<div data-tabs>

    <div class="bar">

      // every bar item needs a data-tabs-item with a unique value like "1" "car" "Product1"
      // data-tabs-active means that this item is active by default
      <div data-tabs-item="1" data-tabs-active>1</div>
      <div data-tabs-item="car">2</div>
      <div data-tabs-item="3">3</div>
      <div data-tabs-item="4">4</div>

    </div>


    <div class="content">

      // every content item needs a data-tabs-item with a unique value like "1" "car" "Product1"
      // data-tabs-active means that this item is active by default
      <div data-tabs-content="1" data-tabs-active>This is pretty cool, isn´t it?</div>
      <div data-tabs-content="car">just 37 lines of js and 6 lines of css</div>
      <div data-tabs-content="3">written in ES6</div>
      <div data-tabs-content="4">WOW</div>
    </div>


  </div>
```

Here is a <a href="https://janmarkuslanger.github.io/tabsjs/">demo</a>.


