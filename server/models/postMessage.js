import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    latitude: Number,
    longitude: Number
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;