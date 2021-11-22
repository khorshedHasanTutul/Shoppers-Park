import React from 'react'
import appData from '../../DataSource/appData';
import TopFooter from './TopFooter';

const FooterMapContent = () => {
    return (
        <>
        {
            appData.BottomParkContent.map((content)=> (
                <TopFooter content={content} />
            ))
        }
        </>
    )
}
export default FooterMapContent;
