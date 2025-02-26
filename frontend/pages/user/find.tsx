import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// This component is for finding a user by ID
const FindUserPage: React.FC = () => {
  const [user, setUser] = useState<any>(null); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const router = useRouter();
  const { id } = router.query; // Get the user ID from the query parameters

  // Fetch the user data when the component mounts or the ID changes
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/user?id=${id}`).then(response => {
        console.log('API response:', response.data); // Log the API response
        setUser(response.data); // Set the fetched user data to the state
        setLoading(false); // Set loading to false after data is fetched
      }).catch(error => {
        console.error('There was an error fetching the user!', error); // Log any errors
        setLoading(false); // Set loading to false in case of error
      });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show a loading message while fetching data

  return (
    <div>
      <h1>Find User</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default FindUserPage; // Export the component as default