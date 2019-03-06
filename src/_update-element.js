export default function updateElement(element, options) {
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