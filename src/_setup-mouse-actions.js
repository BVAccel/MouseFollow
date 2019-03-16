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

  const container = options.container || 'body';
  const containerElements = document.querySelectorAll(container);

  if (action.toLowerCase() === 'remove') {
    Array.from(containerElements).map((element) => {
      element.removeEventListener('mousemove', wrappedSetMousePosition);
      element.removeEventListener('mouseenter', wrappedShowElement);
      element.removeEventListener('mouseleave', wrappedHideElement);
    });
  } else {
    Array.from(containerElements).map((element) => {
      element.addEventListener('mousemove', wrappedSetMousePosition);
      element.addEventListener('mouseenter', wrappedShowElement);
      element.addEventListener('mouseleave', wrappedHideElement);
    });
  }
}