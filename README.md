# Tabby

Lightweight and simple Vanilla JS Tab Switcher Plugin

<p align="center"><img width="550" src="assets/tabby.png" alt="Tab Switcher Demo"></p>

<p align="center">
    <img src="https://badge.fury.io/js/tabsjs-lib.svg" />
    <img src="https://img.shields.io/github/size/janmarkuslanger/tabby/dist/tabby.iife.js.svg">
</p>

---

## Need help?

If you need some help to get started of have an issue?
Create an issue or write me jan-markus@gmx.de

## Install

### npm

``` npm
$ npm i tabsjs-lib
```

``` javascript

const Tabby = require('tabsjs-lib');
Tabby.init();

```

### script

Install tabby is quit simple. Create the simple markup and include the script. Then you are ready to go!

### Markup

Tabby works with data attributes, so we need to use three different data attributes here.

attribute | description
----------|-----------
data-tabby | the container wraps your tabs
data-tabby-bar | bar that needs a value which links to the content
data-tabby-content | content part that needs a value which links to the bar


Here is a very simple markup

<sub>The bar and content elements needs to be siblings</sub>

``` html
<div data-tabby>

    <div class="bars">
        <div data-tabby-bar="1">Bar one</div>
        <div data-tabby-bar="2">Another bar</div>
    </div>

    <div class="content">
        <div data-tabby-content="1">Content one</div>
        <div data-tabby-content="2">Content two</div>
    </div>

</div>

<script src="<path_to_file>/tabby.iife.js"></script>
<script>
    Tabby.init();
</script>

```

## Example

## Animations

By default tabby switches the tabs with a nice fade effect. If you do not like animations you need to init Tabby like this.

``` html
<script>
    Tabby.init({
        animation: false
    });
</script>
```

In the future we will have more animations.

animation | description
-----|-----
`false` | no animation
`"fade"` | default

## <a href="https://janmarkuslanger.github.io/tabby/">Demo</a>
