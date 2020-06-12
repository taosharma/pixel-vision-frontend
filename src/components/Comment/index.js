import React from 'react';

import css from './Comment.module.css';

function Comment({ comment }) {
  const { name, date, text } = comment;

  return (
    <article className={css.Comment}>
      <h3 className={css.name}>{name} says:</h3>
      <p className={css.text}>{text}</p>
      <h4 className={css.date}>Posted on {date}</h4>
    </article>
  );
}

export default Comment;
