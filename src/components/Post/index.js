import React from 'react';

import css from './Post.module.css';

import { Link } from 'react-router-dom';

function Post({ post }) {
  const { id, type, image, title, date, link, text } = post;

  return (
    <main className={css.Post}>
      <p>I am a post</p>
      <img className={css.image} src={image} />
      <h3 className={css.title}>{title}</h3>
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
