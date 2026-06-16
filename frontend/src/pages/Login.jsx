import {
useState
}
from "react";

import {
login
}
from "../services/authService";

export default function Login(){

const[
form,

setForm

]=
useState({

email:"",
password:""

});

const submit=
async()=>{

const res=
await login(
form
);

alert(
res.data.message
);

window.location=
"/products";

};

return(

<div className="container mt-5">

<h2>

Login

</h2>

<input
className=
"form-control mb-3"

placeholder=
"Email"

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

type=
"password"

className=
"form-control mb-3"

placeholder=
"Password"

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
className="btn btn-dark"
onClick={submit}
>
Login
</button>

</div>

);

}