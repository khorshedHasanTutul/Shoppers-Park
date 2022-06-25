import React from "react";
import { Link } from "react-router-dom";

const ProductDetailsHeader = ({ categories }) => {
  return (
    <section class="breadcrumb-main-area">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {categories.map((item, index) => (
              <li class="breadcrumb-item active" aria-current="page">
                <a href>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ProductDetailsHeader;
