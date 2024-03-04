"use client";

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import HTMLParser from "@/utils/HTMLParser";

export default function DealsBar({ data }: any) {
  const { header_message } = data;
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey((key || 1) + 1);
    }
  });

  const removePTagAndAddSpaces = (text: string) => {
    const stringWithSpaces = text?.replace(/<p>(.*?)<\/p>/g, "$1    ");
    return stringWithSpaces;
  };

  return (
    <div className="top-nav">
      <div className="shop-welcome-message marquee d-flex gap-4 flow-container-base flow-container">
        <div className="flow-content js-marquee">
          <div className="single-msg">
            <animated.div style={scrolling}>
              {HTMLParser(removePTagAndAddSpaces(header_message) || "")}
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
