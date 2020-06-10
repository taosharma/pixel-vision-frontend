import React from 'react';

import css from './Page.module.css';

import PostSummary from '../PostSummary';

function Page({ posts, handlePostIndex }) {
  return (
    <main className={css.Page}>
      {posts.map((post, index) => (
        <PostSummary
          post={post}
          handlePostIndex={handlePostIndex}
          index={index}
          key={index}
        />
      ))}
    </main>
  );
}

export default Page;
