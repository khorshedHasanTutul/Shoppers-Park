import React from 'react'

const TopFooter = ({content}) => {
    //console.log(content)
    return (
        <div class="support-service-single-item">

        <div class="footer-support-img">
          <img src={content.img} alt="" />
        </div>
        <div class="support-service-content">
          <h6>{content.h6}</h6>
          <span>{content.text}</span>
        </div>
        </div>
    )
}
export default TopFooter;
