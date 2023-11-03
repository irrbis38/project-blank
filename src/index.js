function component(text) {
  var el = document.createElement("H1");
  el.textContent = text;
  return el;
}

document.body.prepend(component("Webpack is begining"));

console.log("Hello");
