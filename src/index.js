function component(text) {
  var el = document.createElement("H1");
  el.textContent = text;
  return el;
}

document.body.append(component("Webpack is begining"));
