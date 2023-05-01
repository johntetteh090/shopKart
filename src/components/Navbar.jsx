import React from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function Navbar() {
  const navigate = useNavigate();

  // useProduct hook
  const {  massDelete } = useProduct();

  return (
    <div className="navbar_container">
      <div className="navbar_title">ShopKart</div>
      <div>
        <button
          className="navbar_save"
          onClick={() => navigate("/new-product")}
        >
          Add
        </button>
        {/* <button
          className="navbar_edit"
          onClick={() => navigate("/new-product")}
        >
          Edit
        </button> */}
        <button className="navbar_delete" onClick={massDelete}>
          Mass delete
        </button>
      </div>
    </div>
  );
}

export default Navbar;
