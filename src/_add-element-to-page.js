export default function addElementToPage(element) {
  const body = document.querySelector('body');
  body.append(element);
}