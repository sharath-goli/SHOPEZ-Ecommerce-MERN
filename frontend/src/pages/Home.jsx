import { useNavigate } from "react-router-dom";

export default function Home(){

const navigate = useNavigate();

return(

<div className="container">

<div className="text-center mt-5">

<h1 className="display-3">

ShopEZ

</h1>

<p className="lead">

Discover. Shop. Enjoy.

</p>

<button

className="btn btn-dark"

onClick={()=>

navigate("/products")

}

>

Shop Now

</button>

</div>

</div>

);

}