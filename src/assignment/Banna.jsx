

import React from 'react';
import Button from './Button';

function Banna() {
  return (
    <div 
      className="text-light text-start py-4" 
      style={{ backgroundColor: "#3e3e3e" }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          
          <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
            <p className="fs-5">WELCOME TO CODESHAPER</p>
            <h1 
              style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: "bolder" }}
            >
              CONSULTING FOR EVERY BUSINESS
            </h1>
            <Button text="DISCOVER MORE" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 text-center">
            <img 
              src="https://media.istockphoto.com/id/2190495427/photo/working-in-the-office.jpg?s=612x612&w=0&k=20&c=ifLWashDap_CDIQUVEBYq6sYU35JE6VxvLZr5BKWLas=" 
              alt="Consulting" 
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banna;
