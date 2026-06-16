const protect =
(req,res,next)=>{

const email =
req.headers.email;

if(
email !==
"admin1@gmail.com"
){

return res
.status(401)
.json({

message:
"Access Denied"

});

}

next();

};

module.exports =
protect;