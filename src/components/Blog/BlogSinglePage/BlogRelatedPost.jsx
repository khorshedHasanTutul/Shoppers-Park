import React from 'react';
import { BlogData } from '../../../Service/AppService';
import SliderComponent from '../../utilities/Slider/SliderComponent';
import BlogRelatedItem from './BlogRelatedItem';

const BlogRelatedPost = ({category_id,id}) => {
    console.log(['iddd',id])
    const Related_Product=BlogData.filter((blogItem)=>blogItem.category_id==category_id && blogItem.id!=id);
    console.log(['releated product',Related_Product])
    const options={
        rewind: true,
        type: 'slide',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 2,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 1,
            },
            575: {
                perPage: 1,
            }
      }
    }
    return (
        <div class="shop-way-superdrag-main">
        <h2 class="releted-post-single">Related Posts</h2>
        <div class="shop-way-superdrag-inner-flex">
            {/* <!-- single item --> */}
            <SliderComponent  options={options} data={Related_Product} Template={BlogRelatedItem}/>
            
        </div>
    </div>
    );
};

export default BlogRelatedPost;