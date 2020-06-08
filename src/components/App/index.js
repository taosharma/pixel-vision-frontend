import React, { useState, useEffect } from 'react';

import css from './App.module.css';

// Modules:

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components:

import Header from '../Header';
import Page from '../Page';
import Characters from '../Characters';
import Contact from '../Contact';
import Post from '../Post';

// Data:

import exampleEpisodes from '../../dummyData/episodes';
import exampleWriting from '../../dummyData/writing';
import characters from '../../dummyData/characters';
import contact from '../../dummyData/contact';

// App component:

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [episodes, setEpisodes] = useState(exampleEpisodes);
  const [writing, setWriting] = useState(exampleWriting);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        'https://8dqjmptiu8.execute-api.eu-west-1.amazonaws.com/dev/'
      );

      const posts = await response.json();

      const episodes = posts.filter((post) => post.type === 'episode');
      setEpisodes(episodes);

      const writing = posts.filter((post) => post.type === 'writing');
      setWriting(writing);

      console.log(episodes[0]);
    }
    fetchPosts();
  }, []);

  // State that tracks the id of the post to be shown on /episodes or /writing

  const [postId, setPostId] = useState(0);

  // The handlePostId changes the postId state to match the id (and index) of the associated post.

  function handlePostId(id) {
    console.log(id);
    setPostId(id);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section className={css.App}>
      <Router>
        <Header />
        <Switch>
          <Route path='/contact'>
            <Contact contact={contact} />
          </Route>
          <Route path='/characters'>
            <Characters characters={characters} />
          </Route>
          <Route path='/writing/:id'>
            <Post post={writing[postId]} />
          </Route>
          <Route path='/writing'>
            <Page posts={writing} handlePostId={handlePostId} />
          </Route>
          <Route path='/episode/:id'>
            <Post post={episodes[postId]} />
          </Route>
          <Route path='/'>
            <Page posts={episodes} handlePostId={handlePostId} />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
