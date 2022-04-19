import React from "react";
import { Link } from "react-router-dom";
import { getBannerObjectFrom } from "../../../Service/DataService";

const BannerTemplate = ({ item }) => {
  const getObjectFrom = getBannerObjectFrom(item);
  return (
    <div class="banner-slider-main owl-slider-perk">
      <div class="banner-slider-main-flex owl-slider-perk-items">
        <div class="single-banner-slider">
          <Link to={getObjectFrom.Link}>
            <img src={getObjectFrom.Image} alt="Banners_Img" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BannerTemplate;
