import React from 'react';

const PostCard = ({ content, author, commentCount }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4 w-full max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">{content}</h2>
      <p className="text-sm text-gray-600">Posted by: <span className="font-medium">{author}</span></p>
      <p className="text-sm text-gray-600">Comments: <span className="font-medium">{commentCount}</span></p>
    </div>
  );
};

export default PostCard;
