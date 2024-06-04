import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products_header">
        <h1>Trending Products</h1>
      </div>

      <div className="product_cards">
        <div className="products_item">
          <img
            src="https://www.fervalle.com/wp-content/uploads/2022/07/Green-Broccoli-Transparent-Images-PNG.png"
            alt="fruits"
          />
          <div>
                <h2>
                  Farm fresh organic
                  <br />
                  fruits 250g
                </h2>
                <h3>
                  <span>7.99$</span> /kg
                </h3>
                <span className="offer">-30%</span>
                 <HiMiniShoppingBag size={50} className="shopping" />
          </div>
        </div>
        <div className="products_item">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/332/685/original/passion-fruit-transparent-background-png.png"
            alt="fruits"
          />
          <h2>
            Farm fresh organic
            <br />
            fruits 250g
          </h2>
          <h3>
            <span>7.99$</span> /kg
          </h3>
          <span className="offer">-30%</span>
            <HiMiniShoppingBag size={50} className="shopping" />
        </div>
        <div className="products_item">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Mandarin-PNG-Image-HD-300x225.png"
            alt="fruits"
          />
          <h2>
            Farm fresh organic
            <br />
            fruits 250g
          </h2>
          <h3>
            <span>7.99$</span> /kg
          </h3>
          <span className="offer">-30%</span>
           <HiMiniShoppingBag size={50} className="shopping" />
        </div>
        <div className="products_item">
          <img
            src="https://pngfile.net/public/uploads/preview/kiwi-fruit-png-free-download-315668520771zum9m1whc.png"
            alt="fruits"
          />
          <h2>
            Farm fresh organic
            <br />
            fruits 250g
          </h2>
          <h3>
            <span>7.99$</span> /kg
          </h3>
          <span className="offer">-30%</span>
          <HiMiniShoppingBag size={50} className="shopping" />
        </div>
        <div className="products_item">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/23/17/29/banana-1218133_960_720.png"
            alt="fruits"
          />
          <h2>
            Farm fresh organic
            <br />
            fruits 250g
          </h2>
          <h3>
            <span>7.99$</span> /kg
          </h3>
          <span className="offer">-30%</span>
          <h2>
            Farm fresh organic
            <br />
            fruits 250g
          </h2>
          <h3>
            <span>7.99$</span> /kg
          </h3>
          <span className="offer">-30%</span>
            <HiMiniShoppingBag size={50} className="shopping" />
        </div>
      </div>
    </div>
  );
};

export default Products;
