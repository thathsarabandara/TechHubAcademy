const User = require("../../models/auth/User");
const UserPassword = require("../../models/auth/UserPassword");
const hashedPassword = require('../../utils/hashedPasswords');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the username already exists
        // const validUsername = await User.findOne({ username });
        // if (validUsername) {
        //     return res.status(400).json({ message: "Username already exists." });
        // }

        // // Check if the email already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ message: "Email already registered." });
        // }

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            isActive: false, // Assuming a user needs to verify their email
        });
        await newUser.save();

        // Hash the password
        const userhashPassword = await hashedPassword.hashPassword(password);
        if (!userhashPassword) {
            return res.status(500).json({ message: "Error hashing password." });
        }

        // Create a new UserPassword instance
        const newPassword = new UserPassword({
            user_id: newUser.user_id, // Ensure this references the correct user
            hashedPassword: userhashPassword,
            isActive: false, // You may want to manage this separately
        });
        await newPassword.save();

        // Send a response
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Server error." });
    }
};
