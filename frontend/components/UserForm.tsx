import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserForm = ({ user, isNew }: { user?: any; isNew: boolean }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      axios.post('http://localhost:8080/users', { name, email }).then(() => {
        router.push('/');
      });
    } else {
      axios.put(`http://localhost:8080/users/${user.id}`, { name, email }).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">{isNew ? 'Create' : 'Save'}</button>
        <button type="button" onClick={() => router.push('/')}>Back</button>
      </form>
    </div>
  );
};

export default UserForm;