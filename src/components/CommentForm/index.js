import React, { useState } from 'react';

import css from './CommentForm.module.css';

import Input from '../Input';

function getDateString() {
  const date = new Date();
  return date.toDateString();
}

const maxCommentLength = {
  name: 20,
  text: 5000,
};

function CommentForm() {
  const [comment, setComment] = useState({
    name: '',
    date: getDateString(),
    text: '',
  });

  function handleChange(event) {
    const input = event.target.value;
    const name = event.target.name;
    setComment({ ...comment, [name]: input });
  }

  return (
    <main className={css.CommentForm}>
      <h3>Leave a comment:</h3>
      <Input
        label={'Name:'}
        name={'name'}
        value={comment.name}
        maxLength={maxCommentLength.name}
        handleChange={handleChange}
      />
      <Input
        label={'Comment:'}
        name={'text'}
        value={comment.text}
        maxLength={maxCommentLength.text}
        handleChange={handleChange}
      />
      <button>Submit</button>
    </main>
  );
}

export default CommentForm;
