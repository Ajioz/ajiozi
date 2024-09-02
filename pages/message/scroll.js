import { useEffect, useState } from "react";

const Scroll = ({ scrollContainerRef, border }) => {
  const [scrollY, setScrollY] = useState(0);

  //   const [addBorder, setAddBorder] = useState(false);

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

  if (scrollY > 25) {
    border(true);
  } else {
    border(false);
  }

  return;
};

export default Scroll;
