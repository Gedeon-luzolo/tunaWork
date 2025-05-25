"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Filter, 
  Search, 
  TrendingUp, 
  Users, 
  Briefcase,
  Lightbulb,
  Megaphone,
  Plus
} from "lucide-react";
import { FeedPost } from "./FeedPost";
import { feedPosts, type Post } from "../../lib/data/feed";

export function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(feedPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "Tout", icon: TrendingUp, count: posts.length },
    { id: "project", label: "Projets", icon: Briefcase, count: posts.filter(p => p.type === 'project').length },
    { id: "achievement", label: "Réussites", icon: Users, count: posts.filter(p => p.type === 'achievement').length },
    { id: "tip", label: "Conseils", icon: Lightbulb, count: posts.filter(p => p.type === 'tip').length },
    { id: "announcement", label: "Annonces", icon: Megaphone, count: posts.filter(p => p.type === 'announcement').length },
  ];

  // Filtrer les posts
  const filteredPosts = posts.filter(post => {
    const matchesFilter = selectedFilter === "all" || post.type === selectedFilter;
    const matchesSearch = searchQuery === "" || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const handleComment = (postId: number, comment: string) => {
    const newComment = {
      id: Date.now(),
      author: {
        name: "Vous",
        avatar: "/api/placeholder/30/30"
      },
      content: comment,
      timestamp: "À l'instant"
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  const handleShare = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, shares: post.shares + 1 }
          : post
      )
    );
    // Ici vous pourriez ajouter la logique de partage réelle
    console.log(`Partage du post ${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Fil d'actualité
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Découvrez les dernières publications de notre communauté
              </p>
            </div>
            
            <button className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              <span>Publier</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar - Filtres */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Filtres
              </h2>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Filter Buttons */}
              <div className="space-y-2">
                {filters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedFilter === filter.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{filter.label}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedFilter === filter.id
                          ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Statistiques
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Publications totales</span>
                    <span className="font-medium">{posts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freelancers actifs</span>
                    <span className="font-medium">{new Set(posts.map(p => p.author.id)).size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interactions</span>
                    <span className="font-medium">
                      {posts.reduce((acc, post) => acc + post.likes + post.comments.length + post.shares, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Posts */}
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <FeedPost
                      post={post}
                      onLike={handleLike}
                      onComment={handleComment}
                      onShare={handleShare}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Aucune publication trouvée
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Essayez de modifier vos filtres ou votre recherche.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
