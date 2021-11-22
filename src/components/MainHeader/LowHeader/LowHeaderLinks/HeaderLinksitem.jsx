import React from 'react'
import HeaderLinks from './HeaderLinks';

const HeaderLinksitem = () => {
    const links=[
        {
            name:'Home',
            to:'/'

        },
        {
            name:'Brands',
            to:'/brands'

        },
        {
            name:'Top Offers',
            to:'/offers'
        },
        {
            name:'Festival',
            to:'/festival'
        },
        {
            name:'About Us',
            to:'/about'
        },
        {
            name:'Contact Us',
            to:'/contact'
        },
        {
            name:'Oh My Blog',
            to:'/blog'
        }
        
    ];
    return (
        <HeaderLinks links={links}/>
    )
}
export default HeaderLinksitem;