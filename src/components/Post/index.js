import React, { useEffect, useState } from 'react';

import Linkify from 'react-linkify';

import css from './Post.module.css';

import { useParams } from 'react-router-dom';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

import exampleEpisodes from '../../dummyData/episodes';

function createMarkup(string) {
  return { __html: string };
}

function Post({ post, submitComment, handleCurrentPost }) {
  const [thisPost, setThisPost] = useState(exampleEpisodes[0]);

  let { id, headerImage, images, audioLink, text, comments } = thisPost;

  let { postId } = useParams();

  useEffect(() => {
    if (id !== postId) {
      handleCurrentPost(postId);
      setThisPost(post);
    }
  }, [post, handleCurrentPost, id, postId]);

  return (
    <Linkify>
      <main className={css.container}>
        <section className={css.Post}>
          <img
            className={css.headerImage}
            src={headerImage.image}
            alt={headerImage.alt}
            title={headerImage.alt}
          />
          <h3 className={css.title}>{text.title}</h3>
          <p className={css.date}>{text.date}</p>
          {text.body.map((paragraph, index) => {
            if (index % 4 === 0 && index !== 0) {
              return (
                <div key={index}>
                  <img
                    className={css.image}
                    src={images[index].image}
                    alt={images[index].alt}
                    title={images[index].alt}
                    key={index}
                  />
                  <p
                    className={css.text}
                    dangerouslySetInnerHTML={createMarkup(paragraph)}
                  ></p>
                </div>
              );
            } else
              return (
                <p
                  className={css.text}
                  dangerouslySetInnerHTML={createMarkup(paragraph)}
                  key={index}
                ></p>
              );
          })}
          {text.contentWarning.length > 0 && (
            <div className={css.text}>
              <p>{text.contentWarning[0]}</p>
            </div>
          )}
          {audioLink && (
            <iframe
              src={audioLink}
              title={id}
              className={css.audio}
              frameBorder={'0'}
            ></iframe>
          )}
          {text.audioExtracts.length > 0 && (
            <div className={css.text}>
              <p>Audio Extracts:</p>
              <ul>
                {text.audioExtracts.map((audioExtract, index) => (
                  <li key={index}>{audioExtract}</li>
                ))}
              </ul>
            </div>
          )}
          {text.clarifications.length > 0 && (
            <div className={css.text}>
              <p>Clarifications:</p>
              <ol>
                {text.clarifications.map((clarification, index) => (
                  <li key={index}>{clarification}</li>
                ))}
              </ol>
            </div>
          )}
        </section>
        {comments.length > 0 && (
          <section className={css.commentContainer}>
            <h3 className={css.commentTitle}>Comments:</h3>
            {comments.map((comment, index) => (
              <Comment comment={comment} index={index} key={index} />
            ))}
          </section>
        )}
        <CommentForm
          submitComment={submitComment}
          postId={id}
          comments={comments}
        />
      </main>
    </Linkify>
  );
}

export default Post;
