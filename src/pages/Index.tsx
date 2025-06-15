
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import ThemeSwitcher from '../components/ThemeSwitcher';
import AnimatedCursor from '../components/AnimatedCursor';
import AnimatedBackground from '../components/AnimatedBackground';
import { mockPosts } from '../data/mockData';

const Index = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const handleComment = (postId: string, comment: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { id: Date.now().toString(), author: 'Anonymous', content: comment, avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}` }] }
        : post
    ));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedCursor />
        <AnimatedBackground />
        
        <div className="relative z-10">
          <Header />
          <ThemeSwitcher />
          
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={() => handleLike(post.id)}
                  onComment={(comment) => handleComment(post.id, comment)}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
