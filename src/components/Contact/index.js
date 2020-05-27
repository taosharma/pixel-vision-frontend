import React from 'react';

import css from './Contact.module.css';

function Contact({ contact }) {
  const { image, title, email, text } = contact;

  return (
    <main className={css.Contact}>
      <article className={css.container}>
        <img className={css.image} src={image} />
        <h3 className={css.title}>{title}</h3>
        <h4 className={css.title}>{email}</h4>
        <p className={css.text}>{text}</p>
      </article>
    </main>
  );
}

export default Contact;
