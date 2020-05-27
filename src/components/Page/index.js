import React from 'react';

import css from './Inventory.module.css';

import Post from '../Post';

function Page({ posts }) {
  return (
    <main className={css.Page}>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </main>
  );
}

export default Page;
