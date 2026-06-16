const mongoose =
require("mongoose");

const cartSchema =
mongoose.Schema(
{
userId:String,

title:String,

description:String,

mainImg:String,

size:String,

quantity:Number,

price:Number,

discount:Number

},
{
timestamps:true
}
);

module.exports=
mongoose.model(
"Cart",
cartSchema
);