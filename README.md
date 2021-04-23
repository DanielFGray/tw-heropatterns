# tailwind-heropatterns

[tailwindcss](https://tailwindcss.com) plugin for dynamically generating [heropatterns](http://heropatterns.com)

> [currently](https://github.com/DanielFGray/tailwind-heropatterns/issues/1) there's no npm packages available to install

## Why?

* **[heropatterns](http://heropatterns.com)** created by Steve Schoeger is a dynamic web app which allows the user to interactively pick the colors for a pattern and then copy/paste into their project. It's fantastic, but opening up the browser and picking the colors and opacity isn't as nice as just writing a CSS class.
* **[tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns)** is a Tailwind plugin that lets you define specific heropatterns and colors in a Tailwind config file and then generates all the possible combinations you could use, later to be purged but will still be added to the stylesheet and parsed by the browser during development, and bigger CSS files start to slow down browser development tools.

This plugin leverages the new experimental JIT engine in Tailwind to only generate the patterns with the given opacity and color that you use in your classes, without generating unused combinations.

## Install

If you don't have a `tailwind.config.js` file, generate one with:

```sh
npx tailwind init
# or
yarn tailwind init
```

Enable the JIT mode and add the plugin to the list:

```js
module.exports = {
  mode: "jit",
  purge: [...], // purge is required for jit to work
  plugins: [
    //...
    require("@danielfgray/tw-heropatterns"),
  ]
}
```

## Usage

```
bgp-[pattern]-[opacity]-[color]
```

for example
```html
<div class="bg-gray-900 bgp-topography-.5-gray-700">
```

## Design Limitations

Ideally I wanted to leverage Tailwind's `bg-opacity` feature instead of having an extra variable in the class, but due to the nature of the patterns being URL-encoded SVGs, the generated URL string has no mechanism reference the css variable, and there is no way to access the list of "sibling classes" at compile time that I know of.

## Patterns

All of the patterns in [heropatterns](http://heropatterns.com) should be available in this plugin in camelCased form:

* anchorsAway
* architect
* autumn
* aztec
* bamboo
* bankNote
* bathroomFloor
* bevelCircle
* boxes
* brickWall
* bubbles
* cage
* charlieBrown
* churchOnSunday
* circlesAndSquares
* circuitBoard
* connections
* corkScrew
* current
* curtain
* cutout
* deathStar
* diagonalLines
* diagonalStripes
* dominos
* endlessClouds
* eyes
* fallingTriangles
* fancyRectangles
* flippedDiamonds
* floatingCogs
* floorTile
* formalInvitation
* fourPointStars
* glamorous
* graphPaper
* groovy
* happyIntersection
* heavyRain
* hexagons
* hideout
* houndstooth
* iLikeFood
* intersectingCircles
* jigsaw
* jupiter
* kiwi
* leaf
* linesInMotion
* lips
* lisbon
* melt
* moroccan
* morphingDiamonds
* overcast
* overlappingCircles
* overlappingDiamonds
* overlappingHexagons
* parkayFloor
* pianoMan
* pieFactory
* pixelDots
* plus
* polkaDots
* rails
* rain
* randomShapes
* roundedPlusConnected
* signal
* skulls
* slantedStars
* squares
* squaresInSquares
* stampCollection
* steelBeams
* stripes
* temple
* texture
* ticTacToe
* tinyCheckers
* topography
* volcanoLamp
* wallpaper
* wiggle
* xEquals
* yyy
* zigZag
