const errorHandler =
require("./middleware/errorMiddleware");

const orderRoutes=
require(
"./routes/orderRoutes"
);

const userRoutes =
require(
"./routes/userRoutes"
);

const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");

require("dotenv")
.config();

const productRoutes =
require("./routes/productRoutes");

const app =
express();

app.use(
express.json()
);

app.use(
cors()
);

mongoose
.connect(
process.env.MONGO_URI
)
.then(()=>{

console.log(
"MongoDB Connected"
);

app.listen(
5000,
()=>{

console.log(
"Server running"
);

});

});

app.use(
"/api/products",
productRoutes
);

app.use(
"/api/users",
userRoutes
);

app.use(
"/api/orders",
orderRoutes
);

app.use(
errorHandler
);