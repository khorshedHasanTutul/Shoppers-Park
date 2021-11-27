import React from 'react';

const Alert = ({closeModal}) => {
    return (
        <div className="alert-for-all-web">
            <div id="demo-modal3" class="modal">
            <div class="modal__content">
                <div class="alert-main-area">
                    <h2>No Brand Found</h2>
                    <button class="warning" onClick={closeModal}>Ok</button>
                </div>  
                <a href class="modal__close" onClick={closeModal}>&times;</a>
            </div>
        </div>
        </div>
    );
};

export default Alert;