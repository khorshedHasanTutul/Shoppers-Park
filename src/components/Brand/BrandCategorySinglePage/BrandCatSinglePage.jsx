import React from 'react';
import { useParams } from 'react-router';
import { BrandData } from '../../../Service/AppService';
import BrandCatItemHeader from './BrandCatItemHeader';
import BrandSingleProductpage from './BrandSingleProductpage';

const BrandCatSinglePage = () => {
    const {id}=useParams();
    const data=BrandData.find(item=>item.brand_id===parseInt(id) );
    return (
        <>
        <BrandCatItemHeader data={data}/>
        <BrandSingleProductpage data={data}/>
        </>
    );
};

export default BrandCatSinglePage;