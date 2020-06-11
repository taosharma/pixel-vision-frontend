import React from 'react';

import css from './Characters.module.css';

function Characters({ characters }) {
  const { image1, image2, title, podcast, ben, tao } = characters;
  return (
    <article className={css.Characters}>
      <img className={css.image} src={image1} />
      <h3 className={css.title}>{title}</h3>
      {podcast.map((paragraph) => (
        <p className={css.text}>{paragraph}</p>
      ))}
      <h3 className={css.title}>Ben</h3>
      {ben.map((paragraph) => (
        <p className={css.text}>{paragraph}</p>
      ))}
      <h3 className={css.title}>Tao</h3>
      {tao.map((paragraph) => (
        <p className={css.text}>{paragraph}</p>
      ))}
      <img className={css.image} src={image2} />
    </article>
  );
}

export default Characters;
