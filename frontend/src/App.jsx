import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </>
  );
}

export default App;