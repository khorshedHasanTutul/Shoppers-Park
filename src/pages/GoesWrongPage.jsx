import React from "react";

const GoesWrongPage = () => {
  const refreshHandler = () => {
    window.location.reload();
  };
  return (
    <div class="page-not-found">
      {/* <i class="fa fa-meh-o" aria-hidden="true"></i> */}
      <h1 style={{ color: "red" }}>Something Went Wrong.</h1>
      <p
        style={{ textAlign: "center", marginTop: "10px" }}
        onClick={refreshHandler}
        className="wentWrong"
      >
        <i
          class="fa fa-refresh"
          aria-hidden="true"
          style={{ fontSize: "18px", color: "white", marginRight: "10px" }}
        ></i>
        Click To Refresh the Page
      </p>
    </div>
  );
};

export default GoesWrongPage;
