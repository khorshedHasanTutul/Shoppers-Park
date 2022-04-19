import React from "react";
import { getBannersTemplate } from "../../Service/DataService";
import Slider from "../utilities/Slider/Slider";
import BannerTemplate from "./BannerTemplate/BannerTemplate";

export const Banner = () => {
  const data = getBannersTemplate;
  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
  };

  return (
    <section class="banner-slider-index-item">
      {/* <!-- banner slider area --> */}
      <Slider data={data} options={options} TempLate={BannerTemplate} />
    </section>
  );
};
export default Banner;
