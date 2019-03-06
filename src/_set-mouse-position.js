import setPosition from './_set-position.js';

export default function setMousePosition(event, element, options, parentObject) {
  parentObject.top = `${event.clientY}px`;
  parentObject.left = `${event.clientX}px`;

  setPosition(element, parentObject);

  if (element.style.opacity === '0') {
    element.style.opacity = options.opacity;
  }
}