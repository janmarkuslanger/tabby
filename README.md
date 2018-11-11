# tabby
📂 Tabswitcher written in Vanilla JS without any dependencies.

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
    <div data-tabby-content="4">WOW
</div>

<script src="tabby.js"></script>
<script>

  const myTab = new Tabby.Component(document.querySelector('.tabs'), {
    onConstruct: function(component) {
      console.log(component)
    },
    // More hooks
    // ...
  });

</script>
```

## Tabby.Component(element, hooks)

Creates a new Tabby Component

- element needs to be an HTMLElement
- hooks needs to be an object and contains the hooks

## Tabby.version

Returns the new Tabby version.

## Hooks

This are the the function which are hooked in

- onConstruct(component)
- onBeforeKilltabs(component, activeBarElement, activeContentElement)
- onAfterKilltabs(component, activeBarElement, activeContentElement)
- onBeforeShowtabs(component, activeBarElement, activeContentElement)
- onAfterShowtabs(component, activeBarElement, activeContentElement)
- onBeforeInit(component)
- onAfterInit(component)

## Demo
<a href="https://janmarkuslanger.github.io/tabby/">Here</a> is a demo for you.

## Changelog
All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [Unreleased]

### [2.0.2] - 2018-11-11
### Remove
- remove `nodeToArray` function in index.js
- remove package `webpack-auto-inject-version`

### Changed
- package description
- main script to dist/tabby.js
- updated webpack.config.js

### Added
- npm scripts

### [2.0.1] - 2018-09-16
### Changed
- Update devDependencies

### Bugfix
- Tabs in Tabs didn´t work
- Tabby didnt work when Tabs did´t wok when no hooks was given
