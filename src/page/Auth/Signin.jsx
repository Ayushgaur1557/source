import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Signin = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form", formData);
  };

  return (
    <div className="flex justify-center items-center h-full"> {/* Flex container for centering */}
      <div className="flex flex-col items-center space-y-3 max-w-sm w-full"> {/* Center form and set max width */}
        <h1 className="text-lg font-bold text-center pb-8">Login</h1>
        <form className="space-y-3 w-full" onSubmit={handleSubmit}> {/* Make the form take full width */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            sx={{ maxWidth: '100%' }}  
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password..."
            sx={{ maxWidth: '100%' }} 
          />
          <Button
            fullWidth
            className="customButton"
            type="submit"
            sx={{ padding: ".5rem", maxWidth: '100%' }}   >
            Login
          </Button>
        </form>
        <div className="mt-5 flex items-center gap-2 py-5 justify-center">
          <span>Don't have an account?</span>
          <Button onClick={togglePanel}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
