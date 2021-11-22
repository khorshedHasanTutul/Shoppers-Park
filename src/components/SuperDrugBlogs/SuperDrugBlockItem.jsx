import React from 'react'
import { Link } from 'react-router-dom';

const SuperDrugBlockItem = ({item}) => {
    return (
        <div class="shop-way-superdrag-single-item">
        <Link to={'/blog/'+item.id}>
            <div class="shop-drag-img">
                <img src={item.image} alt="gif" />
            </div>
            <div class="shop-drag-comntent">
                <h3>{item.postName}</h3>
                <p>{item.postContent}</p>
                <h4 class="block-btn">{item.buttonText}<img class="dot-img-hover" src={item.buttonImage} alt="img" /></h4>
            </div>
        </Link>
    </div>
    )
}
export default SuperDrugBlockItem;
