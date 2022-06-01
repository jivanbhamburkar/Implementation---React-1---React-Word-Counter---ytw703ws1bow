import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [wordLimit, setwordLimit] = useState(50);
  const [font, setFont] = useState();
  const [para, setPara] = useState();
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  return (
    <div id="main">
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        value={font}
        onChange={(e) => {
          setFont(parseInt(e.target.value));
        }}
      />
      <br />
      <input
        type="number"
        value={wordLimit}
        id="char-limit-input"
        default="50"
        onChange={(e) => {
          setwordLimit(e.target.value);
        }}
      />{" "}
      <br />
      <textarea
        style={{fontSize:`${font}px`}}
        maxLength={wordLimit}
        value={para}
        onChange={(e) => {
          // if(charCount < wordLimit){
            setPara(e.target.value);
            setCharCount(e.target.value.length);
            // setWordCount(e.target.value.trim().split(' ').length);
            setWordCount(e.target.value.split(' ').filter(Boolean).length);
          // }
        }}
      />
      <br />
      <div id="word-counter" >{charCount}</div> <br />
      <div id="char-counter">{wordCount}</div> <br />
    </div>
  );
};

export default App;
