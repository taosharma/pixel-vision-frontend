import React from 'react';

import css from './PostSummary.module.css';

import { Link } from 'react-router-dom';

function PostSummary({ post, index, handlePostIndex }) {
  const { id, type, image, title, date, link, text } = post;

  return (
    <main className={css.Post}>
      <img className={css.image} src={image} />
      <Link
        className={css.title}
        onClick={() => handlePostIndex(index)}
        to={`/${type}/${id}`}
      >
        {title}
      </Link>
      <p className={css.date}>{date}</p>
      {link && (
        <audio className={css.audio} controls>
          <source src={link}></source>
        </audio>
      )}
      <p className={css.text}>{text[0]}</p>
    </main>
  );
}

export default PostSummary;
