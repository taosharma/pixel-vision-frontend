import React from 'react';

import css from './Characters.module.css';

function Characters({ characters }) {
  const { image1, image2, title1, title2, podcast, ben, tao } = characters;
  return (
    <main className={css.Characters}>
      <article className={css.container}>
        <img className={css.image} src={image1} />
        <h3 className={css.title}>{title1}</h3>
        <p className={css.text}>{podcast}</p>
        <section className={css.columns}>
          <h3 className={css.title}>Ben</h3>
          <h3 className={css.title}>Tao</h3>
        </section>
        <section className={css.columns}>
          <p className={css.text}>{ben}</p>
          <p className={css.text}>{tao}</p>
        </section>
        <img className={css.image} src={image2} />
      </article>
    </main>
  );
}

export default Characters;
