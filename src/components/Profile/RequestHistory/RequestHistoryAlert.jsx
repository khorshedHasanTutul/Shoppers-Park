import React from "react";

const RequestHistoryAlert = ({ closeRequestAlert }) => {
  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined request-history">
          <div class="popup__title">
            <h2>Request History</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={closeRequestAlert}
            >
              ✖
            </div>
          </div>
          <div class="popup__body" style={{ minHeight: "15vw" }}>
            <>
              <div className="image-founded-container">
                <p className="image-container__no-image">
                  Image of your prescription!
                </p>
                {/* {requestPres.length === 0 && (
                    <p className="image-container__no-image">No Image Found!</p>
                  )} */}

                <div className="image_preview_container">
                  <div className="image_previewer">
                    <div className="image_prev">
                      <img
                        src={
                          "/contents/assets/images/Jimmy-Choo-Eau-de-Parfum-100ml-285053.jpg"
                        }
                        alt="img"
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="image_previewer">
                    <div className="image_prev">
                      <img
                        src={
                          "/contents/assets/images/Jimmy-Choo-Eau-de-Parfum-100ml-285053.jpg"
                        }
                        alt="img"
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="image_previewer">
                    <div className="image_prev">
                      <img
                        src={
                          "/contents/assets/images/Jimmy-Choo-Eau-de-Parfum-100ml-285053.jpg"
                        }
                        alt="img"
                        srcset=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="item_found">3 items found</p>

              <div className="items-found-container">
                <div className="items_founded_table_item">
                  <div className="table_header_items">
                    <div className="header_name">Name</div>
                    <div className="header_strength">Strength</div>
                    <div className="header_quantity">Quantity</div>
                  </div>
                  <div className="table_content_items ">
                    <div className="table_content__single-item">
                      <div className="content_name">Napa</div>
                      <div className="content_strength">500</div>
                      <div className="content_quantity">125</div>
                    </div>
                    <div className="table_content__single-item">
                      <div className="content_name">Napa</div>
                      <div className="content_strength">500</div>
                      <div className="content_quantity">125</div>
                    </div>
                    <div className="table_content__single-item">
                      <div className="content_name">Napa</div>
                      <div className="content_strength">500</div>
                      <div className="content_quantity">125</div>
                    </div>
                    <div className="table_content__single-item">
                      <div className="content_name">Napa</div>
                      <div className="content_strength">500</div>
                      <div className="content_quantity">125</div>
                    </div>

                  </div>
                </div>
              </div>
            </>
            {/* {isGetting && <Suspense />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryAlert;
