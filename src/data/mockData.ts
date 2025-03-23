import { Content, UserProfile, Account, Download, Notification } from '../types';

// Mock content data
export const mockContent: Content[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Stranger+Things',
    maturityRating: 'TV-14',
    releaseYear: 2016,
    seasons: 4,
    genre: ['Drama', 'Fantasy', 'Horror'],
    type: 'tvshow',
    isTopRated: true,
    isTrending: true
  },
  {
    id: '2',
    title: 'The Queen\'s Gambit',
    description: 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Queens+Gambit',
    maturityRating: 'TV-MA',
    releaseYear: 2020,
    seasons: 1,
    genre: ['Drama'],
    type: 'tvshow',
    isTopRated: true
  },
  {
    id: '3',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=The+Witcher',
    maturityRating: 'TV-MA',
    releaseYear: 2019,
    seasons: 2,
    genre: ['Fantasy', 'Action', 'Adventure'],
    type: 'tvshow',
    isNew: true
  },
  {
    id: '4',
    title: 'Extraction',
    description: 'A hardened mercenary\'s mission becomes a soul-searching race to survive when he\'s sent into Bangladesh to rescue a drug lord\'s kidnapped son.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Extraction',
    maturityRating: 'R',
    releaseYear: 2020,
    duration: '1h 56m',
    genre: ['Action', 'Thriller'],
    type: 'movie',
    isTrending: true
  },
  {
    id: '5',
    title: 'The Irishman',
    description: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=The+Irishman',
    maturityRating: 'R',
    releaseYear: 2019,
    duration: '3h 29m',
    genre: ['Crime', 'Drama', 'Biography'],
    type: 'movie',
    isTopRated: true
  },
  {
    id: '6',
    title: 'Roma',
    description: 'A story that chronicles a year in the life of a middle-class family\'s maid in Mexico City in the early 1970s.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Roma',
    maturityRating: 'R',
    releaseYear: 2018,
    duration: '2h 15m',
    genre: ['Drama'],
    type: 'movie',
    isTopRated: true
  },
  {
    id: '7',
    title: 'Money Heist',
    description: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Money+Heist',
    maturityRating: 'TV-MA',
    releaseYear: 2017,
    seasons: 5,
    genre: ['Crime', 'Drama', 'Thriller'],
    type: 'tvshow',
    isTrending: true
  },
  {
    id: '8',
    title: 'Bird Box',
    description: 'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Bird+Box',
    maturityRating: 'R',
    releaseYear: 2018,
    duration: '2h 4m',
    genre: ['Horror', 'Sci-Fi', 'Thriller'],
    type: 'movie',
    isTrending: true
  },
  {
    id: '9',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=Breaking+Bad',
    maturityRating: 'TV-MA',
    releaseYear: 2008,
    seasons: 5,
    genre: ['Crime', 'Drama', 'Thriller'],
    type: 'tvshow',
    isTopRated: true
  },
  {
    id: '10',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
    thumbnailUrl: 'https://via.placeholder.com/300x450?text=The+Crown',
    maturityRating: 'TV-MA',
    releaseYear: 2016,
    seasons: 4,
    genre: ['Drama', 'History'],
    type: 'tvshow',
    isNew: true
  }
];

// Mock user profiles
export const mockProfiles: UserProfile[] = [
  {
    id: 'profile1',
    name: 'John',
    avatarUrl: 'https://via.placeholder.com/100x100?text=J',
    isKids: false,
    preferences: {
      autoPlay: true,
      dataUsage: 'auto',
      notificationsEnabled: true
    }
  },
  {
    id: 'profile2',
    name: 'Sarah',
    avatarUrl: 'https://via.placeholder.com/100x100?text=S',
    isKids: false,
    preferences: {
      autoPlay: true,
      dataUsage: 'medium',
      notificationsEnabled: false
    }
  },
  {
    id: 'profile3',
    name: 'Kids',
    avatarUrl: 'https://via.placeholder.com/100x100?text=K',
    isKids: true,
    preferences: {
      autoPlay: false,
      dataUsage: 'low',
      notificationsEnabled: false
    }
  }
];

// Mock account
export const mockAccount: Account = {
  email: 'user@example.com',
  plan: 'standard',
  profiles: mockProfiles,
  currentProfileId: 'profile1'
};

// Mock downloads
export const mockDownloads: Download[] = [
  {
    id: 'dl1',
    contentId: '1',
    dateDownloaded: new Date('2025-03-20'),
    expiryDate: new Date('2025-04-20'),
    size: 1200,
    quality: 'medium',
    isComplete: true
  },
  {
    id: 'dl2',
    contentId: '4',
    dateDownloaded: new Date('2025-03-22'),
    expiryDate: new Date('2025-04-22'),
    size: 850,
    quality: 'high',
    isComplete: true
  },
  {
    id: 'dl3',
    contentId: '7',
    dateDownloaded: new Date('2025-03-23'),
    expiryDate: new Date('2025-04-23'),
    size: 650,
    quality: 'medium',
    isComplete: false,
    progress: 45
  }
];

// Mock notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif1',
    title: 'New Season Available',
    message: 'Stranger Things Season 5 is now available',
    date: new Date('2025-03-18'),
    type: 'new-content',
    isRead: false,
    contentId: '1'
  },
  {
    id: 'notif2',
    title: 'Continue Watching',
    message: 'You\'re halfway through The Witcher',
    date: new Date('2025-03-20'),
    type: 'recommendation',
    isRead: true,
    contentId: '3'
  },
  {
    id: 'notif3',
    title: 'Subscription Renewal',
    message: 'Your subscription will renew in 5 days',
    date: new Date('2025-03-21'),
    type: 'account',
    isRead: false
  }
];

// Helper function to get content by ID
export const getContentById = (id: string): Content | undefined => {
  return mockContent.find(content => content.id === id);
};

// Helper function to get filtered content
export const getFilteredContent = (filter: {
  type?: 'movie' | 'tvshow',
  genre?: string,
  isNew?: boolean,
  isTrending?: boolean,
  isTopRated?: boolean
}): Content[] => {
  return mockContent.filter(content => {
    if (filter.type && content.type !== filter.type) return false;
    if (filter.genre && !content.genre.includes(filter.genre)) return false;
    if (filter.isNew && !content.isNew) return false;
    if (filter.isTrending && !content.isTrending) return false;
    if (filter.isTopRated && !content.isTopRated) return false;
    return true;
  });
};

// Helper function to search content
export const searchContent = (query: string): Content[] => {
  const lowerCaseQuery = query.toLowerCase();
  return mockContent.filter(content => 
    content.title.toLowerCase().includes(lowerCaseQuery) || 
    content.description.toLowerCase().includes(lowerCaseQuery) ||
    content.genre.some(g => g.toLowerCase().includes(lowerCaseQuery))
  );
};
