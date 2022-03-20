const  reactionSchema  = require('./Reaction');
const { Schema, model } = require('mongoose');
const formatDate = require('../utils/data')

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
            default: Date.now,
            get: timestamp => formatDate(timestamp)
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
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function (){
        return this.reactions.length
    })

const Thought = model('Thought', thoughtSchema)

module.exports = Thought