const bcrypt = require('bcrypt');
const User = require('../Models/userModel.js');

const createUser = async (req, res) => {
    const { firstname, lastname, username, email, password, confirmpassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedconfirmPassword = await bcrypt.hash(confirmpassword, 10);

        await User.create(firstname, lastname, username, email, hashedPassword, hashedconfirmPassword);
        res.json({ message: 'user added successfully' });
        //res.status(201).json({ success: true, msg: 'User created' });
    } 
    catch (err) {
        res.status(400).json({ success: false,error: 'user regestired fail'});
    }
};

module.exports = {
    createUser
};
