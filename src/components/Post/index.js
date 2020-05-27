import React from 'react';

import css from './Post.module.css';

function Post({ post }) {
  const { image, title, date, link, text } = post;
  return (
    <main className={css.Post}>
      <img className={css.image} src={image} />
      <h3 className={css.title}>{title}</h3>
      <p className={css.date}>{date}</p>
      {link && (
        <audio className={css.audio} controls>
          <source src={link}></source>
        </audio>
      )}
      <p className={css.text}>{text}</p>
    </main>
  );
}

export default Post;
