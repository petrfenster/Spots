import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    location: {
        type: geoLocation,
        default: new geoLocation()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;