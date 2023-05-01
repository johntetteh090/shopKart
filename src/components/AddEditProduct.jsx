import React, { useState } from "react";
import "../css/AddEditProduct.css";
import { useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function AddEditProduct() {
  const [selectedOption, setSelectedOption] = useState("Select OP");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [height, setHeigth] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");

  
  //useProduct Hook
  const { saveProduct } = useProduct();

  const productDetails = {
    selectedOption,
    sku,
    name,
    price,
    height,
    width,
    length,
    weight,
    size,
    image,
  };

  const navigate = useNavigate();

  //This funtion is for options Tag
  return (
    <div className="container_section">
      <div className="header_section">
        <div className="header_title">
          <h4 className="header-text">
            Brands
          </h4>
          <h4 className="header-text">About</h4>
        </div>
        <div>
          <button
            id="save"
            type="button"
            onClick={() => saveProduct(productDetails)}
          >
            Save
          </button>
          <button id="cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
      <div className="body_section">
        <div className="first_section">
          <div className="input_section">
            <span>SKU</span>
            <input
              type="text"
              value={sku}
              onChange={(event) => setSku(event.target.value)}
            />
          </div>
          <div className="input_section">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input_section">
            <span>Price($)</span>
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="input_section">
            <span>Image</span>
            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>
          <div className="select_section">
            <span style={{ marginRight: 20 }}>Type Switcher</span>
            <select
              name=""
              id=""
              onChange={(event) => setSelectedOption(event.target.value)}
              value={selectedOption}
            >
              <option value="select product" id="Select Product">
                Select Product
              </option>
              <option value="dvd" id="dvd">
                DVD
              </option>
              <option value="furniture" id="furniture">
                Furniture
              </option>
              <option value="book" className="book">
                Book
              </option>
            </select>
          </div>
        </div>

        {/* Thsi is the furniture */}

        {selectedOption === "furniture" ? (
          <div className="second_section">
            <div className="input_section">
              <span>Height(CM)</span>
              <input
                type="text"
                value={height}
                onChange={(event) => setHeigth(event.target.value)}
              />
            </div>
            <div className="input_section">
              <span>Width(CM)</span>
              <input
                type="text"
                value={width}
                onChange={(event) => setWidth(event.target.value)}
              />
            </div>
            <div className="input_section">
              <span>Length(CM)</span>
              <input
                type="text"
                value={length}
                onChange={(event) => setLength(event.target.value)}
              />
            </div>
          </div>
        ) : selectedOption === "book" ? (
          //   {/* This is the book section */}

          <div className="other_internal_sections">
            <div className="input_section">
              <span>Weight(Kg)</span>
              <input
                type="text"
                onChange={(event) => setWeight(event.target.value)}
              />
            </div>
          </div>
        ) : selectedOption === "dvd" ? (
          //  {/* This is the DVD section */}

          <div className="other_internal_sections">
            <div className="input_section">
              <span>Size(MB)</span>
              <input
                type="text"
                value={size}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
          </div>
        ) : null}

        
      </div>
     
    </div>
  );
}

export default AddEditProduct;
