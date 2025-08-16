import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema ({
    ConversationID: {
        type: String,
        required: true,
    },
    USerId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

export default mongoose.model("Message", MessageSchema);