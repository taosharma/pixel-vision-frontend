import React from 'react';

import css from './Page.module.css';

import Post from '../Post';

function Page({ posts, handlePostId }) {
  return (
    <main className={css.Page}>
      {posts.map((post) => (
        <Post post={post} handlePostId={handlePostId} />
      ))}
    </main>
  );
}

export default Page;
