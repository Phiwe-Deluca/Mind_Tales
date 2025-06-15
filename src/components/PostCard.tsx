
import React, { useState } from 'react';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';
import CommentSection from './CommentSection';

interface Comment {
  id: string;
  author: string;
  content: string;
  avatar: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  mood: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
}

interface PostCardProps {
  post: Post;
  onLike: () => void;
  onComment: (comment: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getMoodStyle = (mood: string) => {
    const styles = {
      happy: 'bg-gradient-to-br from-yellow-200 to-pink-200 border-yellow-300',
      moody: 'bg-gradient-to-br from-indigo-200 to-purple-200 border-indigo-300',
      vibey: 'bg-gradient-to-br from-cyan-200 to-green-200 border-cyan-300',
      angsty: 'bg-gradient-to-br from-red-200 to-orange-200 border-red-300'
    };
    return styles[mood as keyof typeof styles] || styles.happy;
  };

  const getMoodColor = (mood: string) => {
    const colors = {
      happy: 'text-yellow-600',
      moody: 'text-indigo-600',
      vibey: 'text-cyan-600',
      angsty: 'text-red-600'
    };
    return colors[mood as keyof typeof colors] || colors.happy;
  };

  return (
    <article 
      className={`magazine-cutout p-6 rounded-lg border-4 border-dashed transform transition-all duration-300 hover:scale-105 hover:rotate-1 ${getMoodStyle(post.mood)} ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {isHovered && (
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="w-6 h-6 text-pink-400" />
          </div>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold magazine-font mb-2 transform hover:skew-x-2 transition-transform">
              {post.title}
            </h2>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mood-tag ${getMoodColor(post.mood)}`}>
                {post.mood}
              </span>
              <time className="text-sm text-gray-600 pixelated-font">
                {post.timestamp}
              </time>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 leading-relaxed magazine-font text-lg">
            {post.content}
          </p>
        </div>

        <div className="flex items-center justify-between border-t-2 border-dashed border-gray-300 pt-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                post.isLiked 
                  ? 'bg-pink-400 text-white shadow-lg' 
                  : 'bg-white border-2 border-pink-400 text-pink-600 hover:bg-pink-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="font-bold pixelated-font">{post.likes}</span>
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border-2 border-purple-400 text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold pixelated-font">{post.comments.length}</span>
            </button>
          </div>
        </div>

        {showComments && (
          <CommentSection 
            comments={post.comments} 
            onComment={onComment}
          />
        )}
      </div>
    </article>
  );
};

export default PostCard;
