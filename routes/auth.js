const router = require('express').Router();
const User = require('../models/user');
const { registerValidation } = require('../validation');
const bcrypt = require('bcrypt');

// registration
router.post("/register", async (req, res) => {
    //validate the user input (name, email, password)
    const { error } = registerValidation(req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message });
    }

    //check if the email is already registered
    const emailExist = await User.findOne({email: req.body.email});

    if (emailExist) {
        return res.status(400).json({error: "Email already exists"});
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //create a user object and save in the db
    const userObject = new User({
        name: req.body.name,
        email: req.body.email,
        password
    });

    try {
        const savedUser = await userObject.save();
        res.json({error: null, data: savedUser._id});

    } catch (error) {
        res.status(400).json({error})
    }
});

//login
router.post("/login", async (req, res) => {
    return res.status(200).json({ msg: "login route..." });
})

module.exports = router;