import { useEffect, useState } from "react";
import { GET_PROMOTIONAL } from "../../../lib/endpoints";
import { BASE_URL, httpV2 } from "../../../Service/httpService2";
import PopAlert from "../../utilities/Alert/PopAlert";
import Suspense from "../../utilities/Suspense/Suspense";

const Offers = ({ offers }) => {
  const [promotedOffers, setPromottedOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  //api request for get special offers
  const getOffersHttp = () => {
    httpV2.get({
      url: GET_PROMOTIONAL,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setPromottedOffers(res.data);
        setIsFailed(false);
      },
      failed: () => {
        setIsFailed(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  const closeResAlerthandler = () => {
    setIsFailed((prevState) => !prevState);
  };
  //get offers call function
  useEffect(() => {
    getOffersHttp();
  }, []);

  return (
    <div class="cash-back-offer-inner-card">
      {/* <!-- single item --> */}
      {!isLoading && promotedOffers?.length === 0 && (
        <div className="without-special-offer">
          <div className="zero-special-offers">
            No Speical Offers Recently 😥
          </div>
        </div>
      )}
      {!isLoading &&
        promotedOffers?.length > 0 &&
        promotedOffers.map((item) => (
          <div class="single-cash-card-item">
            <div class="card-img">
              <img src={BASE_URL + item.imageURL} alt="img" />
            </div>
            <div class="cash-content">
              <h4>{item.headline}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      {isLoading && <Suspense />}
      {isFailed && (
        <PopAlert
          content={"Something went wrong."}
          closeModal={closeResAlerthandler}
        />
      )}
    </div>
  );
};

export default Offers;
