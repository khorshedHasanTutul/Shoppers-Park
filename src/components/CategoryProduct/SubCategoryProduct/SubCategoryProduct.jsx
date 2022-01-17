import React, { useState } from 'react';
import { useParams } from 'react-router';
import appData from '../../DataSource/appData';
import PopUpAlert from '../../utilities/Alert/PopUpAlert';
import SubCategoryProductHeader from './SubCategoryProductHeader';
import SubCategoryTotalItem from './SubCategoryTotalItem';

const SubCategoryProduct = () => {
    const {categoryId}=useParams();
    const {subCategoryId}=useParams()
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    
    return (
        <>
        <SubCategoryProductHeader categoryId={categoryId} subCategoryId={subCategoryId}/>
        
 {
      (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
  }

        <section class="catagory-product-area view-all-sub-catagory">
        <div class="container">
            {/* <!-- repeat sub catagory single --> */}
              <SubCategoryTotalItem categoryId={categoryId} subCategoryId={subCategoryId} setalert={closeModal}/>
        </div>
    </section>
        </>
    );
};

export default SubCategoryProduct;