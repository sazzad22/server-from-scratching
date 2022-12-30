import React, { useState } from "react";

const ButtonEvent = () => {
  // clickCount state to change when the button is clicked. Initially it is 0;
  const [clickCount, setClickCount] = useState(1);

  // set an initial state of the button text as "click me"
  const [buttonText, setButtonText] = useState("click me");

  const handleClick = () => {
    // increment  by 1
    setClickCount(clickCount + 1);

    // If the count is a multiple of 3, set the button text to "bang"
    // Otherwise, set the button text back to "click me"
    if (clickCount % 3 === 0) {
      setButtonText("bang");
    } else {
      setButtonText("click me");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default ButtonEvent;
