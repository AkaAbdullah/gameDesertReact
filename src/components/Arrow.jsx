import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";

const Arrow = () => {
  const [arrow, setArrow] = useState(false);
  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <>
      <Link
        to="top"
        className={arrow ? "back-top-btn active" : "back-top-btn"}
        aria-label="back to top"
      >
        <BsArrowUpCircle />
      </Link>
    </>
  );
};

export default Arrow;
