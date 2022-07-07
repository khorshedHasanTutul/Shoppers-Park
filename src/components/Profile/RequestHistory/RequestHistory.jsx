import React, { useState } from "react";
import RequestHistoryAlert from "./RequestHistoryAlert";

const RequestHistory = () => {
  const [isOPenAlert, setIsOpenAlert] = useState(false);
  const viewAlertHandler = () => {
    setIsOpenAlert(true);
  };
  const requestCloseHandler = () => {
    setIsOpenAlert((prevState) => !prevState);
  };
  return (
    <div className="requestHistory_container">
      {/* {requestOrders.length === 0 && (
        <div className="request-products">
          Didn't find any requests yet . 😥
        </div>
      )} */}

      <div className="requestHistory__item-container">
        <p>01</p>
        <div className="item-container-order">
          <p>
            Order No <span>:#21321321</span>
          </p>
          <p>
            Note <span>:Hello</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>:initial</span>
          </p>
        </div>
        <p>12 Aug 2000</p>
        <div className="item-container__view-Button" onClick={viewAlertHandler}>
          View
        </div>
      </div>
      <div className="requestHistory__item-container">
        <p>01</p>
        <div className="item-container-order">
          <p>
            Order No <span>:#21321321</span>
          </p>
          <p>
            Note <span>:Hello</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>:initial</span>
          </p>
        </div>
        <p>12 Aug 2000</p>
        <div className="item-container__view-Button">View</div>
      </div>
      <div className="requestHistory__item-container">
        <p>01</p>
        <div className="item-container-order">
          <p>
            Order No <span>:#21321321</span>
          </p>
          <p>
            Note <span>:Hello</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>:initial</span>
          </p>
        </div>
        <p>12 Aug 2000</p>
        <div className="item-container__view-Button">View</div>
      </div>
      {isOPenAlert && (
        <RequestHistoryAlert
          closeRequestAlert={requestCloseHandler}
          //   requestItems={requestItems}
          //   requestPres={requestPres}
          //   isGetting={isGetting}
        />
      )}
    </div>
  );
};

export default RequestHistory;
