import React from 'react';
import PostCard from '../components/PostCard';

const Blog: React.FC = () => {

  const testData = [
    { 
      title: "Howdy Pardner", 
      date: "Tuesday", 
      description: "This was a wild trip.. Well, wild, but also lonesome. If you're ever headed out this way, you best keep in mind" 
    },
    { 
      title: "Well worn daffodillo", 
      date: "Thursdey", 
      description: "The way I found the place was anybody's quess, but I'd need to retroactively leave some breadcrumbs in reverse, to mark the rereturn pathway" 
    },
  ]

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PostCard title={testData[0].title} date={testData[0].date} description={testData[0].description}/>
      <PostCard title={testData[1].title} date={testData[1].date} description={testData[1].description}/>
      <PostCard title={testData[0].title} date={testData[0].date} description={testData[0].description}/>
      <PostCard title={testData[1].title} date={testData[1].date} description={testData[1].description}/>
      <PostCard title={testData[0].title} date={testData[0].date} description={testData[0].description}/>
    </div>
  );
};

export default Blog;