import React, { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";

// Using for help: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const generator = rough.generator();

function createElement(x1, y1, x2, y2) {
  const roughElement = generator.line(x1, y1, x2, y2);
  return { x1, y1, x2, y2, roughElement };
}

const DoodleCollab = () => {
  const [element, setElement] = useState([]);
  //to track while drawing
  const [draw, setDraw] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    //clear so it doesn't re-render over and over again
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    //go through all the elements
    element.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
    //re-reder elements everytime it's updated
  }, [element]);

  const handleMouseDown = (event) => {
    setDraw(true);
    const { clientX, clientY } = event;
    const element = createElement(clientX, clientY, clientX, clientY);
    //pishing elements into the array
    console.log(element);
    setElement((prevState) => [...prevState, element]);
  };

  const handleMouseMove = (event) => {
    //we want to track the mouse
    if (!draw) return;

    const { clientX, clientY } = event;
    //last element in the array
    const index = element.length - 1;
    const { x1, y1 } = element[index];
    //now we want to change the last two x and y coordinates
    const updatedElem = createElement(x1, y1, clientX, clientY);

    //now we update array
    const elemCop = [...element];
    elemCop[index] = updatedElem; //replacing it with the updated element
    setElement(elemCop);
  };

  const handleMouseUp = () => {
    setDraw(false);
  };

  return (
    <canvas
      id="canvas"
      style={{ backgroundColor: "white" }}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></canvas>
  );
};
export default DoodleCollab;
