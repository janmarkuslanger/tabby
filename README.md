# Tabby
## Lightweight and simple Vanilla JS Tabswitcher Plugin

---

## Install

### script

Just clone or download this repository and grab the files and put them into your HTML!
These files are living in the `dist` folder. Best way is to put the script files before the closing body.

``` html
...

<script src="/dist/tabby.umd.js"></script>
<script>

    // tabby init comes here

</script>

</body>

```

### npm

``` npm
$ npm i tabsjs-lib
```

## Example

## Options

Tabby comes with a few simple options.

### Option - animation

By default there are no animations in tabby but you can get some!

These are the animations that are currently available:

----- |
`fade` |

### Option - methods

Even when these are no options, i decides to put the lifecycle methods into the options to have a compact Object that
handles the optional behaviour of tabby. Every methods gets the whole tabby component as an argument.

These are the methods we got in tabby.

name                | description
--------------------|-----------
onConstruct         |
onBeforeKilltabs    |
onAfterKilltabs     |
onBeforeShowtabs    |
onAfterShowtabs     |
onBeforeInit        |
onAfterInit         |
