import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddProperty() {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem('token');
    if (!token) {
      Swal.fire({
        title: 'Error!',
        text: 'No token found. Please log in.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/properties',
        {
          address,
          price,
          description,
          images: images.split(',').map(url => url.trim()), // Handle images as an array
          contactInfo
        },
        {
            headers: {
                'token': token, // Pass the token in the custom 'token' header
                'Content-Type': 'application/json'
              }
        }
      );

      Swal.fire({
        title: 'Success!',
        text: 'Property added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      console.log(response.data);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add property. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });

      console.error('There was an error adding the property!', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Images (comma-separated URLs)</label>
          <input
            type="text"
            className="form-control"
            id="images"
            value={images}
            onChange={(e) => setImages(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactInfo" className="form-label">Contact Info</label>
          <input
            type="text"
            className="form-control"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;
