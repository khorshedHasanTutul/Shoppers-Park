// const login = "/CustomerArea/AppCustomer/Login";
// const getOtp = "/MessagingArea/OtpMessage/WebRegister";
// const verifyOtp = "/MessagingArea/OtpMessage/Check";
const registration = "/CustomerArea/Customer/Add";
const division = "/AddressArea/Province/AutoComplete";
const getDistricts = "/AddressArea/District/AutoComplete";
const getAreas = "/AddressArea/Upazila/AutoComplete";
const createAddress = "/AddressArea/Address/Create";
const getAddress = "/AddressArea/Address/Get";
const updateInformation = "/CustomerArea/Customer/UpdateInfo";
const complainUrl = "/CommonArea/Complain/Add";
const postCuponCode = "/PromotionalArea/Coupon/Check";
const postContact = "/ContactArea/Contact/Add";
const addWishlist = "/WishListArea/WishList/Create";
const uploadProductImage = "/ProductOrderArea/Prescription/Add";

export const userIfExist = "api/v1/Auth/emailexists?phone=";
export const getOtp = "/api/v1/Auth/RequestOTP";
export const verifyOtp = "/api/v1/Auth/Register";
export const login = "/api/v1/Auth/Login";


export const endpoints = {
  login,
  // getOtp,
  verifyOtp,
  registration,
  division,
  getDistricts,
  getAreas,
  createAddress,
  getAddress,
  updateInformation,
  complainUrl,
  postCuponCode,
  postContact,
  addWishlist,
  uploadProductImage,
};
