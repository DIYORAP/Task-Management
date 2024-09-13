# Task-Management

A simple task management API built with node.js, express, and mongoDB. This API allows users to create, view, update, and delete tasks, as well as mark tasks as completed, categorize themand add due dates. The application also includes validation and error handling to ensure smooth functionality.

## Features

- create tasks with a title, description, category, and due date.
- view all tasks.
- edit tasks (title, description, category, and due date).
- marktasks as completed.
- delete tasks.
- validationrequired fields and restricted operations.
- error handling.

1. Create a New Task

- Endpoint: POST /tasks

![Screenshot 2024-09-13 172942](https://github.com/user-attachments/assets/0d320bae-1aaa-4cfa-820c-2b9a52301fbc)

**Add the ability to categorize tasks.

![Screenshot 2024-09-13 173314](https://github.com/user-attachments/assets/04862ea0-bf1d-437b-968c-872b14aa2612)


2. View All Tasks
-Endpoint: GET /tasks

![Screenshot 2024-09-13 173944](https://github.com/user-attachments/assets/91d28080-4270-4054-bdb9-f94d627332b1)


3. Update a Task
Endpoint: PATCH /tasks/:id
![Screenshot 2024-09-13 174159](https://github.com/user-attachments/assets/61550b02-b918-4eaf-a4ae-9d1910cab007)

4. Mark a Task as Completed
Endpoint: PATCH /tasks/:id/complete

![Screenshot 2024-09-13 173647](https://github.com/user-attachments/assets/0feae2b8-0819-4852-bcb7-b3f2d1bf37a4)

**second time hit
![Screenshot 2024-09-13 173753](https://github.com/user-attachments/assets/c5150d86-ed2d-4657-9ac3-2769e51ea72e)

5.Delete a Task
Endpoint: DELETE /tasks/:id

![Screenshot 2024-09-13 175017](https://github.com/user-attachments/assets/27de0aad-ab6c-4e1e-86c4-6875734ddada)





