import React, { useState } from 'react';

import css from './CommentForm.module.css';

import Input from '../Input';

function getDateString() {
  const date = new Date();
  return date.toDateString();
}

function CommentForm() {
  const [comment, setComment] = useState({
    name: '',
    date: getDateString(),
    text: '',
  });

  function handleChange(event) {
    const input = event.target.value;
    const name = event.target.name;
    console.log(comment);
    setComment({ ...comment, [name]: input });
  }

  return (
    <main className={css.CommentForm}>
      <Input
        label={'Name:'}
        name={'name'}
        value={comment.name}
        maxLength={20}
        handleChange={handleChange}
      />
      <Input
        label={'Comment:'}
        name={'text'}
        value={comment.text}
        maxLength={5000}
        handleChange={handleChange}
      />
      <button>Submit</button>
    </main>
  );
}

export default CommentForm;
