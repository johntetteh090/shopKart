import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // const product = []
  let [skusToDelete,setSkuDelete] = useState([]);

  const navigate = useNavigate();
  let validation = false;

  function checkValidation(productDetails) {
    const {
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
    } = productDetails;
    if (
      sku === "" ||
      name === "" ||
      price === "" ||
      image === "" ||
      selectedOption === "Select OP"
    ) {
      alert("sku, name, price and product type can't be Empty");
      validation = false;
    } else {
      if (selectedOption === "dvd" && size === "") {
        alert("Please, provide size");
      } else if (selectedOption === "dvd") {
        validation = true;
      }
      if (
        selectedOption === "furniture" &&
        (height === "" || length === "" || width === "")
      ) {
        alert("Please, provide dimensions");
      } else if (selectedOption === "furniture") {
        validation = true;
      }
      if (selectedOption === "book" && weight === "") {
        alert("Please, provide weight");
      } else if (selectedOption === "book") {
        validation = true;
      }
    }
  }

  function saveProduct(productDetails) {
    const {
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
    } = productDetails;

    checkValidation(productDetails);

    // console.log(validation);

    //check if the product is already in the  local storage
    if (product.some((item) => item.sku == sku)) {
      // alert(typeof item.sku, " ---> ", typeof sku);
      alert("Product already exists");
    } else {
      if (validation) {
        if (selectedOption === "dvd") {
          product.push({
            size,
            sku,
            name,
            price,
            date: Date.now(),
            selectedOption,
            image,
          });
        } else if (selectedOption === "book") {
          product.push({
            weight,
            sku,
            name,
            price,
            date: Date.now(),
            selectedOption,
            image,
          });
        } else if (selectedOption === "furniture") {
          product.push({
            length,
            width,
            height,
            sku,
            name,
            price,
            date: Date.now(),
            selectedOption,
            image,
          });
        }

        localStorage.setItem("products", JSON.stringify(product));
        navigate("/");
      }
    }
  }

  const [a, b] = useState(false);
  const massDelete = () => {
    let filteredProduct = product.filter(
      (item) => !skusToDelete.includes(item.sku)
    );
    // skusToDelete = [];
    // console.log("----",skusToDelete)
    localStorage.setItem("products", JSON.stringify(filteredProduct));
    setSkuDelete([])
    b(true);
  };

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("products")));
    // skusToDelete = [];
  }, [a,skusToDelete]);

  const memoProducts = useMemo(
    () => ({
      saveProduct,
      product,
      skusToDelete,
      massDelete,setSkuDelete
    }),
    [saveProduct, product, skusToDelete, massDelete,setSkuDelete]
  );
  return (
    <ProductContext.Provider value={memoProducts}>
      {children}
    </ProductContext.Provider>
  );
};

export default function useProduct() {
  return useContext(ProductContext);
}

  