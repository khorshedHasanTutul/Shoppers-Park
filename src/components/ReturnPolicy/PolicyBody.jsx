import React from 'react';
import { ReturnPolicy } from '../../Service/AppService';

const PolicyBody = () => {
    const data=ReturnPolicy;
    return (
        <section class="return-policy-area">
        <div class="container">
            <div class="return-policy-main">
                <h2>{data.headertext}</h2>
                
                <ul>
                    {
                        data.list.map(item=>(
                            <li><small>0{item.id}</small>{item.text}</li>
                        ))
                    }
                </ul>
                {
                    data.paragraphtext.map(item=>(
                        <p>{item.text}</p>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default PolicyBody;