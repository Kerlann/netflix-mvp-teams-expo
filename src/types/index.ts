// Content related types
export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  maturityRating: string;
  releaseYear: number;
  duration?: string; // For movies
  seasons?: number; // For TV shows
  genre: string[];
  type: 'movie' | 'tvshow';
  isNew?: boolean;
  isTrending?: boolean;
  isTopRated?: boolean;
}

// User related types
export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  isKids: boolean;
  preferences: {
    autoPlay: boolean;
    dataUsage: 'auto' | 'low' | 'medium' | 'high';
    notificationsEnabled: boolean;
  };
}

export interface Account {
  email: string;
  plan: 'basic' | 'standard' | 'premium';
  profiles: UserProfile[];
  currentProfileId: string;
}

// Custom lists types
export interface List {
  id: string;
  name: string;
  contentIds: string[];
}

// Download related types
export interface Download {
  id: string;
  contentId: string;
  dateDownloaded: Date;
  expiryDate: Date;
  size: number; // in MB
  quality: 'low' | 'medium' | 'high';
  isComplete: boolean;
  progress?: number; // 0-100 for in-progress downloads
}

// Search related types
export interface SearchResult {
  id: string;
  title: string;
  thumbnailUrl: string;
  type: 'movie' | 'tvshow' | 'person';
  relevanceScore: number;
}

// Playback related types
export interface PlaybackSettings {
  subtitles: boolean;
  subtitleLanguage?: string;
  audioLanguage?: string;
  playbackSpeed: number;
  autoplayNextEpisode: boolean;
}

// Notification related types
export interface Notification {
  id: string;
  title: string;
  message: string;
  date: Date;
  type: 'new-content' | 'recommendation' | 'account' | 'promotion';
  isRead: boolean;
  contentId?: string;
}

// Analytics related types
export interface ContentInteraction {
  contentId: string;
  profileId: string;
  watchTimeMinutes: number;
  completionPercentage: number;
  dateWatched: Date;
  deviceType: string;
}
