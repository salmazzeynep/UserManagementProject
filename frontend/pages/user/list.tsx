import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// This component lists all users
const ListUsersPage: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]); // State to store the list of users
  const router = useRouter(); // Hook to programmatically navigate

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/users').then(response => {
      setUsers(response.data as { id: number; name: string; email: string }[]); // Set the fetched users to the state
    }).catch(error => {
      console.error('There was an error fetching the users!', error); // Log any errors
    });
  }, []);

  // Function to navigate to the edit user form
  const handleEdit = (id: number) => {
    router.push(`/user/${id}`);
  };

  // Function to delete a user
  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/users/${id}`).then(() => {
      setUsers(users.filter((user: any) => user.id !== id)); // Remove the deleted user from the state
    }).catch(error => {
      console.error('There was an error deleting the user!', error); // Log any errors
    });
  };

  return (
    <div>
      <h1>List Users</h1>
      {/* Button to navigate to the new user form */}
      <button onClick={() => router.push('/user/new')}>New</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {/* Button to navigate to the edit user form */}
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                {/* Button to delete the user */}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsersPage; // Export the component as default