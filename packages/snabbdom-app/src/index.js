import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
import { getTemplate } from "./helpers/GetTemplate";
import { getDom } from "./helpers/GetDoms";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

let val = 0;
const container = document.getElementById("root");
let lastNode = null; //Keeps track of the last node

//  Format of domObjectTemplate = Parent HTML tag -> id? -> onHandlers? ->  Childrens[] -> Child-1 tag -> id? -> onHandlers? ... -> Child-n tag -> id? -> onHandlers?
const dom = {
  parentNode: {
    tagWithId: "div#root",
    style: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      rowGap: ".5rem",
      alignItems: "center",
    },
  },
  childNodes: [
    {
      tagWithId: "h1",
      text: val,
      style: {
        color: "red",
      },
    },
    {
      tagWithId: "button",
      text: "Increase",
      onHandler: {
        click: (e) => {
          val = val + 1;
          const newSnabbNode = getTemplate(
            getDom(val, (sign) => onButtonClickHandler(sign))
          );

          lastNode = patch(vnode, newSnabbNode);
        },
      },
      style: {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        cursor: "pointer",
        padding: ".5rem",
        borderRadius: ".5rem",
      },
    },
    {
      tagWithId: "button",
      text: "Decrease",
      onHandler: {
        click: (e) => {
          val = val - 1;
          const newSnabbNode = getTemplate(
            getDom(val, (sign) => onButtonClickHandler(sign))
          );

          lastNode = patch(vnode, newSnabbNode);
        },
      },
      style: {
        backgroundColor: "black",
        border: "none",
        color: "white",
        cursor: "pointer",
        padding: ".5rem",
        borderRadius: ".5rem",
      },
    },
  ],
};

const vnode = getTemplate(dom);
lastNode = patch(container, vnode);

const onButtonClickHandler = (sign) => {
  const minValue = 0;

// Use a conditional statement to decrement `val` only if it's greater than or equal to `minValue`
if (sign === "+" || val > minValue) {
  val = sign === "+" ? val + 1 : val - 1;
}
  const newSnabbNode = getTemplate(getDom(val, onButtonClickHandler));

  lastNode = patch(lastNode, newSnabbNode);
};
