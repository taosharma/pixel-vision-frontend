import React from 'react';

import Linkify from 'react-linkify';

import css from './Subscribe.module.css';

import subscribe from '../../dummyData/subscribe';

function createMarkup(string) {
  return { __html: string };
}

function Subscribe() {
  const { image, title, email, text } = subscribe;

  return (
    <Linkify>
      <article className={css.Subscribe}>
        <img
          className={css.image}
          src={image}
          alt="A letter being posted."
          title="A letter being posted."
        />
        <h3
          className={css.title}
          dangerouslySetInnerHTML={createMarkup(title)}
        ></h3>
        <h4
          className={css.email}
          dangerouslySetInnerHTML={createMarkup(email)}
        ></h4>
        <p className={css.text}>{text}</p>
      </article>
    </Linkify>
  );
}

export default Subscribe;
