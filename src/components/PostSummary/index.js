import React from 'react';

import escapeHtml from 'escape-html';
import Linkify from 'react-linkify';

import css from './PostSummary.module.css';

import { Link } from 'react-router-dom';

function createMarkup(string) {
  return { __html: string };
}

function PostSummary({ post }) {
  const { id, type, headerImage, audioLink, text } = post;

  return (
    <Linkify>
      <main className={css.Post}>
        <img
          className={css.image}
          src={headerImage.image}
          alt={headerImage.alt}
          title={headerImage.alt}
        />
        <Link className={css.title} to={`/${type}/${id}`}>
          {text.title}
        </Link>
        <p className={css.date}>{text.date}</p>
        <p
          className={css.text}
          dangerouslySetInnerHTML={createMarkup(text.summary)}
        ></p>
        {audioLink && (
          <iframe
            src={audioLink}
            title={id}
            className={css.audio}
            frameBorder={'0'}
          ></iframe>
        )}
        <Link className={css.readMore} to={`/${type}/${id}`}>
          Read more
        </Link>
      </main>
    </Linkify>
  );
}

export default PostSummary;
