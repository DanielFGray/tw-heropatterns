# tw-heropatterns

[Tailwind CSS v4](https://tailwindcss.com) plugin for dynamically generating [heropatterns](http://heropatterns.com)

Only generates CSS for the patterns you actually use — no unused combinations.

## Install

```sh
npm install tailwindcss @danielfgray/tw-heropatterns
```

## Setup

Add the plugin to your CSS file:

```css
@import "tailwindcss";
@plugin "@danielfgray/tw-heropatterns";
```

## Usage

```
bgp-{patternName}-{color}/{opacity}
```

### Theme colors

```html
<div class="bgp-topography-blue-500">
<div class="bgp-topography-slate-700/50">
```

### Arbitrary colors

```html
<div class="bgp-hexagons-[#1a1a2e]">
<div class="bgp-hexagons-[#1a1a2e]/25">
```

Opacity is optional and defaults to `1`. The `/{opacity}` modifier uses a 0-100 scale (e.g. `/50` = 50% opacity).

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
