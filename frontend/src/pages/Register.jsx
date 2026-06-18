export default function Register(){

return(

<div className="container mt-5">

<div
className="
card
p-5
shadow
mx-auto
"
style={{

maxWidth:"500px"

}}
>

<h2>

Register

</h2>

<input
className="
form-control
mb-3
"
placeholder="Name"
/>

<input
className="
form-control
mb-3
"
placeholder="Email"
/>

<input
type="password"
className="
form-control
mb-3
"
placeholder="Password"
/>

<button
className="
btn
btn-warning
w-100
"
onClick={()=>
alert("Registered Successfully")
}
>

Register

</button>

</div>

</div>

);

}