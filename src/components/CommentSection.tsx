
import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  avatar: string;
}

interface CommentSectionProps {
  comments: Comment[];
  onComment: (comment: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-6 space-y-4 border-t-2 border-dashed border-purple-300 pt-6">
      <h3 className="text-lg font-bold magazine-font text-purple-600 flex items-center">
        <Sparkles className="w-5 h-5 mr-2" />
        Comments
      </h3>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <img 
              src={comment.avatar} 
              alt={comment.author}
              className="w-8 h-8 rounded-full pixelated border-2 border-purple-300"
            />
            <div className="speech-bubble bg-white p-3 rounded-2xl border-2 border-purple-300 relative max-w-md">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-white border-l-2 border-b-2 border-purple-300 transform rotate-45"></div>
              <p className="text-sm magazine-font text-gray-800">{comment.content}</p>
              <span className="text-xs text-purple-500 pixelated-font mt-1 block">
                {comment.author}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts... ✨"
          className="flex-1 px-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none magazine-font"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors transform hover:scale-105"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
