//TODO: Add google analytics.

import React, { useState, useEffect, Suspense, lazy } from "react";

import ReactGA from "react-ga";

import css from "./App.module.css";

// Modules:

import { Switch, Route, useLocation } from "react-router-dom";

// Example data:

import exampleEpisodes from "../../dummyData/episodes";
import exampleWriting from "../../dummyData/writing";

// Components:

import Header from "../Header";
// const Header = lazy(() => import("../Header"));
const Page = lazy(() => import("../Page"));
const Characters = lazy(() => import("../Characters"));
const Subscribe = lazy(() => import("../Subscribe"));
const Post = lazy(() => import("../Post"));

// For Google Analytics

ReactGA.initialize("UA-186235390-1 ");

// Function to reverse episode order.

function reversePostsOrder(posts) {
  return posts
    .sort((a, b) => parseFloat(a.number) - parseFloat(b.number))
    .reverse();
}

// Function to filter out unreleased posts.

function filterUnreleasedPosts(post) {
  const { date } = post.text;
  const dateArray = date.split(" ");
  const dateObject = new Date(
    `${dateArray[1]} ${dateArray[0]}, ${dateArray[2]}`
  );
  const currentDate = new Date();
  return dateObject < currentDate;
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
      const releasedPosts = posts.filter(filterUnreleasedPosts);
      setPosts(releasedPosts);
      setCurrentPost(posts[0]);

      const episodes = releasedPosts.filter((post) => post.type === "episode");
      const reverseOrderEpisodes = reversePostsOrder(episodes);
      setEpisodes(reverseOrderEpisodes);

      const writing = releasedPosts.filter((post) => post.type === "writing");
      const reverseOrderWriting = reversePostsOrder(writing);
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
      <Suspense fallback={<Header />}>
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
      </Suspense>
    </section>
  );
}

export default App;
