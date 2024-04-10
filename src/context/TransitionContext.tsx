import gsap from "gsap";
import React, { ReactNode, createContext, useState } from "react";

interface TransitionContextProps {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

const TransitionContext = createContext<TransitionContextProps>({
  timeline: gsap.timeline({ paused: true }),
  setTimeline: () => {}, // Just a dummy function for initial value
});

const TransitionProvider = ({ children }: { children: ReactNode }) => {
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
