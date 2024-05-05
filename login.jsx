import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validate username
    if (!formData.username) {
      formIsValid = false;
      errors['username'] = 'Username is required';
    }

    // Validate email
    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors['email'] = 'Email is invalid';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form submission logic goes here
      console.log('Form is valid and submitted:', formData);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


