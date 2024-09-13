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
    if (container) { // Check if container is defined
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) { // Check if container is defined
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  if (scrollY > 25) {
    border(true);
  } else {
    border(false);
  }

  // Return null or some JSX
  return null; // or return <div>...</div>;
};

export default Scroll;
