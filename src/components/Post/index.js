import React from 'react';

import css from './Post.module.css';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

function Post({ post, submitComment }) {
  const { id, headerImage, images, audioLink, text, comments } = post;
  return (
    <main className={css.container}>
      <section className={css.Post}>
        <img
          className={css.headerImage}
          src={headerImage.image}
          alt={headerImage.alt}
          title={headerImage.alt}
        />
        <h3 className={css.title}>{text.title}</h3>
        <p className={css.date}>{text.date}</p>
        {text.body.map((paragraph, index) => {
          if (index % 4 === 0 && index !== 0) {
            return (
              <div key={index}>
                <img
                  className={css.image}
                  src={images[index].image}
                  alt={images[index].alt}
                  title={images[index].alt}
                  key={index}
                />
                <p className={css.text}>{paragraph}</p>
              </div>
            );
          } else
            return (
              <p className={css.text} key={index}>
                {paragraph}
              </p>
            );
        })}
        {audioLink && (
          <audio className={css.audio} src={audioLink} controls></audio>
        )}
        {text.audioExtracts.length > 0 && (
          <div className={css.text}>
            <p>Audio Extracts:</p>
            <ul>
              {text.audioExtracts.map((audioExtract, index) => (
                <li key={index}>{audioExtract}</li>
              ))}
            </ul>
          </div>
        )}
        {text.clarifications.length > 0 && (
          <div className={css.text}>
            <p>Clarifications:</p>
            <ol>
              {text.clarifications.map((clarification, index) => (
                <li key={index}>{clarification}</li>
              ))}
            </ol>
          </div>
        )}
        {text.contentWarning.length > 0 && (
          <div className={css.text}>
            <p>{text.contentWarning[0]}</p>
          </div>
        )}
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
