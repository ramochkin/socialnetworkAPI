const  reactionSchema  = require('./Reaction');
const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now
            //TODO: Getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
            //TODO: Link user with thought
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const Thought = model('Thought', thoughtSchema)

module.exports = Thought