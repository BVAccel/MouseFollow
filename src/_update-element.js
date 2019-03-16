export default function updateElement(element, options) {
  element.style.zIndex = 2147483647; // Highest possible z-index on 32-bit machines
  element.style.position = 'fixed';
  element.style.top = 0;
  element.style.left = 0;
  element.style.display = 'block';
  element.style.transform = 'translate(-50%, -50%)';
  element.style.pointerEvents = 'none';
  element.style.opacity = 0;

  // Editable options
  element.style.height = `${options.height}px`;
  element.style.width = `${options.width}px`;
  element.style.backgroundColor = options.color;
  element.style.transitionTimingFunction = options.transitionTimingFunction;
  element.style.transitionDuration = `${options.transitionDuration}ms`;
  element.style.transitionDelay = `${options.transitionDelay}ms`;

  if (!options.shape || options.shape.toLowerCase() !== 'circle' || options.shape.toLowerCase() !== 'square') {
    options.shape = 'circle';
  }

  if (options.shape.toLowerCase() === 'circle') {
    element.style.borderRadius = '50%';
  } else if (options.shape.toLowerCase() === 'square') {
    element.style.borderRadius = '0';
  }

  if (element.style.borderRadius) {
    element.style.borderRadius = options.borderRadius;
  }
}