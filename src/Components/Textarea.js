import React, { useState } from "react";

export default function Textarea(props) {
  const [text, settext] = useState("");
  const toUpperCs = () => {
    settext(text.toUpperCase());
  };
  const toLowerCs = () => {
    settext(text.toLowerCase());
  };
  const onChange = (e) => {
    settext(e.target.value);
  };
  const copyText = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };
  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={onChange}
          style={{
            backgroundColor: props.swth === "dark" ? "#b8b8b8" : "white",
          }}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        onClick={toUpperCs}
        className="my-2 bg-dark text-white"
      >
        uppercase
      </button>

      <button
        disabled={text.length === 0}
        onClick={toLowerCs}
        className="my-2 mx-2 bg-dark text-white"
      >
        lowercase
      </button>

      <button
        disabled={text.length === 0}
        onClick={copyText}
        className="my-2 bg-dark text-white"
      >
        Copy
      </button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} letters
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter txt"}</p>
      </div>
    </div>
  );
}
