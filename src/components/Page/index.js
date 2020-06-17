import React, { useState, useEffect } from 'react';

// import css from './Page.module.css';

import PostSummary from '../PostSummary';

import exampleEpisodes from '../../dummyData/episodes';

function Page({ posts, handlePostIndex }) {
  const [pagePosts, setPagePosts] = useState(exampleEpisodes);

  useEffect(() => {
    setPagePosts(posts);
  }, [posts]);

  return (
    <main>
      {pagePosts.map((post, index) => (
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
