import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smile",
  "🤗": "hug",
  "🙄": "rolling eyes",
  "😰": "anxious",
  "🤫": "shush",
  "🥱": "yawn",
  "❤️": "love"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning;
    // if (meaning === undefined) {
    //   meaning = "not defined";
    // }
    if (userInput in emojiDictionary) {
      meaning = emojiDictionary[userInput];
    } else {
      meaning = "failed to recognise this emoji";
    }

    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiEventHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={emojiInputHandler} />
      <div>
        <h2>{meaning}</h2>
      </div>
      <div>
        <h3> emojis we know: </h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiEventHandler(emoji)}
              key={emoji}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
