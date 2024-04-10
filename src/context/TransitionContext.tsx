import gsap from "gsap";
import React, { createContext, useState } from "react";

const TransitionContext = createContext({});

const TransitionProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() => {
    return gsap.timeline({ paused: true });
  });

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
