import React from 'react';

import css from './Contact.module.css';

import contact from '../../dummyData/contact';

function Contact() {
  const { image, title, email, text } = contact;

  return (
    <article className={css.Contact}>
      <img
        className={css.image}
        src={image}
        alt="A letter being posted."
        title="A letter being posted."
      />
      <h3 className={css.title}>{title}</h3>
      <h4 className={css.email}>{email}</h4>
      <p className={css.text}>{text}</p>
    </article>
  );
}

export default Contact;
