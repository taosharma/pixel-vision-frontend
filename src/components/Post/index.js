import React from 'react';

import css from './Post.module.css';

import { Link } from 'react-router-dom';

function Post({ post, handlePostId }) {
  const { id, type, image, title, date, link, text } = post;

  return (
    <main className={css.Post}>
      <img className={css.image} src={image} />
      <Link
        className={css.title}
        onClick={() => handlePostId(id)}
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
      {text.map((paragraph) => (
        <p className={css.text}>{paragraph}</p>
      ))}
    </main>
  );
}

export default Post;
