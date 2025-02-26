# User Management Project

This project is a user management system that allows you to create, read, update, and delete users. It is built using Go for the backend and TypeScript, React, and Next.js for the frontend.

## Getting Started

### Prerequisites

- Go (version 1.16 or higher)
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/USERNAME/REPOSITORY.git
   cd UserManagementProject

2. Install backend dependencies:
cd backend
go mod tidy

3. Install frontend dependencies:
cd ../frontend
npm install

### Running the Application

1. Start the backend server:
cd backend
go run main.go

2. Start the frontend application:
cd ../frontend
npm run dev

3. Open your browser and navigate to 
http://localhost:3000.

### API Endpoints

GET /users: Returns all users
GET /users/:id: Returns the user with the specified ID
POST /users: Creates a new user
PUT /users/:id: Updates the user with the specified ID
DELETE /users/:id: Deletes the user with the specified ID

### Technologies Used

Go
SQLite
TypeScript
React
Next.js

### Project Structure
backend: Contains the Go backend code.
frontend: Contains the TypeScript, React, and Next.js frontend code.

### Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License.

