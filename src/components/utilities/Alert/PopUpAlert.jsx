import React from "react";

const PopUpAlert = ({ content, closeModal, addingStyle }) => {
  if (addingStyle) {
    return (
      <div className="alert-for-all-web">
        <div className="grid-container">
          <div className="alert-main-area">
            <p
              style={{
                color: "#df2c8a",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              {content}
            </p>
            <button
              class="warning"
              onClick={closeModal}
              style={{ width: "40%", marginTop: "20px", padding: "10px" }}
            >
              Ok
            </button>
          </div>

          <div className="grid-container__image">
            <img src="/contents/assets/images/popUp.jpg" alt="" />
            <a href class="modal__close" onClick={closeModal}>
              &times;
            </a>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="alert-for-all-web">
        <div id="demo-modal3" class="modal">
          <div class="modal__content">
            <div className="alert-main-area">
              <h2>{content}</h2>
              <button class="warning" onClick={closeModal}>
                Ok
              </button>
            </div>
            <div>
              <a href class="modal__close" onClick={closeModal}>
                &times;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopUpAlert;
