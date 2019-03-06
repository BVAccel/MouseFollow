/**
 * MouseFollow.js
 */

const assign = require('lodash').assign;

const defaultOptions = {
  borderRadius: '50%',
  color: '#000', // Can be any valid CSS color
  height: 50,
  opacity: 0.4,
  shape: 'ellipse', // Defines the shape
  transitionDelay: 5,
  transitionDuration: 200,
  transitionTimingFunction: 'ease-out',
  width: 50,
};

function MouseFollow(userOptions) {
  this.options = assign(defaultOptions, userOptions);
  this.element = document.createElement('span');
  this.top = null;
  this.left = null;
}

// Private
function updateElement(element, options) {
  element.style.height = `${options.height}px`;
  element.style.width = `${options.width}px`;
  element.style.backgroundColor = options.color;
  element.style.opacity = options.opacity;
  element.style.transitionTimingFunction = options.transitionTimingFunction;
  element.style.transitionDuration = `${options.transitionDuration}ms`;
  element.style.transitionDelay = `${options.transitionDelay}ms`;

  // Non editable options (within options)
  element.style.zIndex = 2147483647; // Highest possible z-index on 32-bit machines
  element.style.position = 'fixed';
  element.style.top = 0;
  element.style.left = 0;
  element.style.display = 'block';
  element.style.transform = 'translate(-50%, -50%)';
  element.style.pointerEvents = 'none';

  if (options.shape.toLowerCase() === 'ellipse') {
    element.style.borderRadius = options.borderRadius;
  }
}

function setMousePosition(event, element, options, parentObject) {
  parentObject.top = `${event.clientY}px`;
  parentObject.left = `${event.clientX}px`;

  setPosition(element, parentObject);

  if (element.style.opacity === '0') {
    element.style.opacity = options.opacity;
  }
}

function hideElement(element) {
  element.style.opacity = 0;
}

function showElement(element, options) {
  element.style.opacity = options.opacity;
}

function setupMouseActions(action, element, options, parentObject) {
  function wrappedSetMousePosition(event) {
    setMousePosition(event, element, options, parentObject);
  }

  function wrappedHideElement() {
    hideElement(element);
  }

  function wrappedShowElement() {
    showElement(element, options);
  }

  if (action.toLowerCase() === 'remove') {
    document.removeEventListener('mousemove', wrappedSetMousePosition);
    document.removeEventListener('mouseenter', wrappedShowElement);
    document.removeEventListener('mouseleave', wrappedHideElement);
  } else {
    document.addEventListener('mousemove', wrappedSetMousePosition);
    document.addEventListener('mouseenter', wrappedShowElement);
    document.addEventListener('mouseleave', wrappedHideElement);
  }
}

function addElementToPage(element) {
  const body = document.querySelector('body');
  body.append(element);
}

function removeElementFromPage(element) {
  element.remove();
}

function setPosition(element, parentObject) {
  element.style.top = parentObject.top;
  element.style.left = parentObject.left;
}

// Public
MouseFollow.prototype.initialize = function initialize() {
  updateElement(this.element, this.options);
  setupMouseActions('add', this.element, this.options, this);
  addElementToPage(this.element, this.options);
};

MouseFollow.prototype.update = function update(options) {
  updateElement(this.element, options);
};

MouseFollow.prototype.uninitialize = function uninitialize() {
  removeElementFromPage(this.element);
  setupMouseActions('remove');
};

if (window && !window.MouseFollow) {
  window.MouseFollow = MouseFollow;
}

export default MouseFollow;
