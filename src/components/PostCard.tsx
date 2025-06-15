
import React, { useState } from 'react';
import { Heart, MessageCircle, Leaf, Crown } from 'lucide-react';
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
      cosmic: 'bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40 border-purple-400/30',
      jungle: 'bg-gradient-to-br from-emerald-900/40 via-green-900/40 to-teal-900/40 border-emerald-400/30',
      mystic: 'bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-yellow-900/40 border-amber-400/30',
      ancestral: 'bg-gradient-to-br from-red-900/40 via-amber-900/40 to-orange-900/40 border-red-400/30'
    };
    return styles[mood as keyof typeof styles] || styles.cosmic;
  };

  const getMoodIcon = (mood: string) => {
    const icons = {
      cosmic: '✧',
      jungle: '🌿',
      mystic: '✨',
      ancestral: '👑'
    };
    return icons[mood as keyof typeof icons] || '✧';
  };

  return (
    <article 
      className={`relative p-8 rounded-2xl border-2 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${getMoodStyle(post.mood)} ${isHovered ? 'shadow-2xl shadow-amber-500/20' : 'shadow-lg shadow-black/20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Leaf-bound aesthetic border */}
      <div className="absolute -top-2 -left-2 w-6 h-6">
        <Leaf className="w-full h-full text-emerald-400/60 transform -rotate-45" />
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6">
        <Leaf className="w-full h-full text-emerald-400/60 transform rotate-45" />
      </div>
      
      {/* Shimmer effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent animate-pulse rounded-2xl" />
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-amber-100 mb-3 font-serif leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-black/30 text-amber-200 border border-amber-400/30 backdrop-blur-sm">
                {getMoodIcon(post.mood)} {post.mood}
              </span>
              <time className="text-sm text-emerald-300/80 font-light">
                {post.timestamp}
              </time>
            </div>
          </div>
          {isHovered && <Crown className="w-8 h-8 text-amber-400 animate-pulse" />}
        </div>

        <div className="mb-8">
          <p className="text-amber-100/90 leading-relaxed text-lg font-light tracking-wide">
            {post.content}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-amber-400/20 pt-6">
          <div className="flex items-center space-x-6">
            <button
              onClick={onLike}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm ${
                post.isLiked 
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/25' 
                  : 'bg-black/30 border border-pink-400/30 text-pink-300 hover:bg-pink-500/20'
              }`}
            >
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="font-semibold">{post.likes}</span>
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-3 px-6 py-3 rounded-full bg-black/30 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">{post.comments.length}</span>
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
