import React from 'react';

import css from './Characters.module.css';

import { useParams } from 'react-router-dom';

import characters from '../../dummyData/characters';

function Characters() {
  const { image1, image2, title, podcast, ben, tao } = characters;

  let { params } = useParams();
  console.log(params);

  return (
    <article className={css.Characters}>
      <img
        className={css.image}
        src={image1}
        alt='Two kids playing games.'
        title='Two kids playing games.'
      />
      <h3 className={css.title}>{title}</h3>
      {podcast.map((paragraph, index) => (
        <p className={css.text} key={index}>
          {paragraph}
        </p>
      ))}
      <h3 className={css.title}>Ben</h3>
      {ben.map((paragraph, index) => (
        <p className={css.text} key={index}>
          {paragraph}
        </p>
      ))}
      <h3 className={css.title}>Tao</h3>
      {tao.map((paragraph, index) => (
        <p className={css.text} key={index}>
          {paragraph}
        </p>
      ))}
      <img
        className={css.image}
        src={image2}
        alt='Two old people playing games.'
        title='Two old people playing games.'
      />
    </article>
  );
}

export default Characters;
