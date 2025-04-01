
export function verifyAdmin (req,res,next) {

    req.user.role === "admin" 
    ? next()
    : res.status(403).send({error: "Admin role required"});

}