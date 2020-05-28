import React, { useState } from 'react';

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
    <main>
      <Input
        label={'Name'}
        name={'name'}
        value={comment.name}
        handleChange={handleChange}
      />
      <Input
        label={'Comment'}
        name={'text'}
        value={comment.text}
        handleChange={handleChange}
      />
    </main>
  );
}

export default CommentForm;
