import React, { useState } from "react";
import { BrandData } from "../../../Service/AppService";
import Alert from "./Alert";
import BrandAlphabetLinks from "./BrandAlphabetLinks";
import BrandCategoryList from "./BrandCategoryList";

const BrandBody = ({ brandsPrefix }) => {
  const [foundBrand, setfoundBrand] = useState(false);
  function setfoundData(item) {
    var value = item;
    item = item.target.text.toLowerCase();
    var foundData;
    if (item === "0-9") {
      foundData = BrandData.filter(
        (item2) => item2.brand_name.trim().charAt(0) <= 9
      );
    } else {
      foundData = BrandData.filter(
        (item2) => item2.brand_name.trim().toLowerCase().charAt(0) === item
      );
    }
    if (foundData.length <= 0) {
      setfoundBrand(true);
    } else {
      var element = document.getElementById("brandSort-" + value.target.text);
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  function closeModal() {
    setfoundBrand(false);
  }
  function classAdding(evt, item) {
    setfoundData(item);
  }

  return (
    <section class="brand-a-z-area">
      <div class="container">
        <h1 class="az__title">A-Z of All Brands</h1>
        <div class="stickyAtoz-area">
          <BrandAlphabetLinks classAdding={classAdding} />
          {foundBrand && <Alert closeModal={closeModal} />}
        </div>
        <BrandCategoryList brandsPrefix={brandsPrefix} />
      </div>
    </section>
  );
};
export default BrandBody;
