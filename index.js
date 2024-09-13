import mongoose from "mongoose";
import express from 'express';
import dotenv from "dotenv";
import bodyParser from "body-parser";
import TaskRoute from './routes/Task.route.js'
const port = process.env.PORT || 3000;
const app=express();
dotenv.config();
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.use("/api",TaskRoute);

  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });