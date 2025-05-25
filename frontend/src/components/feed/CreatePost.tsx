"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Image, 
  Video, 
  Smile, 
  MapPin, 
  X,
  Camera,
  FileText,
  Award,
  Lightbulb,
  Megaphone
} from "lucide-react";

interface CreatePostProps {
  onClose: () => void;
  onSubmit: (post: any) => void;
}

export function CreatePost({ onClose, onSubmit }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState<string>("project");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const postTypes = [
    { id: "project", label: "Projet", icon: FileText, color: "bg-blue-500" },
    { id: "achievement", label: "Réussite", icon: Award, color: "bg-green-500" },
    { id: "tip", label: "Conseil", icon: Lightbulb, color: "bg-yellow-500" },
    { id: "announcement", label: "Annonce", icon: Megaphone, color: "bg-purple-500" },
  ];

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    if (content.trim()) {
      const newPost = {
        content: content.trim(),
        type: selectedType,
        tags: tags,
        timestamp: new Date().toISOString()
      };
      onSubmit(newPost);
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Créer une publication
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Author Info */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">V</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Votre nom</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Votre titre professionnel</p>
            </div>
          </div>

          {/* Post Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Type de publication
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {postTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${type.color} flex items-center justify-center mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contenu de votre publication
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Partagez vos projets, réussites, conseils ou annonces avec la communauté..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {content.length}/1000 caractères
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags (optionnel)
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                >
                  <span>#{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-blue-900 dark:hover:text-blue-100"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Ajouter un tag..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <button
                onClick={handleAddTag}
                disabled={!newTag.trim()}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300 text-sm rounded-lg transition-colors"
              >
                Ajouter
              </button>
            </div>
          </div>

          {/* Media Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Ajouter des médias (bientôt disponible)
            </label>
            <div className="flex space-x-4">
              <button
                disabled
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed"
              >
                <Image className="w-4 h-4" />
                <span>Photo</span>
              </button>
              <button
                disabled
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed"
              >
                <Video className="w-4 h-4" />
                <span>Vidéo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Votre publication sera visible par toute la communauté
          </p>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              Publier
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
