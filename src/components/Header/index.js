import React from 'react';

import css from './Header.module.css';

import logo from './super-mario.png';

import NavigationBar from '../NavigationBar';

const links = ['Episodes', 'Writing', 'Characters', 'Support', 'Contact'];

function Header() {
  return (
    <main className={css.Header}>
      <div className={css.headerContainer}>
        <h2 className={css.subtitle}>Ben and Tao's</h2>
        <div className={css.titleContainer}>
          <h1 className={css.title}>Pixel Vision</h1>
          <img className={css.logo} src={logo} alt='Pixel Vision Logo' />
        </div>
      </div>
      <NavigationBar className={css.NavigationBar} links={links} />
    </main>
  );
}

export default Header;
