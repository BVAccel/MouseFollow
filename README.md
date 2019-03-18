MouseFollow.js
===

MouseFollow.js is a small JS library that adds an element to the page that follows the user's cursor.

**Table Of Contents**
- [Installation](#installation)
- [Setup](#setup)
- [Customization](#customization)
  - [List of Customizations](#list-of-customizations)
    - [Border Radius](#border-radius)
    - [Color](#color)
    - [Height](#height)
    - [Opacity](#opacity)
    - [Shape](#shape)

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
  shape: 'rectangle',
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
  container: 'body', // default
});

new MouseFollow({
  container: '.classname',
});

new MouseFollow({
  container: '[data-attribute]',
});
```

#### Height
This sets the height of the item. Is of type `Number`. Defaults to `50`.

Example values:

```javascript
new MouseFollow({
  height: 60,
});
```

#### Opacity
This sets the opacity of the item. Any number from 0 to 1. Defaults to `0.4`;

Example values:

```javascript
new MouseFollow({
  opacity: 0.4,
});
```

#### Shape
This sets the default shape of the item. There are two possible values: `circle` and `square`. The shape can still be manipulated with the width, height and borderRadius properties, but this option gives a quick starting point.

Example values:

```javascript
new MouseFollow({
  shape: 'circle', #default
});

new MouseFollow({
  shape: 'square',
});
```

#### Transition Delay

#### Transition Duration

#### Transition Timing Function

#### Width

## Example

To view an example locally, follow the steps below using your terminal:

1. Clone this repository `git clone https://github.com/BVAccel/MouseFollow.git`
2. Navigate into the repository `cd MouseFollow`
3. Open the example site in your browser `open example/index.html`
