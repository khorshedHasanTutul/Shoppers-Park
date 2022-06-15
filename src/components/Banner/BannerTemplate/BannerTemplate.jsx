import React from "react";
import { Link } from "react-router-dom";
import { getBannerObjectFrom } from "../../../Service/DataService";
import { BASE_URL } from "../../../Service/httpService2";

const BannerTemplate = ({ item }) => {
  const getObjectFrom = getBannerObjectFrom(item);
  return (
    <div class="banner-slider-main owl-slider-perk">
      <div class="banner-slider-main-flex owl-slider-perk-items">
        <div class="single-banner-slider">
          <Link to={getObjectFrom.Link}>
            <img src={`${BASE_URL}${getObjectFrom.Image}`} alt="Banners_Img" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BannerTemplate;
