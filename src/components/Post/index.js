import React from 'react';

import css from './Post.module.css';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

function Post({ post }) {
  const { image, title, date, link, text, comments } = post;
  console.log(comments);
  return (
    <main className={css.container}>
      <section className={css.Post}>
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
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
      <CommentForm />
    </main>
  );
}

export default Post;
