import React from 'react'
import HeaderLinks from './HeaderLinks';

const HeaderLinksitem = ({toggleClass}) => {
    const links=[
        {
            name:'Home',
            to:'/home'

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
            name:'Request Products',
            to:'/request'

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
        <HeaderLinks links={links} toggleClass={toggleClass}/>
    )
}
export default HeaderLinksitem;