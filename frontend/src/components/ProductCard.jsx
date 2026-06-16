import { useNavigate }
from "react-router-dom";

export default function ProductCard({

product

}){

const navigate=
useNavigate();

return(

<div
className=
"card shadow"
>

<div
className=
"card-body"
>

<h4>

{product.name}

</h4>

<h5>

₹ {product.price}

</h5>

<button

className=
"btn btn-success w-100"

onClick={()=>

navigate(
"/cart"
)

}

>

Buy Now

</button>

</div>

</div>

);

}