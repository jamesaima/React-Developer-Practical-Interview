import { useState, useEffect } from "react";
import "./styles.css";

const PlaindormString = () => {
  const [value, setValue] = useState("");
  const [isPalindrom, setIsPalindrom] = useState("");

  useEffect(() => {
    if (value.length > 3) {
      setIsPalindrom([...value].reverse().join("") === value);
    }
  }, [value]);

  return (
    <>
      <h1>Test - 2 - Check for Palindrom Match</h1>
      <code>
        Take text input from user and Check if the input string match palindrom
        and display Yes or No. Palindrom examples: radar, level. Allowed Time: 6
        Mins
      </code>

      <div
        style={{
          border: "2px solid black",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <label htmlFor="textbox" className="reverse-input-label">
          Check for Palindrom Match
        </label>
        <input
          type="text"
          id="textbox"
          onChange={(e) => setValue(e.target.value)}
        />

        <h4>Is Palindrom String: {isPalindrom.toString()}</h4>
      </div>
    </>
  );
};

export default PlaindormString;
