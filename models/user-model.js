const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Need username :)"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    }
});

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;