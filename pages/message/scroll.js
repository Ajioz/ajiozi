import { useEffect, useState, useRef } from "react";
import { throttle } from "lodash";

const Scroll = ({ scrollContainerRef, border }) => {
  const [scrollY, setScrollY] = useState(0);
  const lastBorderState = useRef(false); // Keeps track of the last state passed to border

  const handleScroll = useRef(
    throttle(() => {
      if (scrollContainerRef.current) {
        setScrollY(scrollContainerRef.current.scrollTop);
      }
    }, 100)
  ).current; // Ensure `handleScroll` is not recreated on each render

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup function to remove the scroll event listener
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      handleScroll.cancel(); // Clean up the throttled function to prevent memory leaks
    };
  }, [scrollContainerRef]); // No need for `handleScroll` in dependencies, as it's stable

  useEffect(() => {
    const borderState = scrollY > 25;
    if (borderState !== lastBorderState.current) {
      border(borderState);
      lastBorderState.current = borderState;
    }
  }, [scrollY, border]);

  return null;
};

export default Scroll;
