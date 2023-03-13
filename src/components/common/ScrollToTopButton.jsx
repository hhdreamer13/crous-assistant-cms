import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed right-10 bottom-10 z-50"
          onClick={handleButtonClick}
        >
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              stroke="#bbf7d0"
              strokeWidth="2"
            />
            <path
              d="M12 8L12 16"
              stroke="#bbf7d0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 11L12.087 8.08704V8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704V8.08704L9 11"
              stroke="#bbf7d0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
