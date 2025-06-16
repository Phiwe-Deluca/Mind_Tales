
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import ThemeSwitcher from '../components/ThemeSwitcher';
import AnimatedCursor from '../components/AnimatedCursor';
import AnimatedBackground from '../components/AnimatedBackground';
import GildedElements from '../components/GildedElements';
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
        ? { ...post, comments: [...post.comments, { 
            id: Date.now().toString(), 
            author: 'Soul Seeker', 
            content: comment, 
            avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}` 
          }] }
        : post
    ));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedCursor />
        <AnimatedBackground />
        <GildedElements />
        
        <div className="relative z-10">
          <Header />
          <ThemeSwitcher />
          
          {/* Mystical navigation */}
          <nav className="flex justify-center mb-12">
            <div className="flex space-x-8 px-8 py-4 rounded-full bg-black/30 backdrop-blur-md border border-amber-400/20">
              <a href="#" className="text-amber-200 hover:text-amber-100 font-mystical tracking-wide transition-colors">
                Sacred Journal
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-100 font-mystical tracking-wide transition-colors">
                Ritual Gallery
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-100 font-mystical tracking-wide transition-colors">
                Goddess Circle
              </a>
            </div>
          </nav>
          
          <main className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Mystical intro */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-amber-100 mb-4">
                  ✧ Sacred Scrolls of Power ✧
                </h2>
                <p className="text-amber-200/80 font-mystical text-lg max-w-2xl mx-auto">
                  Journey through these gilded pages where ancient wisdom meets modern magic, 
                  and every story pulses with goddess energy and untamed spirit.
                </p>
              </div>

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

          {/* Footer with mystical elements */}
          <footer className="mt-20 py-12 text-center border-t border-amber-400/20">
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-600"></div>
            </div>
            <p className="text-amber-200/60 font-mystical">
              ✧ Blessed by ritual fire, powered by goddess energy ✧
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
