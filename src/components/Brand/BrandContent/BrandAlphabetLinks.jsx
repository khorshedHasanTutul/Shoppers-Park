import React from "react";
import { callBack } from "../../../Service/AppService";

const BrandAlphabetLinks = ({ classAdding }) => {
  const BrandsLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];
  return (
    <div class="atozlinks">
      <ul data-role="none" class="list-alphabets">
        {BrandsLetter.map((item) => (
          <li
            id={"id-" + item}
            class="greyout"
            onClick={callBack(classAdding, item)}
          >
            <a class="scroll-down" href>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BrandAlphabetLinks;
