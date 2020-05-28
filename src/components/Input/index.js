import React, { useState } from 'react';

function Input({ label, name, value, handleChange }) {
  return (
    <section>
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        name={name}
        type='text'
      ></input>
    </section>
  );
}

export default Input;
