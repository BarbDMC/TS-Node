"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    idCard: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    secondSurname: { type: String },
    email: { type: String, required: true, unique: true },
});
exports.default = mongoose.model('User', UserSchema);
