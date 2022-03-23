var data = window.appData;
//getMainCategories
export const getMainCategories = data[0];

//get dropdownmainCategories 
export const getDropDownMainCategories = () => {
  return getMainCategories.map((item, index) => item[2]);
};

//Notice
export const getNotice = data[2];

//get Display Products
export const getDisplayCategories=data[3]