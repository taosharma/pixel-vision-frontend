//TODO: Add google analytics.

import React, { useState, useEffect } from "react";

import ReactGA from "react-ga";

import css from "./App.module.css";

// Modules:

import { Switch, Route, useLocation } from "react-router-dom";

// Components:

import Header from "../Header";
import Page from "../Page";
import Characters from "../Characters";
import Subscribe from "../Subscribe";
import Post from "../Post";

// Example data:

import exampleEpisodes from "../../dummyData/episodes";
import exampleWriting from "../../dummyData/writing";

// The usePageViews function uses sets up a useEffect that sends data to google analytics when a page is viewed.

ReactGA.initialize("UA-186235390-1 ");

function usePageViews() {
  let location = useLocation();

  return useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
}

// App component:

function App() {
  // Calls the usePageViews function to setup google analytics tracking.

  let location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  // usePageViews();

  // The episodes and writing state holds the two types of post that are listed on the website.

  const [posts, setPosts] = useState(exampleEpisodes);
  const [currentPost, setCurrentPost] = useState(exampleEpisodes[0]);
  const [episodes, setEpisodes] = useState(exampleEpisodes);
  const [writing, setWriting] = useState(exampleWriting);

  /*   This useEffect runs a fetch to the pixelVisionTable database when the website loads, and sets the episodes and writing state 
accordingly. */

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://8dqjmptiu8.execute-api.eu-west-1.amazonaws.com/dev/"
      );

      const posts = await response.json();
      setPosts(posts);
      setCurrentPost(posts[0]);

      const episodes = posts.filter((post) => post.type === "episode");
      const reverseOrderEpisodes = episodes
        .sort((a, b) => parseFloat(a.number) - parseFloat(b.number))
        .reverse();
      setEpisodes(reverseOrderEpisodes);

      const writing = posts.filter((post) => post.type === "writing");
      const reverseOrderWriting = writing
        .sort((a, b) => parseFloat(a.number) - parseFloat(b.number))
        .reverse();
      setWriting(reverseOrderWriting);
    }
    fetchPosts();
  }, []);

  // The submitComment function makes a PATCH request to the pixelVisionTable table to update the comments for a specific post.

  async function submitComment(postId, comments) {
    const updatedComments = { comments: comments };

    await fetch(
      `https://8dqjmptiu8.execute-api.eu-west-1.amazonaws.com/dev/id/${postId}`,
      {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(updatedComments),
      }
    );

    window.location.reload();
  }

  function handleCurrentPost(postId) {
    const post = posts.find(({ id }) => id === postId);
    if (post) {
      setCurrentPost(post);
      window.scroll({
        top: 0,
        left: 0,
      });
    }
  }

  return (
    <section className={css.App}>
      <Header />
      <Switch>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/writing/:postId">
          <Post
            post={currentPost}
            submitComment={submitComment}
            handleCurrentPost={handleCurrentPost}
          />
        </Route>
        <Route path="/reviews">
          <Page posts={writing} />
        </Route>
        <Route path="/episode/:postId">
          <Post
            post={currentPost}
            submitComment={submitComment}
            handleCurrentPost={handleCurrentPost}
          />
        </Route>
        <Route path="/">
          <Page posts={episodes} />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
