import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BlogService } from '../../../Service/AppService';


const BlogSingleItem = ({callBack,categoryId}) => {
    const [blog, setState] = useState({Item:[],CategoryId:categoryId});
    var blogList=blog.Item; 

    BlogService.Get(blog.CategoryId,function(list){
        // console.log(['categoryId',blog.CategoryId,list,blogList]);
        if(blogList.length!==list.length){
            setState({Item:list,CategoryId:blog.CategoryId});
        }
    }); 
    callBack({
        Refresh:(ctgrId)=>{
            console.log('hello',ctgrId)
            categoryId=ctgrId;
            console.log(['categoryId',categoryId,ctgrId]);
            setState({Item:[],CategoryId:ctgrId});
        }
    });
    if(blogList.length===0){
        return(
            <div class="container">
            <div className="pro-not-found-img-subcategory">
                <strong> <img src="/contents/assets/images/No-blog-found.png" alt="" /> </strong>
            </div>
            </div>
        )
       
    }
    else
    
    return (
        <>
        {
            blogList.map((item)=>(
                <div class="shop-way-superdrag-single-item">
        <Link to={'/blog/'+item.id} >
            <div class="shop-drag-img">
                <img src={item.image} alt="gif" />
                <div class="post-date">
                    <span class="post-date-day"> 23</span>
                    <span class="post-date-month">Jul</span>
                </div>
            </div>
            <div class="shop-drag-comntent">
                <div class="meta-author">
                    <span>Posted by <small>{item.postedBy}</small></span>
                </div>
                <h3>{item.postName}</h3>
                
                <p>{item.postContent}</p>
                <h4 class="block-btn">{item.buttonText}<img class="dot-img-hover" src="/contents/assets/images/3dot.png" alt="img" /></h4>
            </div>
        </Link>
    </div>
            ))
        }
        </>
        
    )
}
export default BlogSingleItem;