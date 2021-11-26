import React from 'react';
import { useParams } from 'react-router';
import BlogSinglePage from '../components/Blog/BlogSinglePage/BlogSinglePage';
import Parks from '../components/Parks/Parks';
import { BlogData } from '../Service/AppService';

const SingleBlogPage = () => {
    const {id}=useParams();
    let Blogs=
    BlogData.BlogArea.filter((blogItem)=>
         blogItem.id===+id
    )

    return(
        <>
        <Parks />
        <BlogSinglePage blogs={Blogs} id={id}/>
        </>
    );
};

export default SingleBlogPage;