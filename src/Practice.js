import React, { useEffect, useState } from "react";
import Box from "./Box";

const initialEmojis = ["❤️", "🍀", "🌎", "🍎", "⚽️", "🚗", "⛵️", "💎"];
const Practice = () => {
  const [data, setData] = useState([]);
  const [moves, setMoves] = useState(0);
  const [click, setClick] = useState(0);
  const [selectedItem1, setSelectedItem1] = useState("");
  const [selectedItem2, setSelectedItem2] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [restartGame, setRestartGame] = useState(true);
  const [disabled1, setDisabled1] = useState(false);

  const handleChange = (selectedId, symbol) => {
    if (!selectedItem1) {
      setSelectedItem1(symbol);
    } else if (!selectedItem2) {
      setSelectedItem2(symbol);
    }
    if (selectedItem1 == symbol) {
      setDisplayMessage("You Won");
      setMoves(moves + 1);
      setDisabled1(true);
      return;
    }

    let click1 = click + 1;
    setClick(click + 1);
    const details = data.map((item) => {
      return item.id == selectedId ? { ...item, display: true } : item;
    });
    setData(details);
    if (click1 == 2) {
      setMoves(moves + 1);
      setClick(0);
      setSelectedItem1("");
      setSelectedItem2("");
    }
  };
  const displayElements = () => {
    let array = [];
    for (let i = 0; i < 16; i++) {
      array.push({
        id: array.length + 1,
        display: false,
        value: initialEmojis[Math.floor(Math.random() * initialEmojis.length)],
      });
    }

    setData(array);
  };
  useEffect(() => {
    displayElements();
  }, [restartGame]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Match Pair Game</h2>
      <h3 style={{ textAlign: "center", minHeight: "20px" }}>
        {displayMessage ? displayMessage : ""}
      </h3>

      <div className="container">
        {data.map((emoji) => {
          return (
            <>
              <Box
                key={emoji.id}
                item={emoji}
                handleChange={handleChange}
                disabled1={disabled1}
              />
            </>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Moves : {moves}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setRestartGame(!restartGame);
            setMoves(0);
            setDisplayMessage("");
            setDisabled1(false)
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default Practice;
