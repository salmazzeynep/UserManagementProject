import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserTable = () => {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('http://localhost:8080/users').then(response => {
      return setUsers(response.data as { id: number; name: string; email: string }[]);
    });
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/user/${id}`);
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/users/${id}`).then(() => {
      setUsers(users.filter((user: any) => user.id !== id));
    });
  };

  return (
    <div>
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
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;