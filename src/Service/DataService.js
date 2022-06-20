var data = window.APP_DATA;
//getMainCategories
export const getCategories = data[0];

export const getCategoryDataToObj = (item) => {
  return {
    id: item[0],
    name: item[1],
  };
};

//get dropdownmainCategories
export const getDropDownMainCategories = () => {
  return getCategories.map((item, index) => item[2]);
};

//get dropdownmainCategories
export const getDropDownCategories = (item) => {
  return item.map((item2, index) => item2[2]);
};

//get Banners
export const getBannersTemplate = data[1];
//get object banners Data
export const getBannerObjectFrom = (item) => {
  const data = {
    Id: item[0],
    Rank: item[1],
    Size: item[2],
    Image: item[3],
    Link: item[4],
  };
  return data;
};

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
    id: item[0],
    name: item[1],
    displayName: item[2],
    PackSize: item[3],
    image: item[5],
    currentPrice: item[6],
    discountPrice: item[8],
    orginalPrice: item[7],
    stockUnit: item[10],
    discountedPercentage: item[9],
    rank: item[11],

    // Brand_id: item[11],
    // Unit_id: item[12],
  };
  return productInfo;
};

export const returnDataAsObject = (item) => {
  const productInfo = {
    id: item.id,
    name: item.name,
    displayName: item.displayName,
    PackSize: item.packSize,
    image: item.imageURL,
    currentPrice: item.currentPrice,
    orginalPrice: item.originalPrice,
    discountPrice: item.discountedPrice,
    discountedPercentage: item.discountedPercentage,
    stockUnit: item.stockUnit,
    rank: item.rank,
  };
  return productInfo;
};

export const storeAddressObj = {
  name: "",
  mobile: "",
  email: "",
  division: { id: "", name: "" },
  district: { id: "", name: "" },
  area: { id: "", name: "" },
  address: "",
  type: "",
};
