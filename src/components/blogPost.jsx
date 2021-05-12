
import { Container, Divider, Segment, Button, Icon } from 'semantic-ui-react'
import { useSessionStore , useBlogStore } from '../store';
import { useState } from 'react';

export function BlogPost({ title, author, content, genre, id }) {
  const [loggedIn, currentUser] = useSessionStore(state => [state.loggedIn, state.currentUser]);
  const posts = useBlogStore(state => state.posts);

  const [likes, setLikes] = useState(0);
  const [usersThatLike, setUsersThatLike] = useState([]);
  const [dislikes, setDislikes] = useState(0);
  const [usersThatDislike, setUsersThatDislike] = useState([]);


  const handleLikeOrDislike = (postID,type) => {
    let index = posts.findIndex(post => post.id == postID);
    console.log('index '+ index);
    let haveLiked = (usersThatLike.indexOf(currentUser.firstName) > -1)
    let haveDisliked = (usersThatDislike.indexOf(currentUser.firstName) > -1)
    switch(type){
      case 'like':
        if(haveLiked) {return}
        if(haveDisliked){
          let newDislikeArray = usersThatDislike
          newDislikeArray.splice(usersThatDislike.indexOf(currentUser.firstName),1)
          setUsersThatDislike(newDislikeArray)
          setDislikes(dislikes - 1)
          setUsersThatLike([...usersThatLike, currentUser.firstName])
          setLikes(likes + 1)
        }else if(!haveLiked && !haveDisliked){
          setUsersThatLike([...usersThatLike, currentUser.firstName])
          setLikes(likes + 1)
        }
        break;
      case 'dislike':
        if(haveDisliked) {return}
        if(haveLiked){
          let newLikeArray = usersThatLike
          newLikeArray.splice(usersThatLike.indexOf(currentUser.firstName),1)
          setUsersThatLike(newLikeArray)
          setLikes(likes - 1)
          setUsersThatDislike([...usersThatDislike, currentUser.firstName])
          setDislikes(dislikes + 1)
        }else if(!haveDisliked && !haveLiked){
          setUsersThatDislike([...usersThatDislike, currentUser.firstName])
          setDislikes(dislikes + 1)
        }
        break;
    }
    
  }
  
  return (
    <Segment>
      <Container>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{content.substr(100)}</p>
        <p>{content}</p>
        <p>{content.substr(200)}</p>
        <h4>-{genre}</h4>
      </Container>
      <Divider horizontal>{likes} Likes | {dislikes} Dislikes</Divider>
      <p>users that like: {usersThatLike.toString()}</p>
      <p>users that dislike: {usersThatDislike.toString()}</p>

      
      {loggedIn ? (
    
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button color='teal' icon onClick={()=>{handleLikeOrDislike(id,'like')}}>
          <Icon name='thumbs up outline' />
        </Button>
        <Button color='teal' icon onClick={()=>{handleLikeOrDislike(id,'dislike')}}>
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

