const mongoose = require('mongoose');
const User = require('../auth/User'); // Adjust the path as necessary

const userPasswordSchema = new mongoose.Schema({
    user_id: {
        type: Number, // Change this back to Number to match user_id in User model
        required: true,
        ref: 'User', // Reference to the User model
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update updatedAt field on save
userPasswordSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const UserPassword = mongoose.model('UserPassword', userPasswordSchema);

module.exports = UserPassword;
