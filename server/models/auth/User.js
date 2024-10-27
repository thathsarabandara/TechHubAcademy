const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Adding `async` to handle `await`
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isNew) {
        user.updatedAt = Date.now();
        return next();
    }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
