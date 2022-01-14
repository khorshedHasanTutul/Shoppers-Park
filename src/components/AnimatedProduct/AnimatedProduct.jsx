import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./AnimatedProduct.css";

const AnimatedProduct = ({ when, onStop, uiRef }) => {
  const stop = () => {
    onStop();
  };

  const getHTML = () => {
    return { __html: uiRef.current.innerHTML };
  };

  setTimeout(() => {
    stop();
  }, 1200);

  const pos = uiRef.current?.getBoundingClientRect();
  const animateEl = document.querySelector("#animation");
  const closeCartEl = document.querySelector(".cart-box");

  const closeCartPos = closeCartEl?.getBoundingClientRect();

  const style = `
  .animated{
    position: absolute;
    height: ${uiRef.current?.offsetHeight}px;
    width: ${uiRef.current?.offsetWidth}px;

    top: ${((closeCartPos?.top + closeCartPos?.bottom ) / 2) + window.scrollY}px;
    left: ${((closeCartPos?.left + closeCartPos?.right ) / 2) + window.scrollX}px;

    animation: shrink 1200ms ease-in-out;
    z-index: 50;
    transform: translate(-50%, -50%) scale(0.1);

    background: white;
}

@keyframes shrink {
    0%{
        transform: scale(1);
        left: ${pos?.left + window.scrollX}px;
        top: ${pos?.top + window.scrollY}px;
    }
    60%{
        transform: translate(-50%, -50%) scale(0.1);
        top: ${((closeCartPos?.top + closeCartPos?.bottom ) / 2) + window.scrollY}px;
        left: ${((closeCartPos?.left + closeCartPos?.right ) / 2) + window.scrollX}px;
    }
    80%{
      transform: translate(-50%, -50%) scale(0.5);
    }
    100%{
      transform: translate(-50%, -50%) scale(0);
    }
}
  `;

  return (
    <Fragment>
      {createPortal(
        <Fragment>
          {when && (
            <Fragment>
              <style>{style}</style>
              <div
                className={"animated"}
                dangerouslySetInnerHTML={getHTML()}
              ></div>
            </Fragment>
          )}
        </Fragment>,
        animateEl
      )}
    </Fragment>
  );
};

export default AnimatedProduct;
