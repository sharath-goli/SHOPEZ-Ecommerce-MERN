const mongoose =
require("mongoose");

const orderSchema =
mongoose.Schema({

userId:{
type:String,
required:true
},

products:[
{
name:String,
price:Number
}
],

total:{
type:Number,
required:true
}

},
{
timestamps:true
}
);

module.exports=
mongoose.model(
"Order",
orderSchema
);