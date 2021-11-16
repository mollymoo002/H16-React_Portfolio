import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

const styles= {
  inputs: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  },
  buttons: {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    background: "green"
  }
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
      <h1>Contact Me</h1>
      <form className="form">
        <input
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          style={styles.inputs}
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          style={styles.inputs}
          placeholder="Email"
        />
        <textarea style={styles.inputs}/>
        <button style={styles.buttons} type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <a href="mailto:mollysingmaster@gmail.com">Click here to email me</a>
    </div>
  );
}

export default Form;