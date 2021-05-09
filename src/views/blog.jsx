import { useEffect } from 'react';
import { useBlogStore } from '../store';
import { BlogPost } from '../components';

export function Blog(){
  const [arr, initArr] = useBlogStore(state => [state.arr, state.initArr]);
  const checkStorageIsEmpty = useBlogStore(state => state.checkStorageIsEmpty);
  const storageIsEmpty = useBlogStore(state => state.storageIsEmpty);

  useEffect(()=>{
    if(checkStorageIsEmpty()){initArr()}
  },[]);

  return (
    <>
    {storageIsEmpty ? (
      <h1>Fetching Data...</h1>
      ) : (
    arr.map((obj)=> (<BlogPost 
      title={obj.title}
      author={obj.author}
      content={obj.content}
      genre={obj.genre}
    />))
    )}
    </>
  )
}