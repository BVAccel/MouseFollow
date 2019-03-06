MouseFollow.js
===

MouseFollow.js is a small JS library that adds an elemen to the page that follows the user's cursor.

**Table Of Contents**
- [Installation](#installation)
- [Setup](#setup)
- [Customization](#customization)
  - [List of Customizations](#list-of-customizations)
    - [Border Radius](#border-radius)
    - [Color](#color)

## Installation
*This needs to be added to NPM before it can be properly documented*

## Setup
**NodeJS**

First the library needs to be included in the file that will be using it:

```javascript
// ES6 Modules
import MouseFollow from 'mouse-follow-js';

// Node Modules
const MouseFollow = require('mouse-follow-js');
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
  color: 'rgb(59, 99, 20),
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
This sets the shape of the item. There are two possible values `rectangle` and `ellipse`. Defaults to `ellipse`. If an invalid value is used, will default to `rectangle`.
