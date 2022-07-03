import React from "react";
import BrandSingleItem from "./BrandSingleItem";
import BrandSingleNumberItem from "./BrandSingleNumberItem";

const BrandCategoryList = ({ charItems,numberItems }) => {
  return (
    <div class="brandcategorylistsub-main">
      <div class="brandsubcategories">
        {charItems.map((item, index) => {
          console.log({ item });
          return (
            <>
              <a id={"brandSort-" + item.char} href>
                {" "}
              </a>
              <div class="brandLetterContainer">
                <div class="brandLetter">{item.char}</div>
                <ul class="brandLetterLinks">
                  <BrandSingleItem brands={item.brands} />
                </ul>
              </div>
            </>
          );
        })}
        <a id="brandSort-0-9" href>
          {" "}
        </a>

        <div class="brandLetterContainer">
          <div class="brandLetter">0-9</div>
          <ul class="brandLetterLinks">
            <BrandSingleNumberItem numberItems={numberItems} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BrandCategoryList;
