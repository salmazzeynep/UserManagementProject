import React, { useState } from 'react';
import { useRouter } from 'next/router';

// This is the main page component
const IndexPage: React.FC = () => {
  const router = useRouter(); // Hook to programmatically navigate
  const [username, setUsername] = useState(''); // State to store the input value

  console.log('Rendering IndexPage'); // Log to check if the component is rendering

  const handleFind = () => {
    console.log('Find button clicked'); // Log to check if the button is clicked
    router.push(`/user/find?name=${username}`); // Navigate to the find page with the username as a query parameter
  };

  return (
    <div>
      <h1>User Management</h1>
      {/* Button to navigate to the new user form */}
      <button onClick={() => router.push('/user/new')}>New</button>
      {/* Button to navigate to the list of users */}
      <button onClick={() => router.push('/user/list')}>List Users</button>
      <div>
        {/* Input field to enter the username */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update the state with the input value
        />
        <button onClick={handleFind}>Find</button>
      </div>
    </div>
  );
};

export default IndexPage; // Export the component as default