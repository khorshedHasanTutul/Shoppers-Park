import React from 'react';
import { NewInPage } from '../../Service/AppService';
import appData from '../DataSource/appData';
import SliderComponent from '../utilities/Slider/SliderComponent';
import CategorySingleItem from './CategorySingleItem';

const NewInShopCategory = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 2,
            },
            575: {
                perPage: 2,
            },
            991: {
                perPage: 3,
            },
            992: {
                perPage: 5,
            },
            1200: {
                perPage: 5,
            }
      }
    }
    const date=new Date().getDate();
    const data=appData.ShopCategory.filter(item=>(item.created_at-date<=7)? item : '');

    return (
        <section class="tranding-this-holloween-area new-in-page section-padding">
        <div class="container">
           <div class="butifull-heading-title">
               <h4>{NewInPage.HeaderAreaText}</h4>
           </div>
           {/* <!-- tranding holloween slider item --> */}
           <div class="tranding-holloween-slider-main owl-slider-perk">
               <div class="tranding-holloween-slider-flex owl-slider-perk-items">
                   {/* <!-- single item --> */}
                  
                            {
                                (data.length>=5)&& <SliderComponent options={options} data={data} Template={CategorySingleItem} />
                            }
                            {
                                 (data.length<5)&&
                                 (data.map(item=>(
                                     <CategorySingleItem item={item}/>
                                 )))
                            }
               </div>
           </div>
        </div>
   </section> 
    );
};

export default NewInShopCategory;