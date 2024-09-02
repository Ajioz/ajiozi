import { useEffect, useState } from "react";

const Scroll = ({ scrollContainerRef }) => {
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

  return (
    <div>
      <p>Current Scroll Position: {scrollY}</p>
    </div>
  );
};

export default Scroll;
