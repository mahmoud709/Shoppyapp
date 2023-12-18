import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../utils/api";

export let ProductsContext = createContext(null);

function ProductsProvider(props) {
  const [products, setProducts] = useState([]);
  const apiUrl = `${API_URL}/products`;

  async function getProducts() {
    const {data} = await axios.get(apiUrl);
    setProducts(data.allProducts);
  }
  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
