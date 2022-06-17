import React from "react";
import { useHistory } from "react-router-dom";

const PopAlert = ({
  Template,
  closeModal,
  content,
  orderData,
  successOrder,
}) => {
  console.log({ orderData });
  let history = useHistory();
  const closeModalHandler = () => {
    successOrder && history.push("/");
    closeModal();
  };
  return (
    <div class="order-success-modal">
      <div id="demo-modal5" class="modal">
        <div class="modal__content">
          <div class="login-main-area">
            <div class="login-info-from">
              {Template && <Template orderData={orderData} />}

              {content && <>{content}</>}
            </div>
          </div>
          <a href onClick={closeModalHandler} class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopAlert;
