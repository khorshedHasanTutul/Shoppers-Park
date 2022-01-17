import React, { useState } from 'react';
import PopUpAlert from '../utilities/Alert/PopUpAlert';
import FestivalCategoryProduct from './FestivalCategoryProduct';
import FestivalHeader from './FestivalHeader';

const FestivalParent = () => {
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    return (
        <>
            <FestivalHeader />

            <section class="catagory-product-area">
            {
      (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
  }
            <div class="container">
               <FestivalCategoryProduct setalert={closeModal}/>
            </div>
           </section>  
        </>
    );
};

export default FestivalParent;