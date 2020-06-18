import React from 'react';

import css from './PostSummary.module.css';

import { Link } from 'react-router-dom';

function PostSummary({ post, index, handleCurrentPost }) {
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
        onClick={() => handleCurrentPost(id)}
        to={`/${type}/${id}`}
      >
        {text.title}
      </Link>
      <p className={css.date}>{text.date}</p>
      <p className={css.text}>{text.summary}</p>
      {audioLink && (
        <iframe src={audioLink} title={id} className={css.audio}></iframe>
      )}
      <Link
        className={css.readMore}
        onClick={() => handleCurrentPost(id)}
        to={`/${type}/${id}`}
      >
        Read more
      </Link>
    </main>
  );
}

export default PostSummary;
