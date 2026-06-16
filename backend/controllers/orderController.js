const Order =
require(
"../models/orderModel"
);

const createOrder =
async(req,res)=>{

try{

const order=
await Order.create(
req.body
);

res
.status(201)
.json(order);

}

catch(error){

res
.status(500)
.json({
message:error.message
});

}

};

const getOrders =
async(req,res)=>{

const orders=
await Order.find();

res.json(
orders
);

};

module.exports={

createOrder,

getOrders

};