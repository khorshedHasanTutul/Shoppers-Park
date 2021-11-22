import React from 'react'

const BrandsSuperDrugItem = ({item}) => {
    return (
        <div class="all-brands-superdrag-single-item">
        <div class="all-brands-drag-img">
            <a href="#">
                <img src={item.image} alt="img" />
            </a>
        </div>
    </div>
    )
}
export default BrandsSuperDrugItem;
