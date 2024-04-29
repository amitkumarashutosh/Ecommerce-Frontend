import React from "react";
import ProductList from "../features/productList/ProductList";
import Navbar from "../features/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default Home;
