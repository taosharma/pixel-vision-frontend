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

function CommentForm({ submitComment, postId, comments }) {
  const [newComment, setNewComment] = useState({
    name: '',
    date: getDateString(),
    text: '',
  });

  function handleChange(event) {
    const input = event.target.value;
    const name = event.target.name;
    setNewComment({ ...newComment, [name]: input });
  }

  function handleSubmit() {
    if (newComment.name && newComment.text) {
      comments.push(newComment);
      submitComment(postId, comments);
    }
  }

  return (
    <main className={css.CommentForm}>
      <h3 className={css.commentTitle}>Leave a comment:</h3>
      <Input
        label={'Name:'}
        name={'name'}
        value={newComment.name}
        maxLength={maxCommentLength.name}
        handleChange={handleChange}
      />
      <Input
        label={'Comment:'}
        name={'text'}
        value={newComment.text}
        maxLength={maxCommentLength.text}
        handleChange={handleChange}
      />
      <p className={css.submit} onClick={() => handleSubmit()}>
        Submit
      </p>
    </main>
  );
}

export default CommentForm;
