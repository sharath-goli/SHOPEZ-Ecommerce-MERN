const mongoose =
require("mongoose");

const adminSchema =
mongoose.Schema(
{

banner:String,

categories:[String]

}
);

module.exports=
mongoose.model(
"Admin",
adminSchema
);