import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../../components/UserForm';

const EditUserPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/users/${id}`).then(response => {
        setUser(response.data);
      });
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} isNew={false} />
    </div>
  );
};

export default EditUserPage;