import {
useState
}
from "react";

import {
register
}
from "../services/authService";

export default function Register(){

const[
form,

setForm

]=
useState({

name:"",
email:"",
password:""

});

const submit=
async()=>{

await register(
form
);

alert(
"Registered"
);

window.location=
"/login";

};

return(

<div className="container mt-5">

<h2>

Register

</h2>

<input
className="form-control mb-3"
placeholder="Name"
onChange={
e=>

setForm({

...form,

name:
e.target.value

})

}
/>

<input
className="form-control mb-3"
placeholder="Email"
onChange={
e=>

setForm({

...form,

email:
e.target.value

})

}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={
e=>

setForm({

...form,

password:
e.target.value

})

}
/>

<button
type="button"
className="btn btn-success"
onClick={submit}
>
Register
</button>
</div>

);

}