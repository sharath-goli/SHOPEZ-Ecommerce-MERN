const User=
require("../models/userModel");

const bcrypt=
require("bcryptjs");

const registerUser=
async(req,res)=>{

try{

const hashed=
await bcrypt.hash(
req.body.password,
10
);

const user=
await User.create({

name:req.body.name,

email:req.body.email,

password:hashed

});

res
.status(201)
.json(user);

}

catch(error){

res
.status(500)
.json({
message:error.message
});

}

};

const loginUser=
async(req,res)=>{

try{

const user=
await User.findOne({

email:req.body.email

});

if(!user){

return res
.status(404)
.json({
message:
"User not found"
});

}

const valid=
await bcrypt.compare(

req.body.password,

user.password

);

if(!valid){

return res
.status(400)
.json({

message:
"Wrong password"

});

}

res.json({

message:
"Login Success",

user:user.name

});

}

catch(error){

res
.status(500)
.json({
message:error.message
});

}

};

module.exports={

registerUser,

loginUser

};