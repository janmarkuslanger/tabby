<h1 align="center">Tabby</h1>
<p align="center"><strong>Simple Tabswitcher written in Vanilla Javascript.</strong></p>

<p align="center"><img width="500" src="assets/tabby.png"</p>

---

<p align="center">
  <a class="badge-align" href="https://www.codacy.com/app/janmarkuslanger/tabby?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=janmarkuslanger/tabby&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/f3a3da60866f4d5a8a0f259e5300cd55"/></a>
  <img src="https://img.badgesize.io/janmarkuslanger/tabby/dist/tabby.js" >
</p>

**If you like it please give it a star ⭐️**

## npm

``` npm
npm i tabsjs-lib
```

## Setup

Include the tabs.js and tabs.css into your project.

``` html
<!-- into the <head> -->
<link rel="stylesheet" href="tabs.css">

<!-- before the closing body tag -->
<script src="tabby.js"></script>
```

## Markup

``` html
<div class="tabs">
  <div class="bar">
    <div data-tabby-bar="1" data-tabby-active>Tab 1</div>
    <div data-tabby-bar="car">Tab 2</div>
    <div data-tabby-bar="3">Tab 3</div>
    <div data-tabby-bar="4">Tab 4</div>
  </div>
  <div class="content">
    <div data-tabby-content="1" data-tabby-active>This is pretty cool, isn´t it?</div>
    <div data-tabby-content="car">just 34 lines of js and 6 lines of css</div>
    <div data-tabby-content="3">written in ES6</div>
    <div data-tabby-content="4">WOW</div>
  </div>
</div>

<script src="tabby.js"></script>
<script>

  const myTab = new Tabby.Component(document.querySelector('.tabs'), {
    onConstruct: function(component) {
      console.log(component)
    },
    // More usefull methods
    // ...
  });

</script>
```

## Tabby.Component(element, methods)

Creates a new Tabby Component:
-   element needs to be an HTMLElement
-   hooks needs to be an object and contains the hooks

## Tabby.version

Returns the new Tabby version.

## Methods

These are the methods which will be executed:
-   onConstruct(component)
-   onBeforeKilltabs(component, activeBarElement, activeContentElement)
-   onAfterKilltabs(component, activeBarElement, activeContentElement)
-   onBeforeShowtabs(component, activeBarElement, activeContentElement)
-   onAfterShowtabs(component, activeBarElement, activeContentElement)
-   onBeforeInit(component)
-   onAfterInit(component)

## Demo
<a href="https://janmarkuslanger.github.io/tabby/">Here</a> is a demo for you.
