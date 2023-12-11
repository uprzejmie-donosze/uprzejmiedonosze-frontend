import React from 'react';

function FormNew() {
  return (
    <section>
      <h1>New Report</h1>

      <div>
        <h4>Report information</h4>

        <p style={{padding: '1rem 0'}}>
          <label htmlFor="contextImage">Add image</label>
          <input id="contextImage" type="file" accept="image/jpeg" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label htmlFor="carImage">Add image 2</label>
          <input id="carImage" type="file" accept="image/jpeg" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Address of the incident</label>
          <input type="address" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Car numbers</label>
          <input type="text" />
        </p>

        <p style={{padding: '1rem 0'}}>
          <label>Comments</label>
          <input type="text" />
        </p>
      </div>

      <div>
        <h4>Kind of crime</h4>

        <p>
          <label>Crime 1</label>
          <input type="radio" />
        </p>

        <p>
          <label>Crime 2</label>
          <input type="radio" />
        </p>
      </div>
    </section>
  );
};

export default FormNew;
