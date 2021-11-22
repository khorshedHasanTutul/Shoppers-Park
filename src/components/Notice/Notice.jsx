import React from 'react'
import appData from '../DataSource/appData';

const Notice = () => {
    return (
        <section class="today-add-offer">
        <div class="container">
            <div class="today-offer-newslatter">
                <marquee behavior="scrolling" direction="left" scrollamount="3"><h2>{appData.BannerNotice.BoldText}  <span class="buti-card">{appData.BannerNotice.NormalText}</span></h2></marquee>
            </div>
        </div>
    </section>
    )
}
export default Notice;
