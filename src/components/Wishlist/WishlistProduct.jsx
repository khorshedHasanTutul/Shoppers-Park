import React from "react";
import Paginator from "../Paginators/Paginators";
import ProductsInfoModel from "../Products/ProductsInfoModel";

const WishlistProduct = ({
  allWishItems,
  setAlert,
  params,
  pageChangeHandler,
}) => {
  return (
    <section class="catagory-product-area">
      <div class="catagory-main-product-area">
        {/* <!-- single product catagory main area --> */}
        <div class="product-catagory-main-flex owl-slider-perk">
          <div class="product-catagory-inner-flex owl-slider-perk-items">
            {/* <!-- single item --> */}
            {allWishItems.items.map((item) => (
              <div class="single-product-catagory-item">
                {/* <div class="wishlist-cross-btn">
                  <a href>
                    <i class="fa fa-times" aria-hidden="true"></i>
                    removed
                  </a>
                </div> */}
                {/* <div class="hover-eff-product">
                                <a title="Add to Wishlist" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                            </div> */}
                <ProductsInfoModel
                  item={item}
                  from={"api"}
                  setalert={setAlert}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <!-- single product catagory main area --> */}
      </div>
      <div className="paginator container">
        <Paginator
          items={allWishItems.totalCount}
          pageItems={params.Take}
          startPage={params.Index}
          onPageChange={pageChangeHandler}
        />
      </div>
    </section>
  );
};

export default WishlistProduct;
