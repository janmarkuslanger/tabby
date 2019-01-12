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

name | type
-----|----
animation | string or false
time | number
methods | object


### Option - animation

By default there are no animations in tabby but you can get some!
Currently the animations are running linear.

These are the animations that are currently available:

animation |
-----|
`fade` |

### Option - time

Describes how long the animation (if there is one) should be running.

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
