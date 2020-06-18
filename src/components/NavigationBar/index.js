import React, { useState } from 'react';

import css from './NavigationBar.module.css';

import { useHistory } from 'react-router-dom';

// An array of objects to track the active tab being shown.

const defaultActive = [
  { link: 'episodes', active: false },
  { link: 'writing', active: false },
  { link: 'characters', active: false },
  { link: 'patreon', active: false },
  { link: 'contact', active: false },
];

function NavigationBar({ links }) {
  let history = useHistory();

  // State that tracks the active tab being shown.

  const [active, setActive] = useState(defaultActive);

  // The handleActive function sets the property of last navigation link to be clicked as true.

  function handleActive(index) {
    setActive([
      ...defaultActive.slice(0, index),
      { ...defaultActive[index], active: true },
      ...defaultActive.slice(index + 1),
    ]);
  }

  // The handleHistory function redirects the browser to the linked page.

  function handleHistory(link) {
    if (link === 'patreon') {
      window.location.href = 'https://www.patreon.com';
    } else history.push(`/${link}`);
  }

  // The handleNavigationClick function calls the two functions above (so that they can be called in one onClick attribute).

  function handleNavigationClick(link, index) {
    handleHistory(link);
    handleActive(index);
  }

  return (
    <section className={css.NavigationBar}>
      {links.map((link, index) => (
        <p
          className={
            active[index].active ? css.activeNavigationLink : css.navigationLink
          }
          onClick={() => handleNavigationClick(link.toLowerCase(), index)}
          key={index}
        >
          {link}
        </p>
      ))}
    </section>
  );
}

export default NavigationBar;
