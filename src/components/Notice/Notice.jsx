import React from "react";
import { getNotice } from "../../Service/DataService";

const Notice = () => {
  return (
    <section class="today-add-offer">
      <div class="container ">
        <div class="today-offer-newslatter">
          <marquee behavior="scrolling" direction="left" scrollamount="5">
            <div style={{display:"flex", gap:"2rem"}}> 
              {getNotice.map((item) => (
                <h2>
                  <span class="buti-card">{item[2]}</span>
                </h2>
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
};
export default Notice;
