import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./feature/theme";

function ColorSelector() {
  const [color, setColor] = useState("brown");
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value)
        }
      }
      /><br /><br />
      <button onClick={() => dispatch(changeColor(color))}>Change color</button>
    </div>
  );
}

export default ColorSelector;
