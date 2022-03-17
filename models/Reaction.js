const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //TODO: Use Mongoose's ObjectId data type
            // Default value is set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            // TODO: Confirm this is right, linked with the user
        },
        createdAt: {
            type: Date,
            default: Date.now
            //TODO: Getter method to format the timestamp on query
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)