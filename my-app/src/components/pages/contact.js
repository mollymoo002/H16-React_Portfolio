import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

const styles= {
  input: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  },
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'Name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
  };

  return (
    <div>
      <form className="form">
        <input
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea/>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <a href="mailto:mollysingmaster@gmail.com">Click here to email me</a>
    </div>
  );
}

export default Form;