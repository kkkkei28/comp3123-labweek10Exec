import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import DisplayData from './DisplayData';
import './Form.css'; // Import the CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <InputField label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
        </div>
        <InputField label="Address" name="address1" value={formData.address1} onChange={handleChange} placeholder="1234 Main St" />
        <InputField label="Address 2" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, studio, or floor" />
        <div className="form-row">
          <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
          <SelectField label="Province" name="province" value={formData.province} onChange={handleChange} />
          <InputField label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </div>
        <CheckboxField label="Agree to Terms & Conditions?" name="terms" checked={formData.terms} onChange={handleChange} />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <DisplayData formData={formData} />
    </div>
  );
};

export default Form;
