import { Link } from "react-router-dom";

export default function Navbar(){

return(

<nav
className=
"navbar navbar-dark bg-dark px-4"
>

<Link
className=
"navbar-brand"
to="/"
>

ShopEZ

</Link>

<div>

<Link
className=
"btn btn-outline-light me-2"
to="/products"
>

Products

</Link>

<Link
className=
"btn btn-outline-light me-2"
to="/cart"
>

Cart

</Link>

<Link
className=
"btn btn-warning me-2"
to="/login"
>

Login

</Link>

<Link
className=
"btn btn-success"
to="/register"
>

Register

</Link>

</div>

</nav>

);

}