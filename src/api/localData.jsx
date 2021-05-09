import React, { useEffect, createContext, useContext, useState } from 'react';
import { getFakeText } from '.';
export const BlogContext = createContext({});
export const useBlogContext = () => {
  return useContext(BlogContext)
}

class BlogData {
  constructor(){
    this.checkStorage()
  }
  posts = [];
  newData = false;

  newPost = (id) => {
    createPost(id).then(
      (post) => {
        this.posts.push(post);
        this.saveStorage();
      }
    )
  }
  checkStorage = () => {
    if (localStorage.getItem('BLOGDATA') === null) {
      this.initStorage();
    } else {
    this.posts = JSON.parse(localStorage.getItem('BLOGDATA'));
    this.newData = true;
    }
  }
  initStorage = () => {
    const postsProm = [1,2,3,4,5,6,7,8,9,10].map((id)=>createPost(id))
    Promise.all(postsProm).then((posts)=>{
      this.newData = true;
      this.posts = posts;
      localStorage.setItem('BLOGDATA', JSON.stringify(posts));
    })
  }
  saveStorage(){
    localStorage.setItem('BLOGDATA', JSON.stringify(this.posts));
  }
  saveLike = (uid) => {
    const posts = [...this.posts];
    const foundPost = posts.find((post)=>post.id === uid)
    foundPost.likes += 1;
    this.posts = posts;
    this.saveStorage();
  }
}


async function createPost(id){
  const post = {}
  post.id = id;
  post.likes = 0;
  post.dislikes = 0;
  const fakeText = await getFakeText(Math.floor(Math.random()*(800-400)+400))
  post.title = fakeText.title;
  post.author = fakeText.author;
  post.content = fakeText.content;
  post.genre = fakeText.genre;
  return post;
}

// export function LocalDataFunc() {
//   useEffect( () => {
//     BlogData.checkStorage();
//   },[]);
//   return(<></>);
// }

const blogdata = new BlogData();
export function BlogContextProvider(props){
  
  const [posts, setPosts] = useState(blogdata.posts);
  useEffect(()=>{setPosts(blogdata.posts)},[blogdata.posts,blogdata.newData]);
  return (
    <BlogContext.Provider value={{posts,saveLike:blogdata.saveLike}}>
      {props.children}
    </BlogContext.Provider>
  );
}
