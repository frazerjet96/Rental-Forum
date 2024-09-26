// ToggleForm.js
import React, { useState } from 'react';

const ToggleForm = () => {
  // State to manage the form type and input values
  const [formType, setFormType] = useState('Rental'); // Default form type
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    location: '',
    price: '',
    budget: '',
    configuration: '',
    possession: '',
    additionalInfo: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Form submitted successfully for ${formType}!`);
  };

  // Toggle form type between Rental and Resale
  const toggleFormType = (type) => {
    setFormType(type);
    // Reset form data when toggling
    setFormData({
      name: '',
      phoneNumber: '',
      location: '',
      price: '',
      budget: '',
      configuration: '',
      possession: '',
      additionalInfo: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Rental Forum!</h2>
      <h3 style={styles.subHeading}>Enter your need.</h3>
      <p style={styles.description}>We will get back to you in 24 hours.</p>
      <div style={styles.toggleButtons}>
        <button
          onClick={() => toggleFormType('Rental')}
          style={{
            ...styles.toggleButton,
            backgroundColor: formType === 'Rental' ? '#b8f566' : '#e0e0e0',
          }}
        >
          Rental
        </button>
        <button
          onClick={() => toggleFormType('Resale')}
          style={{
            ...styles.toggleButton,
            backgroundColor: formType === 'Resale' ? '#b8f566' : '#e0e0e0',
          }}
        >
          Resale
        </button>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Common Fields */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={styles.input}
            required
          />
        </div>

        {/* Conditional Fields for Rental */}
        {formType === 'Rental' && (
          <>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter location of need</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter price per month</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price per month"
                style={styles.input}
                required
              />
            </div>
          </>
        )}

        {/* Conditional Fields for Resale */}
        {formType === 'Resale' && (
          <>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter location of need</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter budget"
                style={styles.input}
                required
              />
            </div>
          </>
        )}

        {/* Common Fields */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Configuration</label>
          <select
            name="configuration"
            value={formData.configuration}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select configuration</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Possession</label>
          <input
            type="date"
            name="possession"
            value={formData.possession}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Anything else you would like to add...</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Additional information"
            style={{ ...styles.input, height: '80px' }}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    padding: '30px',
    maxWidth: '450px',
    margin: '40px auto',
    backgroundColor: '#f7f7f5',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  subHeading: {
    textAlign: 'center',
    color: '#555',
    fontWeight: 'normal',
  },
  description: {
    textAlign: 'center',
    color: '#777',
    marginBottom: '20px',
  },
  toggleButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#444',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#b8f566',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
    transition: 'background-color 0.3s',
  },
};

export default ToggleForm;