import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import AddProductForm from "./components/Products/AddProduct";
import Products from "./components/Products/Products";
import ProductsProvider from "./context/getProducts";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import ProductTable from "./components/dashboard/ProductTable";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Signup/Signup";
import Cart from "./components/Shoppingcart/Cart";
import Contact from "./components/Contact/Contact";
import Complaints from "./components/dashboard/Complaints";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Aboutus from "./components/Aboutus/Aboutus";
import AddCategory from "./components/Categories/AddCategory";
import UserProfile from "./components/Profile/UserProfile";
import { useEffect, useState } from "react";
import jwtDecode from 'jwt-decode';
import ShoppingCartProvider from "./context/Shoppingcart.js";
import Footer from './components/Footer/Footer';
import PaymentForm from "./components/pay/Payment.jsx";

function App() {

  const [userData, setuserData] = useState(null);

  function saveUserData() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setuserData(decodedToken);
    }
  }
  function logout() {
    localStorage.removeItem("token");
    setuserData(null);
  }
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      saveUserData();
    }
  }, [])
  return (
    <ShoppingCartProvider>
      <ProductsProvider>
        <Nav userData={userData} logout={logout} saveUserData={saveUserData}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="products" element={<ProductTable />} />
            <Route path="addProduct" element={<AddProductForm />} />
            <Route path="/dashboard/addcategory" element={<AddCategory />} />
            <Route path="complaints" element={<Complaints />} />
          </Route>
          <Route path="/dashboard/addProduct" element={<AddProductForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:_id" element={<ProductsDetails />} />
          <Route path="/table" element={<ProductTable />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login saveUserData={saveUserData}/>} />
          <Route path="/signup" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart/payment" element={<PaymentForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </ProductsProvider>
    </ShoppingCartProvider>

  );
}

export default App;
