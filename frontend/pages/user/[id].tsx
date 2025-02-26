import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserForm from '../../components/UserForm';

// This component is for editing a user
const EditUserPage: React.FC = () => {
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null); // State to store the user data
  const router = useRouter(); // Hook to programmatically navigate
  const { id } = router.query; // Get the user ID from the URL

  // Fetch the user data when the component mounts or the ID changes
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/users/${id}`).then(response => {
        setUser(response.data as { id: number; name: string; email: string }); // Set the fetched user data to the state
      });
    }
  }, [id]);

  if (!user) return <div>Loading...</div>; // Show a loading message while fetching data

  return (
    <div>
      <h1>Edit User</h1>
      {/* Render the user form with the fetched user data */}
      <UserForm user={user} isNew={false} />
    </div>
  );
};

export default EditUserPage; // Export the component as default