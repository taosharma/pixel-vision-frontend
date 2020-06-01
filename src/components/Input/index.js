import React from 'react';

import css from './Input.module.css';

function Input({ label, name, value, maxLength, handleChange }) {
  return (
    <section className={css.Input}>
      <p className={css.label}>{label}</p>
      <textarea
        value={value}
        onChange={handleChange}
        name={name}
        type='text'
        maxLength={maxLength}
      ></textarea>
    </section>
  );
}

export default Input;
