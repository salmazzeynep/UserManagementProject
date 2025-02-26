import React from 'react';
import UserForm from '../../components/UserForm';

// This component is for creating a new user
const NewUserPage: React.FC = () => {
  return (
    <div>
      <h1>New User</h1>
      {/* Render the user form for creating a new user */}
      <UserForm isNew={true} />
    </div>
  );
};

export default NewUserPage; // Export the component as default