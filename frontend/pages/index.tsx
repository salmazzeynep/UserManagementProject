import React, { useState } from 'react';
import { useRouter } from 'next/router';

// This is the main page component
const IndexPage: React.FC = () => {
  const router = useRouter(); // Hook to programmatically navigate
  const [userID, setUserID] = useState(''); // State to store the input value

  const handleFind = () => {
    router.push(`/user/find?id=${userID}`); // Navigate to the find page with the user ID as a query parameter
  };

  return (
    <div>
      <h1>User Management</h1>
      {/* Button to navigate to the new user form */}
      <button onClick={() => router.push('/user/new')}>New</button>
      {/* Button to navigate to the list of users */}
      <button onClick={() => router.push('/user/list')}>List Users</button>
      <div>
        {/* Input field to enter the user ID */}
        <input
          type="text"
          placeholder="Enter user ID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)} // Update the state with the input value
        />
        {/* Button to find the user by ID */}
        <button onClick={handleFind}>Find</button>
      </div>
    </div>
  );
};

export default IndexPage; // Export the component as default