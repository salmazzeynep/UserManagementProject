# User Management Project

This project is a user management system that includes CRUD operations for users. The backend is written in Go and the frontend is written in TypeScript using React and Next.js.

## Project Structure

UserManagementProject/ ├── backend/ │ ├── main.go │ └── test.db ├── frontend/ │ ├── components/ │ │ ├── UserForm.tsx │ │ └── UserTable.tsx │ ├── pages/ │ │ ├── index.tsx │ │ └── user/ │ │ ├── [id].tsx │ │ ├── list.tsx │ │ ├── find.tsx │ │ └── new.tsx │ ├── styles/ │ ├── public/ │ ├── tsconfig.json │ └── package.json

## Setup

### Backend

1. Navigate to the `backend` directory:
   ```sh
   cd UserManagementProject/backend

2. Run the Go application:
go run main.go

### Frontend

1. Navigate to the frontend directory:
cd UserManagementProject/frontend

2. Install dependencies:
npm install

3. Run the Next.js development server:
npm run dev

4. Open your browser and navigate to http://localhost:3000.


## Features

- List all users
- Create a new user
- Edit an existing user
- Delete a user
- Find a user by name

## API Endpoints

- GET /users: Returns all users
- GET /users/:id: Returns the user with the specified ID
- POST /users: Creates a new user
- PUT /users/:id: Updates the user with the specified ID
- DELETE /users/:id: Deletes the user with the specified ID

## Technologies Used

- Go
- SQLite
- TypeScript
- React
- Next.js

