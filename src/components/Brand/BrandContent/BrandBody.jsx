import React, { useState } from "react";
import { BrandData } from "../../../Service/AppService";
import Alert from "./Alert";
import BrandAlphabetLinks from "./BrandAlphabetLinks";
import BrandCategoryList from "./BrandCategoryList";

const BrandBody = ({ brandsPrefix }) => {
  const [foundBrand, setfoundBrand] = useState(false);
  let items = [];
  let numberItems = [];
  console.log({ brandsPrefix });
  brandsPrefix.forEach((element) => {
    if (
      element[1].length > 0 &&
      element[0].toUpperCase() >= "A" &&
      element[0].toUpperCase() <= "Z"
    ) {
      items.push({ char: element[0].toUpperCase(), brands: element[1] });
    }
    if (element[1].length > 0 && element[0] >= "0" && element[0] <= "9") {
      numberItems.push({ char: element[0], brands: element[1] });
    }
  });

  function setfoundData(item) {
    var value = item;
    item = item.target.text.toUpperCase();
    var foundData;
    if (item === "0-9") {
      foundData = numberItems.filter((item2) => item2.char <= 9);
    } else {
      foundData = items.filter((item2) => item2.char === item);
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
        <BrandCategoryList charItems={items} numberItems={numberItems} />
      </div>
    </section>
  );
};
export default BrandBody;
