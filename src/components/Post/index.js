import React from 'react';

import css from './Post.module.css';

import CommentForm from '../CommentForm';

function Post({ post }) {
  const { image, title, date, link, text } = post;

  return (
    <main>
      <section className={css.Post}>
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
      </section>
      <CommentForm />
    </main>
  );
}

export default Post;
