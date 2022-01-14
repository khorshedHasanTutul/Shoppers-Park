import React, { useState } from 'react'
import Banner from '../components/Banner/Banner';
import BrandsSuperDrug from '../components/BrandsSuperDrug/BrandsSuperDrug';

import Notice from '../components/Notice/Notice';
import Parks from '../components/Parks/Parks';
import CategoryProducts from '../components/Products/HomeProducts/CategoryProducts/CategoryProducts';
import Trandingproducts from '../components/Products/HomeProducts/TrandingProducts/Trandingproducts';
import SuperDrugBlogs from '../components/SuperDrugBlogs/SuperDrugBlogs';
import { WishService } from '../Service/CartContent';

const Home = () => {
    const [wishItemsGet, setwishItemsGet] = useState(WishService.Get())
    WishService.Refresh=setwishItemsGet;
 
    return (
        <>
        <Banner />
        <Parks />
        <Notice />
        <CategoryProducts wishItemsGet={wishItemsGet}/>
        <Trandingproducts wishItemsGet={wishItemsGet}/>
        <SuperDrugBlogs />
        <BrandsSuperDrug />
       
        </>
    )
}
export default Home;