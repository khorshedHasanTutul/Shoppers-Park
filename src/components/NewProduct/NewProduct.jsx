import React from 'react';
import NewInBanner from './NewInBanner';
import NewinHeader from './NewinHeader';
import NewInProduct from './NewInProduct';
import NewInShopCategory from './NewInShopCategory';

const NewProduct = () => {
    return (
        <div>
            <NewinHeader />
            <NewInBanner />
            <NewInShopCategory />
            <NewInProduct />
        </div>
    );
};

export default NewProduct;