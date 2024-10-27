const bcrypt = require('bcrypt');

// Function to hash a password
exports.hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Await the Promise
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        return null; // Consider throwing an error or returning a specific message
    }
}

// Function to verify a password against a hashed password
exports.verifyPassword = async (password, hashedPassword) => {
    try {
        const valid = await bcrypt.compare(password, hashedPassword); // Await the Promise
        return valid; // Return the result of the comparison
    } catch (error) {
        console.error('Error verifying password:', error);
        return false; // Return false if there's an error
    }
}
