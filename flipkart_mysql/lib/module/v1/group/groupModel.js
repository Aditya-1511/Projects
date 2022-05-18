// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');

var Schema = mongoose.Schema;
var User;

var MessageSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: constants.DB_MODEL_REF.USER
    }],
    socketId:[],
    blockUser:[{
        type: Schema.Types.ObjectId,
        ref: constants.DB_MODEL_REF.USER
    }],
    isRemove:{
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    },
    created: {
        type: Date,
        default: Date.now
    },
});

//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.GROUP, MessageSchema);

