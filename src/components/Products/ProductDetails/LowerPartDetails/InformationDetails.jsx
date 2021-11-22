import React from 'react';
import appData from '../../../DataSource/appData';

const InformationDetails = ({product_id}) => {
    const conactData=appData.categoryProducts.concat(appData.TrandingProducts);
    const data=conactData.find(item=>item.Id==product_id);
    const categoryData=appData.ShopCategory.find(item=>item.categoryId==data.category_id);
    
    return (
        <div class="tab-content detalis-page-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="product-i-tab-content">
            <table class="table table-bordered">
                <tbody>
                <tr>
                    <td width="200">Company</td>
                    <td>{data.Ct}</td>
                </tr>
                <tr>
                    <td>Generic Name</td>
                    <td>{data.GN}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{categoryData.categoryName}</td>
                </tr>
                <tr>
                    <td>Strength</td>
                    <td> . </td>
                </tr>
                <tr>
                    <td>Unit Type</td>
                    <td> - </td>
                </tr>
            </tbody></table>
        </div>
        {/* <!-- product desc review information  --> */}
    </div>
    );
};

export default InformationDetails;