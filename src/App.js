import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Brands from "./pages/Brands";
import Blog from "./pages/Blog";
import TopOffers from "./pages/TopOffers";
import ErrorPage from "./pages/ErrorPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import ReturnPolicy from "./pages/ReturnPolicy";
import BrandCategoryItem from "./pages/BrandCategoryItem";
import CategoryWiseItem from "./pages/CategoryWiseItem";
import SubCategoryWiseItem from "./pages/SubCategoryWiseItem";
import SubSubCategoryWiseItem from "./pages/SubSubCategoryWiseItem";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NewInShop from "./pages/NewInShop";
import Notifications from "./pages/Notifications";
import Festival from "./pages/Festival";
import RequestProducts from "./pages/RequestProducts";
import Consultancy from "./pages/Consultancy";
import { useLocation } from "react-router-dom";
import ShopAll from "./components/ShopAll/ShopAll";
import Checkout from "./pages/Checkout";
import authContext from "./Store/auth-context";
import { httpV2 } from "./Service/httpService2";
import { GET_PRODUCT_PROFILE } from "./lib/endpoints";
import appContext from "./Store/app-context";

function App() {
  const authCtx = useContext(authContext);
  const appCtx = useContext(appContext);
  const [productInfo, setProductInfo] = useState();
  const location = useLocation();
  const headerRef = useRef();
  const mainRef = useRef();

  const getProductProfile = useCallback(() => {
    httpV2.get({
      url: GET_PRODUCT_PROFILE,
      before: () => {},
      successed: (res) => {
        setProductInfo(res.data);
        if (authCtx.isLoggedIn === true) {
          res.data.wishlisted.map((item) =>
            appCtx.wishList.storewishItems(item)
          );
          appCtx.singleTask.storeNotification(res.data.notificationCount);
        }
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    const headerHeight = headerRef.current?.clientHeight;
    mainRef.current.style.paddingTop = `${headerHeight}px`;
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    getProductProfile();
  }, []);

  useEffect(() => {
    localStorage.removeItem("USER");
  }, []);

  return (
    <>
      <div className="App all-wapper-overflow">
        <MainHeader ref={headerRef} />
        <main className="banner-slider-area" ref={mainRef}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/brands" exact>
              <Brands />
            </Route>
            <Route path="/Offers">
              <TopOffers />
            </Route>
            <Route path="/festival">
              <Festival />
            </Route>
            <Route path="/request">
              <RequestProducts />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <SingleBlogPage />
            </Route>
            <Route path="/brands/:id">
              <BrandCategoryItem />
            </Route>
            <Route path="/category/:id">
              <CategoryWiseItem />
            </Route>
            <Route path="/subcategory/:id" exact>
              <SubCategoryWiseItem />
            </Route>
            <Route path="/productsSub/:id" exact>
              <SubSubCategoryWiseItem />
            </Route>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/newinShop/:id">
              <NewInShop />
            </Route>
            <Route path="/notification" exact>
              <Notifications />
            </Route>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/termscondition">
              <TermsCondition />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/return">
              <ReturnPolicy />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/consultancy">
              <Consultancy />
            </Route>
            <Route path={"/shopall/:id"}>
              <ShopAll />
            </Route>
            <Route path="/*">
              <ErrorPage />
            </Route>
          </Switch>
        </main>
        <ShoppingCart />
        <Footer />
      </div>
      {/* <Suspense /> */}
    </>
  );
}

export default App;
