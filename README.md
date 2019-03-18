MouseFollow.js
===

MouseFollow.js is a small JS library that adds an element to the page that follows the user's cursor.

**Table Of Contents**
- [Installation](#installation)
  -[HTML](#html)
  -[NPM](#npm)
- [Setup](#setup)
- [Customization](#customization)
  - [List of Customizations](#list-of-customizations)
    - [Border Radius](#border-radius)
    - [Color](#color)
    - [Container](#container)
    - [Height](#height)
    - [Opacity](#opacity)
    - [Shape](#shape)
    - [Transition Delay](#transition-delay)
    - [Transition Duration](#transition-duration)
    - [Transition Timing Function](#transition-timing-function)
    - [Width](#width)
  -[Updating](#updating)
  -[Uninitializing](#uninitializating)

## Installation

There are multiple ways to use this in a project.

### HTML

The simplest way is to open the /dist folder, copy mousefollow.js into the project and link to it in your HTML.

```html
<body>

  <script src="mousefollow.min.js"></script>
  <script src="app.js"></script>
</body>
```

### NPM

When using NPM, the package must first be pulled from the registry:

```shell
#yarn
yarn add @bva/mouse-follow-js

#npm
npm install @bva/mouse-follow-js
```

One done here, follow the instructions in [setup](#setup).

## Setup
**NodeJS**

First the library needs to be included in the file that will be using it:

```javascript
// ES6 Modules
import MouseFollow from '@bva/mouse-follow-js';

// Node Modules
const MouseFollow = require('@bva/mouse-follow-js');
```

Once it is included in the file, a MouseFollow instance needs to be created and initialized:

```javascript
const mf = new MouseFollow();
mf.initialize();
```

That's it. Now there should be a circle following the user's cursor. See below for customization options.

## Customization
The default behavior of MouseFollow is nice, but customization is needed for a more unique and on-brand experience. The `MouseFollow` constructure can accept an option configuration object. An example would look like:

```javascript
const options = {
  height: 40,
  shape: 'square',
  width: 30
};

const mf = new MouseFollow(options);
mf.initialize();
```

The above will add a 30x40px rectangle that will only follow the cursor when within the body.

### List of Customizations

#### Border Radius
*Only used if shape is ellipse*
This is a string value and can be filled in with any valid CSS value. Defaults to `50%`.

Example values:

```javascript
new MouseFollow({
  borderRadius: '25%',
});

new MouseFollow({
  borderRadius: '50% 25%',
});

new MouseFollow({
  borderRadius: '30px',
});
```

#### Color
This sets the background color of the item. Can be any vallid CSS color value. Defaults to `#000`.

Example values:

```javascript
new MouseFollow({
  color: '#ff0000',
});

new MouseFollow({
  color: 'rebeccapurple',
});

new MouseFollow({
  color: rgb(59, 99, 20),
});
```

#### Container
This sets the element that will contain the MouseFollow item.

Example values:

```javascript
new MouseFollow({
  container: 'body', // Default
});

new MouseFollow({
  container: '.classname',
});

new MouseFollow({
  container: '[data-attribute]',
});
```

#### Height
This sets the height of the item. Is of type `Number`.

Example values:

```javascript
new MouseFollow({
  height: 50, // Default
});
```

#### Opacity
This sets the opacity of the item. Any number from 0 to 1.

Example values:

```javascript
new MouseFollow({
  opacity: 0.4, // Default
});
```

#### Shape
This sets the default shape of the item. There are two possible values: `circle` and `square`. The shape can still be manipulated with the width, height and borderRadius properties, but this option gives a quick starting point.

Example values:

```javascript
new MouseFollow({
  shape: 'circle', // Default
});

new MouseFollow({
  shape: 'square',
});
```

#### Transition Delay
This changes the delay of the item following the cursor. Takes a value of Number.

Example values:

```javascript
new MouseFollow({
  transitionDelay: 5, // Default
});
```

#### Transition Duration

This sets the CSS transition duration on the item following the cursor. Takes values of type Number and is measured in milliseconds. A value of 1000 would mean 1 second.

Example values:

```javascript
new MouseFollow({
  transitionDuration: 200, // Default
});
```

#### Transition Timing Function
This sets the CSS transition timing function. Takes any valid timing function.

Example values:

```javascript
new MouseFollow({
  transitionTimingFunction: 'ease-out', // Default
});

new MouseFollow({
  transitionTimingFunction: 'ease-in-out',
});

new MouseFollow({
  transitionTimingFunction: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
});
```

#### Width
This sets the width set in pixels. Takes a value of type Number.

Example values:

```javascript
new MouseFollow({
  width: 50, // Default
});
```

### Updating
It is also possible to update a MouseFollow instance at any point using `.update()` on the instance object. It accepts a configuration object with the same options as above, but it only needs the options that are changing.

Example:

```javascript
const mf = new MouseFollow({
  color: '#684c85',
  container: '.element',
});

mf.initialize();

const element = docuemnt.querySelector('.element');
element.addEventListener('click', (event) => {
  mf.update({
    color: '#ff9c11',
  });
});
```

### Uninitializing
If the MouseFollow instance needs to be uninitialized for any reason, use the `.uninitialize()`.

Example:

```javascript
const mf = new MouseFollow({
  color: '#684c85',
  container: '.element',
});

mf.initialize();

const element = docuemnt.querySelector('.element');
element.addEventListener('click', (event) => {
  mf.uninitialize()
});
```
