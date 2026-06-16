import axios from "axios";

const API =
"http://localhost:5000";

export const register=
(data)=>
axios.post(
`${API}/api/users/register`,
data
);

export const login=
(data)=>
axios.post(
`${API}/api/users/login`,
data
);