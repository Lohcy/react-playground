function customRender(reactElement, container) {
  /* static code
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */
  // dynamic code structure
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "google.com",
    target: "_bank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
