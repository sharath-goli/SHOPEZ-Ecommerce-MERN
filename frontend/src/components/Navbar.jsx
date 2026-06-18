import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
      navbar
      navbar-expand-lg
      navbar-dark
      bg-dark
      sticky-top
      shadow
      "
    >
      <div className="container">

        <Link
          to="/"
          className="
          navbar-brand
          fw-bold
          fs-3
          "
        >
          🛍 ShopEZ
        </Link>

        <div>

          <Link
            to="/"
            className="
            btn
            btn-outline-light
            me-2
            "
          >
            Home
          </Link>

          <Link
            to="/products"
            className="
            btn
            btn-outline-light
            me-2
            "
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="
            btn
            btn-warning
            me-2
            "
          >
            Cart
          </Link>

          <Link
            to="/register"
            className="
            btn
            btn-outline-light
            me-2
            "
          >
            Register
          </Link>

         <Link
to="/login"
className="
btn
btn-success
"
>

Login

</Link>

        </div>

      </div>
    </nav>
  );
}