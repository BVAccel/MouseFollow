export default function addElementToPage(element, options) {
  const containerQuery = options.container || 'body';
  const container = document.querySelector(containerQuery);
  container.append(element);
}