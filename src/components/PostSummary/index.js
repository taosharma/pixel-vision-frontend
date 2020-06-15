import React from 'react';

import css from './PostSummary.module.css';

import { Link } from 'react-router-dom';

function PostSummary({ post, index, handlePostIndex }) {
  const { id, type, headerImage, audioLink, text } = post;

  return (
    <main className={css.Post}>
      <img
        className={css.image}
        src={headerImage.image}
        alt={headerImage.alt}
        title={headerImage.alt}
      />
      <Link
        className={css.title}
        onClick={() => handlePostIndex(index)}
        to={`/${type}/${id}`}
      >
        {text.title}
      </Link>
      <p className={css.date}>{text.date}</p>
      <p className={css.text}>{text.summary}</p>
      {audioLink && (
        <audio className={css.audio} src={audioLink} controls></audio>
      )}
      <Link
        className={css.readMore}
        onClick={() => handlePostIndex(index)}
        to={`/${type}/${id}`}
      >
        Read more
      </Link>
    </main>
  );
}

export default PostSummary;
