import React from 'react';
import RelatedSingleItem from './RelatedSingleItem';

const RelatedProductes = ({product_id}) => {
    return (
        <div class="related-product-main">
        <h4>RELATED PRODUCTS</h4>
        {/* <!-- single item --> */}
       <RelatedSingleItem product_id={product_id}/>
    </div>
    );
};

export default RelatedProductes;