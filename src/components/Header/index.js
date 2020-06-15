import React from 'react';

import css from './Header.module.css';

import NavigationBar from '../NavigationBar';

const links = ['Episodes', 'Writing', 'Characters', 'Patreon', 'Contact'];

function Header() {
  return (
    <main className={css.Header}>
      <img
        className={css.headerImage}
        src={'https://i.imgur.com/nFXLGyE.png?1'}
        alt={
          'A silloute of two people watching a pixellated screen, and the words: "Pixel Vision"'
        }
      ></img>
      <NavigationBar className={css.NavigationBar} links={links} />
    </main>
  );
}

export default Header;
