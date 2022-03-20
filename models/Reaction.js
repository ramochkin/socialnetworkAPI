const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/data')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)


module.exports = reactionSchema