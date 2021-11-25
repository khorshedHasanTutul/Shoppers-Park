import React from 'react'
import Banner from '../components/Banner/Banner';
import BrandsSuperDrug from '../components/BrandsSuperDrug/BrandsSuperDrug';
import DiscountProductShop from '../components/DiscountProductShop/DiscountProductShop';

import Notice from '../components/Notice/Notice';
import OffersProductArea from '../components/Offers/OffersProductArea';
import Parks from '../components/Parks/Parks';
import CategoryProducts from '../components/Products/HomeProducts/CategoryProducts/CategoryProducts';
import Trandingproducts from '../components/Products/HomeProducts/TrandingProducts/Trandingproducts';
import SuperDrugBlogs from '../components/SuperDrugBlogs/SuperDrugBlogs';

const Home = () => {
    return (
        <>
        <Banner />
        <Parks />
        <Notice />
        <CategoryProducts />
        <Trandingproducts />
        <SuperDrugBlogs />
        <BrandsSuperDrug />
        {/* <DiscountProductShop /> */}
        </>
    )
}
export default Home;
