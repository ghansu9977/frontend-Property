import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import propertyData from './Property.json'; // Import the JSON file
import "./dummy.css"

function DummyProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Set properties data when component mounts
    setProperties(propertyData);
  }, []);

  return (
    <div className="container-lg mt-5 p-4 mb-5 bg-white rounded">
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4" key={property.id}>
            <div className="card mb-4">
              <img
                src={property.images[0]} // Assuming the first image is used as the thumbnail
                className="card-img-top"
                alt={property.address}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>Address:</strong>   {property.address}</h5>
                <p className="card-text price-text">Price: ${property.price}</p>
                <p className="card-text description-text"><span>Descrition:</span> {property.description}</p>
                <a href={`mailto:${property.contactInfo}`} className="btn btn-primary d-flex justify-content-center alighn-items-center">
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DummyProperty;
