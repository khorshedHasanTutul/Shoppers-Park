import React from "react";
import { BrandData } from "../../../Service/AppService";
import BrandSingleItem from "./BrandSingleItem";
import BrandSingleNumberItem from "./BrandSingleNumberItem";

const BrandCategoryList = ({ brandsPrefix }) => {
  let items = [];
  brandsPrefix.forEach((element) => {
    // console.log(element[1].length);
    if (
      element[1].length > 0 &&
      element[0].toUpperCase() >= "A" &&
      element[0].toUpperCase() <= "Z"
    ) {
      items.push({ char: element[0].toUpperCase(), brands: element[1] });
    }
  });

  //   const uniqueLetters = [...new Set(letters)];
  console.log({ items });

  //   uniqueLetters.sort();

  return (
    <div class="brandcategorylistsub-main">
      <div class="brandsubcategories">
        {items.map((item, index) => {
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
            <BrandSingleNumberItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BrandCategoryList;
