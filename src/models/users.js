import mongoose from "mongoose";
// import passportLocalMongoose from  'passport-local-mongoose';

export const userSchema = mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatarURL: String,
    active: { type: Boolean, default: false },
    token: String
});
// userSchema.plugin(passportLocalMongoose);
userSchema.methods.activate = function (cb) {
    this.active = true;
    return this.save();
};

export const User = mongoose.model("User", userSchema);
