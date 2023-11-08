export const getDom = (val, onClickHandler) => {
  //  Format of domObjectTemplate = Parent HTML tag -> id? -> onHandlers? ->  Childrens[] -> Child-1 tag -> id? -> onHandlers? ... -> Child-n tag -> id? -> onHandlers?

  const updatedDom = {
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
          click: () => onClickHandler("+"),
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
          click: () => onClickHandler("-"),
        },
        style: {
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          padding: ".5rem",
          borderRadius: ".5rem",
        },
      },
    ],
  };
  return updatedDom;
};
