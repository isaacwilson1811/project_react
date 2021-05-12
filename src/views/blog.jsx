import { useEffect } from 'react';
import { useBlogStore } from '../store';
import { BlogPost } from '../components';

export function Blog(){
  const [posts, fetchPosts] = useBlogStore(state => [state.posts, state.fetchPosts]);
  const checkStorageIsEmpty = useBlogStore(state => state.checkStorageIsEmpty);
  const storageIsEmpty = useBlogStore(state => state.storageIsEmpty);

  useEffect(()=>{
    if(checkStorageIsEmpty()){fetchPosts()}
  },[]);

  return (
    <>
    {storageIsEmpty ? (
      <h1>Fetching Data...</h1>
      ) : (
    posts.map((obj)=> (<BlogPost
      id={obj.id} 
      title={obj.title}
      author={obj.author}
      content={obj.content}
      genre={obj.genre}
      likes={obj.totalLikes}
      dislikes={obj.totalDislikes}
    />))
    )}
    </>
  )
}