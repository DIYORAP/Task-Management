import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required.'],
        trim: true 
    },
    description: {
        type: String,
        required: [true, 'Task description is required.']
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },
    category: {
        type: String,
        enum: ['Work', 'Personal', 'Urgent', 'Other'],
        default: 'Other'
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;