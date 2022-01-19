const {Schema, model} = require("mongoose");


const postSchema = new Schema({
    picture: { type: String, required: true},
    caption:{ type: String, required: false},
    user:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
        
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: false
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref:"comments",
            required: false
        }
    ]
},{
    versionKey: false,
    timestamps: true
});


module.exports = model("posts", postSchema);