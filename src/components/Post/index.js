import React from 'react';

import css from './Post.module.css';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

function Post({ post, submitComment }) {
  const { id, image, alt, title, date, link, text, comments } = post;
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
        {link && <audio className={css.audio} src={link} controls></audio>}
      </section>
      {comments.length > 0 && (
        <section className={css.commentContainer}>
          <h3 className={css.commentTitle}>Comments:</h3>
          {comments.map((comment, index) => (
            <Comment comment={comment} index={index} key={index} />
          ))}
        </section>
      )}
      <CommentForm
        submitComment={submitComment}
        postId={id}
        comments={comments}
      />
    </main>
  );
}

export default Post;
