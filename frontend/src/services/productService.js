import axios from "axios";

const API =
"http://localhost:5000";

export const getProducts=
async()=>{

const res=
await axios.get(

`${API}/api/products`

);

return res.data;

};