import React from 'react';

interface HeaderProps {
  title: string;
  date: string;
  description: string;
}

const PostCard: React.FC<HeaderProps> = ({title, date, description}) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num - 3) + '...';
  };

  return (
    <div className="m-2 h-auto text-center">
      <div className="h-52 mb-1 border border-dashed border-gray-800">
      </div>
      <div className="p-4 border border-dashed border-gray-800">
        <div className="text-left">{title}</div>
        <p className="text-left">{date}</p>
        <p className="text-left">{truncateString(description, 84)}</p>
      </div>
    </div>
  );
};

export default PostCard;