
import { Container, Divider, Segment, Button, Icon } from 'semantic-ui-react'
import { useSessionStore , useBlogStore } from '../store';

export function BlogPost({ title, author, content, genre, id, totalLikes, totalDislikes }) {
  const [loggedIn, currentUser] = useSessionStore(state => [state.loggedIn, state.currentUser]);
  const addPostLike = useBlogStore(state => state.addPostLike);


  const handleLike = (id) => {
    console.log(currentUser.email+' liked post id '+id);
    addPostLike(id,currentUser.email,1);

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
      <Divider horizontal>0 Likes | 0 Dislikes</Divider>

      
      {loggedIn ? (
    
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button color='teal' icon onClick={()=>{handleLike(id)}}>
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

