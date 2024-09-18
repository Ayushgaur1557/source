import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    fullName:"",          
    email: "",
    password: "",
    role:"",
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
        <h1 className="text-lg font-bold text-center pb-2">Sign Up</h1>
        <form className="space-y-3 w-full" onSubmit={handleSubmit}> {/* Make the form take full width */}
        <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your fullName..."
            sx={{ maxWidth: '100%' }} 
          />
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
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          label="Role"
          name='role'
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
       
        </Select>
      </FormControl>
          <Button
            fullWidth
            className="customButton"
            type="submit"
            sx={{ padding: ".1rem", maxWidth: '100%' }}  >
            Sign Up
          </Button>
        </form>
        <div className="mt-5 flex items-center gap-2 py-5 justify-center">
          <span>Already have an account?</span>
          <Button onClick={togglePanel}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
