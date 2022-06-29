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

export const userIfExist = "/api/v1/Auth/PhoneExists?phone=";
export const getOtp = "/api/v1/Auth/RequestOTP";
export const verifyOtp = "/api/v1/Auth/Register";
export const login = "/api/v1/Auth/Login";
export const RESET_PASSWORD = "/api/v1/Auth/ResetPassword";
export const GET_PRODUCTS_BY_CATEGORY = "/api/v1/Categories/";
export const GET_ADDRESS = "/api/v1/Addresses";
export const postAddress = "/api/v1/Addresses";
export const addressDivisions = "/api/v1/Provinces";
export const addressDistrict = "/api/v1/Districts/ByProvince/";
export const addressArea = "/api/v1/Upazilas/ByDistrict/";
export const POST_ORDER = "/api/v1/Orders";
export const POST_ORDER_PAYMENT = "/api/v1/Orders/PaymentInfo";
export const postComplain = "/api/v1/Complains";
export const getProfileInfo = "/api/v1/Customers";
export const updateProfileInfo = "/api/v1/Customers";
export const GET_PROMOTIONAL = "/api/v1/Promotions";
export const GET_ORDERS = "/api/v1/Orders";
export const GET_PRODUCT_DETAILS = "/api/v1/Products/";
export const GET_ORDER_DETAILS = "/api/v1/Orders/";
export const POST_CONTACT = "/api/v1/Contacts";
export const GET_LEVEL2_Products = "/api/v1/Categories/L2/";
export const GET_LEVEL3_Products = "/api/v1/Categories/L3/";
export const GET_LEVEL4_Products = "/api/v1/Categories/L4/";
export const CANCLE_ORDER = "/api/v1/Orders/cancel/";
export const CHILD_PRODUCT_LVL_WISE = "/api/v1/Products/Category/";
export const GET_DISPLAY_PRODUCTS = "/api/v1/Products/Display/";
export const GET_FESTIVAL = "/api/v1/Collections";
export const PRODUCT_REVIEWS = "/api/v1/Reviews";

export const GET_TOP_OFFERS = "/api/v1/AppData/Offer";
export const GET_NEWIN_PRODUCT = "/api/v1/Products/New/";
export const GET_TOPOFFERS = "/api/v1/AppData/Offer";
export const GET_BRANDS = "/api/v1/Brands";
export const ADD_WISH_ITEM = "/api/v1/Wishlist/Add/";
export const REMOVE_WISH_ITEM = "/api/v1/Wishlist/Remove/";
export const GET_WISH_ITEMS = "/api/v1/Products/wishlist";
export const GET_PRODUCT_PROFILE = "/api/v1/Products/Profile";
export const GET_NOTIFICATIONS = "/api/v1/Notifications";
export const MARK_UNSEEN = "/api/v1/Notifications/MarkAsUnseen?";

export const SEARCH_PRODUCT = "/api/v1/Products/Search";

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
