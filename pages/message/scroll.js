import { useEffect, useState } from "react";

const Scroll = ({ scrollContainerRef, border }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollY(scrollContainerRef.current.scrollTop);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  console.log('Value of t:', t); // Check what t is before it's called
  if (typeof t !== 'function') {
      throw new Error('Expected t to be a function, but got: ' + typeof t);
  }

  if (scrollY > 25) {
    border(true);
  } else {
    border(false);
  }

  return;
};

export default Scroll;
