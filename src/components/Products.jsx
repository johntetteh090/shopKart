import React from "react";
import "../css/Products.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import useProduct from "../hooks/useProduct";

function Products() {
  const { product, skusToDelete, setSkuDelete } = useProduct();

  const handleChange = (event) => {
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked) {
      setSkuDelete([...skusToDelete, value]);
    } else {
      setSkuDelete(skusToDelete.filter((sku) => sku !== value));
    }
  };
  return (
    <div className="products_container">
      <Navbar />
      <Banner />
      <h3>Items For You!</h3>
      <div className="items_container">
        {product.map(({ image, price, sku, name }) => (
          <div key={sku}>
            <div
              className="item"
              style={{
                backgroundImage: `url(${require("../assets/" + image)})`,
                marginBottom: 20,
              }}
            >
              <input
                type="checkbox"
                className="checkbox"
                value={sku}
                checked={skusToDelete.includes(sku)}
                onChange={handleChange}
              />
            </div>
            <div className="item_info">
              <h3 className="item_title">{name}</h3>
              <h3 className="item_price">${parseFloat(price).toFixed(2)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
