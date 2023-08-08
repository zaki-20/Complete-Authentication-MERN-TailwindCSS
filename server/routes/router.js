const express = require("express");
const userdb = require("../models/userSchema")
const router = new express.Router();

router.post("/register", async (req, res) => {
    const { fname, email, password, cpassword } = req.body
    if (!fname, !email, !password, !cpassword) {
        res.status(422).json({ error: "fill out all details" })
    }
    try {
        const preUser = await userdb.findOne({ email: email })
        if (preUser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword
            });

            const storeData = await finalUser.save();

            console.log(storeData);
            // res.status(201).json({ status: 201, storeData })

        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

})

module.exports = router;



