const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { UserModel } = require("../model/user.model");
const userRouter = express();
userRouter.use(express.json());
userRouter.post("/register", async (req, res) => {
    try {
        const newUser = req.body;
        bcrypt.hash(newUser.pass, 4, async function (err, hash) {
            newUser.pass = hash;// adding hashed pwd to payload
            const user = new UserModel(newUser);
            await user.save();
            res.status(200).send({ msg: "new user added" })
        });
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: "error in adding new user" })
    }
})

// user login route 
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            console.log(email, user.pass);
            bcrypt.compare(pass, user.pass, function (err, result) {
                const token = jwt.sign({userId: user._id}, 'masai');
                result ?
                    res.status(200).send({ msg: "user logged in",token:token }) :
                    res.status(400).send({ msg: "Login Failed!" })

            });
        }
        else {
            res.status(400).send({ msg: "User not found" })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "Login Failed!" })
    }
})
module.exports = { userRouter };