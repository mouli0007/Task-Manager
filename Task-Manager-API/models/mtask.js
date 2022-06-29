const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'Must Provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
        minlength : [3, 'name cannot be less than 3 characters'],
    },
    completed: {
        type: Boolean,
        default:false,
    }
});

module.exports = mongoose.model('Task',TaskSchema);