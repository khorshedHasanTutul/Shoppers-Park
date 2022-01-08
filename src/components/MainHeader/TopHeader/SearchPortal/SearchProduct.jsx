import React from 'react';
import appData from '../../../DataSource/appData';
import SearchPortal from './SearchPortal';

const SearchProduct = ({SearchValue,closeSearch}) => {

    const lowerSearchvalue=SearchValue.toLowerCase();
    const allProduct=appData.categoryProducts;
    const filterData=allProduct.filter(item=>item.Nm.toLowerCase().includes(lowerSearchvalue));
    const data=(filterData.length>5)?filterData.slice(0,5):filterData;
    return (
        <SearchPortal data={data} closeSearch={closeSearch} lowerSearchvalue={lowerSearchvalue}/>
    );
};

export default SearchProduct;