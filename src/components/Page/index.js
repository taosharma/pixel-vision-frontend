import React from 'react';

import css from './Page.module.css';

import PostSummary from '../PostSummary';

function Page({ posts, handlePostId }) {
  return (
    <main className={css.Page}>
      {posts.map((post) => (
        <PostSummary post={post} handlePostId={handlePostId} />
      ))}
    </main>
  );
}

export default Page;
