
import React, { useEffect, useRef, useState } from "react";

const Box = ({ item, handleChange, disabled1 }) => {
  const [display, setDisplay] = useState(false);
  const timerRef= useRef(null)

  const handleDisplay = () => {
    if(disabled1 == true){
        clearTimeout(timerRef.current)
        return
    }
    setDisplay(true);
   timerRef.current = setTimeout(() => {
      setDisplay(false);
    }, 2000);
  };

  return (
    <>
      {display ? (
        <div
          key={item.id}
          className="box"
          onClick={() => {
            if (!disabled1) {
              handleChange(item.id, item.value);
              handleDisplay();
            }
          }}
          style={{
            pointerEvents: disabled1 ? "none" : "auto", // Disable click events
            opacity: disabled1 ? 0.5 : 1, // Reduce opacity when disabled
          }}
        >
          {item.value}
        </div>
      ) : (
        <div
          key={item.id}
          className="box1"
          onClick={() => {
            if (!disabled1) {
              handleChange(item.id, item.value);
              handleDisplay();
            }
          }}
          style={{
            pointerEvents: disabled1 ? "none" : "auto", // Disable click events
            opacity: disabled1 ? 0.5 : 1, // Reduce opacity when disabled
          }}
        ></div>
      )}
    </>
  );
};

export default Box;
