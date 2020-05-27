import React from 'react';

import css from './App.module.css';

// Modules:

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components:

import Header from '../Header';
import Page from '../Page';
import Characters from '../Characters';
import Contact from '../Contact';

// Data:

import inventory from '../../dummyData/inventory';
import writing from '../../dummyData/writing';
import characters from '../../dummyData/characters';
import contact from '../../dummyData/contact';

// App component:

function App() {
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
            <Page posts={writing} />
          </Route>
          <Route path='/'>
            <Page posts={inventory} />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
