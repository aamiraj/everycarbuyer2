"use client";

import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const topFunction = () => {
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(() => {
    function scrollFunction() {
      // Get the button:
      let mybutton = document.getElementById(
        "go-to-top-btn"
      ) as HTMLButtonElement;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);
  return (
    <button onClick={() => topFunction()} id="go-to-top-btn" title="Go to top">
      <FaArrowUp />
    </button>
  );
};

export default GoToTopButton;
