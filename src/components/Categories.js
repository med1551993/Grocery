import React from "react";

const Categories = () => {
  return (
    <div className="categories" id="categories">
      <div className="products_header">
        <h1>Browse Our Categories</h1>
        {/* <button>SHOP NOW</button> */}
      </div>
      <div className="categories_cards">
        <div className="card">
          <img 
            src="https://www.fervalle.com/wp-content/uploads/2022/07/Green-Broccoli-Transparent-Images-PNG.png"
            alt="fruits" />
          <h3>Fruits</h3>
          <h4>34 items</h4>
        </div>
        <div className="card">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/332/685/original/passion-fruit-transparent-background-png.png"
            alt="fruits"
          />
          <h3>Fruits</h3>
          <h4>34 items</h4>
        </div>
        <div className="card">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Mandarin-PNG-Image-HD-300x225.png"
            alt="fruits"
          />
          <h3>Fruits</h3>
          <h4>34 items</h4>
        </div>
        <div className="card">
          <img
            src="https://pngfile.net/public/uploads/preview/kiwi-fruit-png-free-download-315668520771zum9m1whc.png"
            alt="fruits"
          />
          <h3>Fruits</h3>
          <h4>34 items</h4>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/23/17/29/banana-1218133_960_720.png"
            alt="fruits"
          />
          <h3>Fruits</h3>
          <h4>34 items</h4>
        </div>
      </div>
    </div>
  );
};

export default Categories;
