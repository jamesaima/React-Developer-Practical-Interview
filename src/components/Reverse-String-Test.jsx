import { useState, useEffect } from "react";
import "./styles.css";

const ReverseString = () => {
  const [value, setValue] = useState("");
  const [reversedVal, setReversedVal] = useState(
    "I am the Label - Type Something to Change me!"
  );

  const reverseString = (value) => {
    const reversedValue = [...value].reverse().join("").toLocaleUpperCase();
    setReversedVal(reversedValue);
  };

  useEffect(() => {
    if ([...value].length > 3) {
      reverseString(value);
    }
  }, [value]);

  return (
    <>
      <h1>Test - 1 - Reverse String</h1>
      <code>
        Take text input from user and when input strng length is > 3 then
        reverse the string display it on the Input Label. Allowed Time Time: 5
        mins - Dont bother about styling
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
          {reversedVal}
        </label>
        <input
          type="text"
          id="textbox"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default ReverseString;
