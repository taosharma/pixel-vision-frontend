import React from 'react';

import css from './Post.module.css';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

function Post({ post }) {
  const { image, alt, title, date, link, text, comments } = post;
  console.log(comments);
  return (
    <main className={css.container}>
      <section className={css.Post}>
        <img className={css.image} src={image} alt={alt} title={alt} />
        <h3 className={css.title}>{title}</h3>
        <p className={css.date}>{date}</p>
        {text.map((paragraph, index) => (
          <p className={css.text} key={index}>
            {paragraph}
          </p>
        ))}
        {link && (
          <audio className={css.audio} controls>
            <source src={link}></source>
          </audio>
        )}
      </section>
      {comments && comments.map((comment) => <Comment comment={comment} />)}
      <CommentForm />
    </main>
  );
}

export default Post;
