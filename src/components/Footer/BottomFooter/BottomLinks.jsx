import React from 'react'
import { Link } from 'react-router-dom';
import appData from '../../DataSource/appData';

 const BottomLinks = () => {
     
    return (
        <div class="footer-widget-single f-widget-2">
                        <h2>USEFUL LINKS</h2>
                        <ul>
                            {appData.BottomLinks.map((links)=>(
                                <li><Link to={links.to}>{links.text}</Link></li>
                            ))}
                            
                        </ul>
                    </div>
    )
}
export default BottomLinks;
