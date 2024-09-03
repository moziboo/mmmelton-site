import { FC, useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

interface Post {
  pk: string;
  sk: string;
  title: string;
  description: string;
  body: string;
  date: string;
  image: string;
}

const Blog: FC = () => {
  const [posts, updatePosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data: Post[] = await response.json();
        updatePosts(data);
        console.log("data: ", data)
      } catch (err: any) {
        throw new Error('catastrophe');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} date={post.date} description={post.description} />
      ))}
    </div>
  );
};

export default Blog;