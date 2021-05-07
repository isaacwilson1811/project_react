import React, { useState, useEffect } from "react";
import { getFakeText } from '../utils';
import { Container, Divider, Segment, Button, Icon } from 'semantic-ui-react'

import { useContext } from 'react';
import { AuthContext } from '../globalContext';

export function BlogPost({ post, saveLike }) {
  const {title, author, content, likes, dislikes, id} = post;
  const { isAuthed } = useContext(AuthContext);

  // const [title, setTitle] = useState('Fetching Content');
  // const [author, setAuthor] = useState('');
  // const [sig, setSig] = useState('');
  // const [content, setContent] = useState('');
  // const [likeCount, setLikeCount] = useState(0);
  // const [dislikeCount, setDislikeCount] = useState(0);

  // useEffect( () => {
  //   getFakeText(Math.floor(Math.random()*(800-400)+400))
  //   .then(fakeText => {
  //     setTitle(fakeText.title);
  //     setAuthor(`Author: ${fakeText.author}`);
  //     setContent(fakeText.content);
  //     setSig(`- ${fakeText.genre}`);
  //   })
  // },[]);

  return (
    <Segment>
      <Container>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{content.substr(100)}</p>
        <p>{content}</p>
        <p>{content.substr(200)}</p>
        {/* <h4>{sig}</h4> */}
      </Container>
      <Divider horizontal>{likes} Likes | {dislikes} Dislikes</Divider>

      
      {isAuthed ? (
    
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button color='teal' icon onClick={()=>saveLike(id)}>
          <Icon name='thumbs up outline' />
        </Button>
        <Button color='teal' icon >
          <Icon name='thumbs down outline' />
        </Button>
      </div>

      ) : (
        <div style={{display:'flex',justifyContent:'center'}}>
          <h3 style={{color:'red'}} >You must be logged in to like</h3>
        </div>
      )}
    </Segment>
  );
}

