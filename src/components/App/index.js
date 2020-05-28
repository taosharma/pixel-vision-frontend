import React, { useState } from 'react';

import css from './App.module.css';

// Modules:

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

// Components:

import Header from '../Header';
import Page from '../Page';
import Characters from '../Characters';
import Contact from '../Contact';
import Post from '../Post';

// Data:

import episodes from '../../dummyData/episodes';
import writing from '../../dummyData/writing';
import characters from '../../dummyData/characters';
import contact from '../../dummyData/contact';

// App component:

function App() {
  const [postId, setPostId] = useState(0);

  function handlePostId(link) {
    setPostId(link);
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
          <Route path='/writing'>
            <Page posts={writing} handlePostId={handlePostId} />
          </Route>
          <Route path='/writing/:id'>
            <Post post={writing[postId]} />
          </Route>
          <Route path='/episodes/:id'>
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
