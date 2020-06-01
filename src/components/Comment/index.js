import React from 'react';

import css from './Comment.module.css';

function Comment({ comment }) {
  const { name, date, text } = comment;

  return (
    <article className={css.Comment}>
      <h3 className={css.name}>{name}</h3>
      <h4 className={css.date}>{date}</h4>
      <p className={css.text}>{text}</p>
    </article>
  );
}

export default Comment;
