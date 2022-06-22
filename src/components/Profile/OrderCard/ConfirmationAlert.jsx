import React from "react";

const ConfirmationAlert = ({ content, closeModal, setIsAgree }) => {
  return (
    <div class="order-success-modal">
      <div id="demo-modal5" class="modal">
        <div class="modal__content" style={{ flexDirection: "column" }}>
          <div class="login-main-area">
            <div class="login-info-from">{content}</div>
          </div>
          <div className="confirmation-buttons">
            <div
              className="button SaysYes"
              onClick={() => {
                setIsAgree(true);
                closeModal();
              }}
            >
              Ok
            </div>
            <div
              className="button SaysYes"
              style={{ background: "#54C495" }}
              onClick={closeModal}
            >
              cancle
            </div>
          </div>
          <a href onClick={closeModal} class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationAlert;
