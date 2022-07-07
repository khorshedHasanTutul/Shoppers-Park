import { useEffect } from "react";

const useOutsideAlerter = (ref, action) => {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
  }, [ref]);
};

export { useOutsideAlerter };
