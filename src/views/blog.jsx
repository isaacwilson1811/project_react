import { LocalDataFunc, BlogContextProvider, useBlogContext } from '../utils/localData';
import { BlogPost } from '../components';

export function Blog() {
  const {posts, saveLike } = useBlogContext();
  console.log(posts);
  return (
    <>
      {posts?.map((post)=> (<BlogPost 
        saveLike={saveLike}
        post={post}/>
      ))}
    </>
  );
}