import React from 'react';

import css from './Header.module.css';

import logo from './super-mario.png';

import NavigationBar from '../NavigationBar';

const links = ['Inventory', 'Writing', 'Characters', 'Support', 'Contact'];

function Header() {
  return (
    <main className={css.Header}>
      <img className={css.logo} src={logo} />
      <h2 className={css.subtitle}>Tao & Ben's</h2>
      <h1 className={css.title}>Pixel Vision</h1>
      <NavigationBar className={css.NavigationBar} links={links} />
    </main>
  );
}

export default Header;
