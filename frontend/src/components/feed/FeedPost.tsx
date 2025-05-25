"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal, 
  CheckCircle,
  MapPin,
  Clock
} from "lucide-react";
import { type Post } from "../../lib/data/feed";

interface FeedPostProps {
  post: Post;
  onLike?: (postId: number) => void;
  onComment?: (postId: number, comment: string) => void;
  onShare?: (postId: number) => void;
}

export function FeedPost({ post, onLike, onComment, onShare }: FeedPostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike?.(post.id);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      onComment?.(post.id, newComment);
      setNewComment("");
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'project': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'achievement': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'tip': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'announcement': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'project': return 'Projet';
      case 'achievement': return 'Réussite';
      case 'tip': return 'Conseil';
      case 'announcement': return 'Annonce';
      default: return 'Publication';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* Header */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
              </div>
              {post.author.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Author Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                  {post.author.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPostTypeColor(post.type)}`}>
                  {getPostTypeLabel(post.type)}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {post.author.title}
              </p>
              <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500 dark:text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{post.author.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.timestamp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* More Options */}
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Media */}
        {post.media && post.media.length > 0 && (
          <div className="mb-4">
            {post.media.length === 1 ? (
              <div className="rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    {post.media[0].alt || 'Image'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                {post.media.slice(0, 4).map((media, index) => (
                  <div key={index} className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {media.alt || `Image ${index + 1}`}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-6">
            {/* Like */}
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isLiked 
                  ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likesCount}</span>
            </button>

            {/* Comment */}
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments.length}</span>
            </button>

            {/* Share */}
            <button
              onClick={() => onShare?.(post.id)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">{post.shares}</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            {/* Existing Comments */}
            <div className="space-y-3 mb-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {comment.author.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        {comment.author.name}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 ml-3">
                      {comment.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">V</span>
              </div>
              <div className="flex-1 flex space-x-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Ajouter un commentaire..."
                  className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleComment()}
                />
                <button
                  onClick={handleComment}
                  disabled={!newComment.trim()}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-colors"
                >
                  Publier
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
