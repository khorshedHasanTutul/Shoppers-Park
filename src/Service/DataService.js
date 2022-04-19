var data = window.appData;
//getMainCategories
export const getMainCategories = data[0];

//get dropdownmainCategories
export const getDropDownMainCategories = () => {
  return getMainCategories.map((item, index) => item[2]);
};

//get Banners
export const getBannersTemplate = data[1];
//get object banners Data
export const getBannerObjectFrom = (item)=>{
  const data = {
    Id: item[0],
    Rank: item[1],
    Size: item[2],
    Image: item[3],
    Link: item[4]
  }
  return data;
}



//Notice
export const getNotice = data[2];

//get Display Products
export const getDisplayCategories = data[3];

//get object from of display Data
export const getObjectFormatofData = (item) => {
  const getDisplayProductsInfo = {
    category_id: item[0],
    categoryName: item[1],
    rank: item[2],
    products: item[3],
  };
  return getDisplayProductsInfo;
};

//get Display Tranding Products
export const getTrandingDisplayProducts = data[4];

//Product Information
export const returnDataAsObjectProperties = (item) => {
  const productInfo = {
    Id: item[0],
    CategoryName: item[1],
    Nm: item[2],
    PackSize: item[3],
    image: item[4],
    MRP: item[6],
    Ds: item[7],
    Stock: item[9],
    Rank: item[10],
    Brand_id: item[11],
    Unit_id: item[12],
  };
  return productInfo;
};
