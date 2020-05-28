import React from 'react';

import css from './NavigationBar.module.css';

import { useHistory } from 'react-router-dom';

function NavigationBar({ links }) {
  let history = useHistory();

  function handleHistory(link) {
    if (link === 'Support') {
      window.location.href = 'https://www.patreon.com';
    } else if (link === 'Episodes') {
      history.push(`/`);
    } else history.push(`/${link}`);
  }

  return (
    <section className={css.NavigationBar}>
      {links.map((link) => (
        <p className={css.navigationLink} onClick={() => handleHistory(link)}>
          {link}
        </p>
      ))}
    </section>
  );
}

export default NavigationBar;
