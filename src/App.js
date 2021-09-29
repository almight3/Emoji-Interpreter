import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw"
};
var emojiWeKnow = Object.keys(emojiDictionary);
var userInput;
export default function App() {
  var [meaning, setMeaning] = useState("");
  function onInputChange(event) {
    userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "entery wasn't found in database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    userInput = emoji.value;
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Food and Drink Emoji Interpreter</h1>
      <input onChange={onInputChange} />
      <h1>
        {userInput}
        {meaning}
      </h1>
      <hr />
      <h2>Emoji we know </h2>
      <div id="center">
        <ul>
          {emojiWeKnow.map(function (emoji) {
            return (
              <span
                onClick={() => onClickHandler(emoji)}
                style={{ fontSize: "3rem", padding: "1.4rem", margin: "1rem" }}
              >
                {emoji}
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
