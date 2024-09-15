import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import Task from '../model/Task.model.js';
import { createTask, getAlltask, updateTask, deleteTask, taskcomplete } from '../controller/Task.controller.js';
const app = express();
app.use(express.json());

app.post('/tasks', createTask);
app.get('/tasks', getAlltask);
app.patch('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);
app.patch('/tasks/:id/complete', taskcomplete);

const taskData = {
    title: "test task",
    description: "a test task description",
    completed: false,
    dueDate: new Date(),
    category: "Work"
};

beforeAll(async () => {
    const url = `mongodb://localhost:27017/task_db_test`; 
    await mongoose.connect(url);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Task API', () => {
    it('should create a task', async () => {
        const response = await request(app)
            .post('/tasks')
            .send(taskData)
            .expect(201);

        expect(response.body.title).toBe(taskData.title);
        expect(response.body.description).toBe(taskData.description);
    });

    it("get ali tasks", async () => {
        const response = await request(app).get('/tasks').expect(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should update task", async () => {
        const task = await Task.create(taskData);
        const response = await request(app)
            .patch(`/tasks/${task._id}`)
            .send({ title: 'updated Task Title' })
            .expect(200);

        expect(response.body.title).toBe('updated Task Title');
    });

    it(" delete a task", async () => {
        const task = await Task.create(taskData);
        await request(app)
            .delete(`/tasks/${task._id}`)
            .expect(200);
    });

    it(" mark task as complete", async () => {
        const task = await Task.create(taskData);
        const response = await request(app)
            .patch(`/tasks/${task._id}/complete`)
            .expect(200);

        expect(response.body.completed).toBe(true);
    });
});
