import React from 'react';
import appData from '../../../DataSource/appData';
import SearchPortal from './SearchPortal';
import SearchTemplate from './SearchTemplate';

const SearchProduct = ({SearchValue,closeSearch}) => {

    const lowerSearchvalue=SearchValue.toLowerCase();
    const allProduct=appData.categoryProducts.concat(appData.TrandingProducts);
    const filterData=allProduct.filter(item=>item.Nm.toLowerCase().includes(lowerSearchvalue));
    const data=(filterData.length>5)?filterData.slice(0,5):filterData;

    return (
        <SearchPortal data={data} closeSearch={closeSearch}/>
    );
};

export default SearchProduct;