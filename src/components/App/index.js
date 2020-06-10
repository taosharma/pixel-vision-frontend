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

// Example data:

import exampleEpisodes from '../../dummyData/episodes';
import exampleWriting from '../../dummyData/writing';
import characters from '../../dummyData/characters';
import contact from '../../dummyData/contact';

// App component:

function App() {
  // The episodes and writing state holds the two types of post that are listed on the website.

  const [episodes, setEpisodes] = useState(exampleEpisodes);
  const [writing, setWriting] = useState(exampleWriting);

  /*   This useEffect runs a fetch to the pixelVisionTable database when the website loads, and sets the episodes and writing state 
accordingly. */

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        'https://8dqjmptiu8.execute-api.eu-west-1.amazonaws.com/dev/'
      );

      const posts = await response.json();

      const episodes = posts.filter((post) => post.type === 'episode');
      const reverseOrderEpisodes = episodes
        .sort((a, b) => parseFloat(a.number) - parseFloat(b.number))
        .reverse();
      setEpisodes(reverseOrderEpisodes);

      const writing = posts.filter((post) => post.type === 'writing');
      setWriting(writing);
    }
    fetchPosts();
  }, []);

  // State that tracks the id of the post to be shown on /episodes or /writing

  const [postIndex, setPostIndex] = useState(0);

  // The handlePostIndex changes the postIndex state to match the index of the associated post.

  function handlePostIndex(index) {
    setPostIndex(index);
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
            <Post post={writing[postIndex]} />
          </Route>
          <Route path='/writing'>
            <Page posts={writing} handlePostIndex={handlePostIndex} />
          </Route>
          <Route path='/episode/:id'>
            <Post post={episodes[postIndex]} />
          </Route>
          <Route path='/'>
            <Page posts={episodes} handlePostIndex={handlePostIndex} />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
