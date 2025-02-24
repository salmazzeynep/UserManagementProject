import React from 'react';
import UserForm from '../../components/UserForm';

const NewUserPage: React.FC = () => {
  return (
    <div>
      <h1>New User</h1>
      <UserForm isNew={true} />
    </div>
  );
};

export default NewUserPage;