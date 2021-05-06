import { LocalDataFunc, BlogContextProvider } from '../utils/localData';
import { BlogPost } from '../components';

export function Blog() {
  return (
    <>
    <LocalDataFunc />
    <BlogContextProvider>
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    </BlogContextProvider>
    </>
  );
}