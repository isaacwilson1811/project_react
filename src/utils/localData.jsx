import React, { useEffect, createContext } from 'react';
export const BlogContext = createContext({});

class BlogData {
  static posts = [];

  static newPost(id,likes,dislikes) {
    let post = new Post(id,likes,dislikes);
    BlogData.posts.push(post);
    BlogData.saveStorage();
  }
  static checkStorage(){
    if (localStorage.getItem('BLOGDATA') === null) {
      BlogData.initStorage();
    } else {
    BlogData.posts = JSON.parse(localStorage.getItem('BLOGDATA'));
    }
  }
  static initStorage(){
    for(let i=0; i < 10; i++){
      BlogData.newPost(i+1,1,0);
    }
  }
  static saveStorage(){
    localStorage.setItem('BLOGDATA', JSON.stringify(BlogData.posts));
  }
}

class Post {
  constructor(id, likes, dislikes){
    this.id = id;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}

export function LocalDataFunc() {
  useEffect( () => {
    BlogData.checkStorage();
  },[]);
  return(<></>);
}

export function BlogContextProvider(props){
  return (
    <BlogContext.Provider value={BlogData.posts}>
      {props.children}
    </BlogContext.Provider>
  );
}
