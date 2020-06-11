import React from 'react';

import css from './Header.module.css';

import logo from './super-mario.png';

import NavigationBar from '../NavigationBar';

const links = ['Episodes', 'Writing', 'Characters', 'Support', 'Contact'];

function Header() {
  return (
    <main className={css.Header}>
      <h2 className={css.subtitle}>Tao and Ben's</h2>
      <h1 className={css.title}>Pixel Vision</h1>
      <img className={css.logo} src={logo} alt='Pixel Vision Logo' />
      <NavigationBar className={css.NavigationBar} links={links} />
    </main>
  );
}

export default Header;
