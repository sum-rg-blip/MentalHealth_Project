const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full name is required"]
    },
    phonenumber: {
        type: String,
        required: [true, "Phone number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, "Gender must be 'male' or 'female'"]
    },
    type: {
        type: String,
        enum: ['phonecall', 'videocall'],
        required: [true, "Type must be 'phonecall' or 'videocall'"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    service: { 
        type: String,
        default: ""
    },
    counseling: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model('Register', registerSchema);
