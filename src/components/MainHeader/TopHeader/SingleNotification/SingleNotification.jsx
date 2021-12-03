import React from 'react';
import Discountedoffer from './Discountedoffer';
import NotificationContent from './NotificationContent';
import NotificationHeader from './NotificationHeader';

const SingleNotification = () => {
    return (
        <div>
            <NotificationHeader />
             <section class="notifaction-single-area">
                <div class="container">
                    <div class="notifaction-main-flex">
                        <div id="services" class="notifaction-inner-left">
                            <h2>Notifications</h2>
                           {/* <!-- single Items --> */}
                           <div class="notifaction-inner-read-more">
                               {/* <!-- single Items --> */}
                               <NotificationContent />
                           </div>
                        </div>
                        {/* <!-- notifaction inner right --> */}
                       

                       <Discountedoffer />
                        <nav class="pagenation-for-web" aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                <a class="page-link" href aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                </li>
                                <li class="page-item"><a class="page-link" href>1</a></li>
                                <li class="page-item active">
                                <a class="page-link" href>2 <span class="sr-only">(current)</span></a> 
                                </li>
                                <li class="page-item"><a class="page-link" href>3</a></li>
                                <li class="page-item">
                                <a class="page-link" href aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleNotification;