import React, { useState } from "react";

function AnimatedText({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  React.useEffect(() => {
    let timeoutId;
    let index = 0;

    const animateText = () => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }
      setDisplayedText(text.slice(0, index + 1));
      timeoutId = setTimeout(() => {
        index += 1;
        animateText();
      }, 100);
    };

    animateText();

    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div className="text-6xl font-medium">
      {displayedText.split("").map((letter, index) => (
        <span
          key={index}
          className="animate-pulse duration-200"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default AnimatedText;