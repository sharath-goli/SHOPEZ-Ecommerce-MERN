import {
useNavigate
}
from
"react-router-dom";

export default function Cart(){

const navigate=
useNavigate();

return(

<div className="container mt-5">

<h2>

My Cart

</h2>

<div
className=
"card p-4"
>

<p>

Your cart is empty

</p>

<button

className=
"btn btn-primary"

onClick={()=>

navigate(
"/products"
)

}

>

Continue Shopping

</button>

</div>

</div>

);

}