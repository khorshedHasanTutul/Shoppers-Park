import React from 'react';
import RelatedSingleItem from './RelatedSingleItem';

const RelatedProductes = ({relatedProducts}) => {
    return (
        <div class="related-product-main">
        <h4>RELATED PRODUCTS</h4>
        {/* <!-- single item --> */}
       <RelatedSingleItem relatedProducts={relatedProducts}/>
    </div>
    );
};

export default RelatedProductes;