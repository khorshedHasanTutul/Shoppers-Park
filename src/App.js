import { MainHeader } from './components/MainHeader/MainHeader';
import { Route, Switch} from 'react-router';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/Cart/ShoppingCart';
import Brands from './pages/Brands';
import Blog from './pages/Blog';
import TopOffers from './pages/TopOffers';
import Halloween from './pages/Festival';
import ErrorPage from './pages/ErrorPage';
import SingleBlogPage from './pages/SingleBlogPage';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TermsCondition from './pages/TermsCondition';
import ReturnPolicy from './pages/ReturnPolicy';
import BrandCategoryItem from './pages/BrandCategoryItem';
import CategoryWiseItem from './pages/CategoryWiseItem';
import SubCategoryWiseItem from './pages/SubCategoryWiseItem';
import SubSubCategoryWiseItem from './pages/SubSubCategoryWiseItem';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import About from './pages/About';
import Payment from './pages/CheckOut';
import NewInShop from './pages/NewInShop';
import Notifications from './pages/Notifications';



function App() {

  return (
    <div className="App all-wapper-overflow">
      <MainHeader />
      <main className="banner-slider-area">
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
             <Halloween />
          </Route>
          <Route path="/blog" exact>
              <Blog />
          </Route>
          <Route path="/blog/:id" >
          <SingleBlogPage />
          </Route>
          <Route path="/brands/:id">
          <BrandCategoryItem />
          </Route>
          <Route path="/category/:id">
          <CategoryWiseItem />
          </Route>
          <Route path="/subcategory/:categoryId/:subCategoryId" exact>
          <SubCategoryWiseItem />
          </Route>
          <Route path="/categoryitem/:categoryId/:subCategoryId/:subItemId" exact>
          <SubSubCategoryWiseItem />
          </Route>
          <Route path="/product/:id">
          <ProductDetails />
          </Route>
          <Route path="/newinShop">
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
          <Route path="/checkout" >
            <Payment />
          </Route>
          <Route path="/*" >
          <ErrorPage />
          </Route>
        </Switch>
      </main>
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default App;