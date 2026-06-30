function Checkout(){

return(

<div className="container mt-5">

<div
className="
card
shadow
p-5
"
>

<h1>

Checkout

</h1>

<input
className="
form-control
mb-3
"
placeholder="Address"
/>

<input
className="
form-control
mb-3
"
placeholder="Phone"
/>

<select
className="
form-control
mb-3
"
>

<option>

Cash On Delivery

</option>

<option>

UPI

</option>

</select>

<button
className="
btn
btn-success
"
onClick={()=>
alert("Order Placed")
}
>

Place Order

</button>

</div>

</div>

);

}

export default Checkout;