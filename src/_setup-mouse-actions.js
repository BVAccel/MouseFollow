import hideElement from './_hide-element.js';
import setMousePosition from './_set-mouse-position.js';
import showElement from './_show-element.js';

export default function setupMouseActions(action, element, options, parentObject) {
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