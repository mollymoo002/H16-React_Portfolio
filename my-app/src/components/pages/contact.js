import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

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
    </div>
  );
}

export default Form;