const jwt = require("jsonwebtoken")

const notesAuth = (req, res, next) => {
    const token = req.headers.authorization;
    var decoded = jwt.verify(token, 'masai');
    if(decoded){
        req.body.userId = decoded.userId;
        console.log(decoded)
        next();
    }
    else{
        res.send({msg:"login First "})
    }
}

module.exports = notesAuth