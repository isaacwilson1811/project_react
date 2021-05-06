import React, { useState, useEffect } from "react";
import { getFakeText } from '../utils';
import { Container, Divider, Segment } from 'semantic-ui-react'

export function BlogPost() {

  const [title, setTitle] = useState('Fetching Content');
  const [author, setAuthor] = useState('');
  const [sig, setSig] = useState('');
  const [content, setContent] = useState('');
  const [commentCount, setCommentCount] = useState(0);

  useEffect( () => {
    getFakeText(Math.floor(Math.random()*(800-400)+400))
    .then(fakeText => {
      setTitle(fakeText.title);
      setAuthor(`Author: ${fakeText.author}`);
      setContent(fakeText.content);
      setSig(`- ${fakeText.genre}`);
    })
  },[]);

  return (
    <Segment>
      <Container>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{content.substr(100)}</p>
        <p>{content}</p>
        <p>{content.substr(200)}</p>
        <h4>{sig}</h4>
      </Container>
      <Divider horizontal>{commentCount} Comments</Divider>
    </Segment>
  );
}

