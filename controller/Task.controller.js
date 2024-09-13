import Task from "../model/Task.model.js";
import express from 'express';
const router= express.Router();

export const createTask= async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message || 'Error creating task' });
    }
};



export const getAlltask= async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching tasks' });
    }
};


export const updateTask= async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'completed', 'dueDate', 'category'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();

        res.status(200).send(task);
    } catch (error) {
        res.status(400).send({ error: 'Error updating task' });
    }
};

export const deleteTask= async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send("delete task successfully");
        
    } catch (error) {
        res.status(500).send({ error: 'Error deleting task' });
    }
}; 



    
    export const taskcomplete=async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }

        if (task.completed) {
            return res.status(400).send({ error: 'Task is already completed' });
        }

        task.completed = true;
        await task.save();
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: 'Error completing task' });
    }
};

