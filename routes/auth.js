const router = require('express').Router();
const user = require('../models/user');
const { registerValidation } = require('../validation');

// registration
router.post("/register", async (req, res) => {
    //validate the user input (name, email, password)
    const { error } = registerValidation(req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message });
    }
    //check if the email is already registered
    //hash the password
    //create a user object and save in the db
    //return res.status(200).json({ msg: "Register route..." });
})

//login
router.post("/login", async (req, res) => {
    return res.status(200).json({ msg: "login route..." });
})

module.exports = router;