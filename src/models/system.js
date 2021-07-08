import mongoose from "mongoose";

export const systemSchema = mongoose.Schema({
    ip: String,
    ipid: String,
    cpu: String,
    vesion: String,

});

export const System = mongoose.model("System", systemSchema);
