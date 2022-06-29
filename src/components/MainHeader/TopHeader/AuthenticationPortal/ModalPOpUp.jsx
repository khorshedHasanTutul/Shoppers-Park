import React, { useState } from "react";
import ForgetPasswordModal from "./ForgetPasswordModal";
import LoginModal from "./LoginModal";
import OtpCodeModal from "./OtpCodeModal";
import RegistrationModal from "./RegistrationModal";

const ModalPOpUp = ({
  ModalOpen,
  closeCart,
  orderNowPressed,
  consultancyPressed,
}) => {
  const [ModalCmp, setModalCmp] = useState(0);
  const CreateAccount = () => {
    setModalCmp(1);
  };
  const loginModalOpen = () => {
    setModalCmp(0);
  };
  const forgetPassModal = () => {
    setModalCmp(2);
  };
  const OtpModal = () => {
    setModalCmp(3);
  };

  return (
    <div class="modal">
      <div class="modal__content">
        <div class="login-main-area">
          {ModalCmp === 0 && (
            <LoginModal
              CreateAccount={CreateAccount}
              forgetPassModal={forgetPassModal}
              ModalOpen={ModalOpen}
              closeCart={closeCart}
              orderNowPressed={orderNowPressed}
              consultancyPressed={consultancyPressed}
            
            />
          )}
          {ModalCmp === 1 && (
            <RegistrationModal
              loginModalOpen={loginModalOpen}
              setModalCmp={setModalCmp}
            />
          )}
          {ModalCmp === 2 && (
            <ForgetPasswordModal
              OtpModal={OtpModal}
              loginModalOpen={loginModalOpen}
            />
          )}
          {ModalCmp === 3 && (
            <OtpCodeModal
              loginModalOpen={loginModalOpen}
              forgetPassModal={forgetPassModal}
              ModalOpen={ModalOpen}
            />
          )}
          <a href onClick={ModalOpen} class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalPOpUp;
