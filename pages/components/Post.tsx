
import React, { useState } from 'react';
import { Post } from '../type';
import { User } from '../type';
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

interface PostProps {
  post: Post;
  user: User;
}

const PostComponent: React.FC<PostProps> = ({ post, user }) => {
  const [isLiked, setIsLiked] = useState(false);
  const like = null;
  const handleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };
  return (
    <div className="w-[100%]  align-middle mx-10  p-3 px-4 item-center  bg-white rounded-lg shadow-md  mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-2">
        {/* Account Information */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={post.image}
            alt={post.image}
          />
          <div className="flex gap-1 ">
            <span className="text-gray-900 font-bold text-xl">{user.username}</span>
            <span className='px-1'>.</span>
            <button className="text-blue-600 text-xs font-bold " onClick={handleLike}>Follow</button>
          </div>
        </div>
        {/* Bookmark Icon */}
        <div>
          <CgProfile size={24} color="purple" />
        </div>
      </div>
      {/* Post Image/Video */}
      <img className="w-full object-cover rounded-md" src={post.image} alt={post.caption} />
      {/* Post Footer */}
      <div className="flex items-center justify-between mt-2">
        {/* Heart, Comment, Share Icons */}
        <div className="flex items-center space-x-6">
          {isLiked ? <AiFillHeart onClick={handleLike} color='red' size={26} className='hover:border-red-600 transition-colors' /> : <AiOutlineHeart size={26} className='hover:border-red-600 transition-colors' onClick={handleLike} />}

          <FaRegComment size={20} color="" />
        </div>
        {/* Number of Likes */}
        <div className="text-gray-600">
          {post.likes} likes
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
