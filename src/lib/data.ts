import { PlaceHolderImages } from './placeholder-images';

export type User = {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
};

export type Comment = {
  id: string;
  text: string;
  user: User;
  timestamp: Date;
};

export type Post = {
  id: string;
  user: User;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  timestamp: Date;
};

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

const users: User[] = [
  { id: '1', name: 'Sarah Lee', username: 'sarahlee', avatarUrl: findImage('user-1-avatar'), bio: 'Photographer & Traveler. Capturing moments from around the world.', followers: 1500, following: 320 },
  { id: '2', name: 'Mike P.', username: 'mikep', avatarUrl: findImage('user-2-avatar'), bio: 'Food blogger and aspiring chef. Love to cook and eat!', followers: 850, following: 500 },
  { id: '3', name: 'Jane Doe', username: 'janedoe', avatarUrl: findImage('user-3-avatar'), bio: 'Developer and tech enthusiast. Building the future, one line of code at a time.', followers: 2200, following: 150 },
  { id: '4', name: 'Alex Smith', username: 'alexsmith', avatarUrl: findImage('user-4-avatar'), bio: 'Fitness coach and nature lover. Adventure awaits!', followers: 450, following: 180 },
  { id: '5', name: 'Chris Green', username: 'chrisgreen', avatarUrl: findImage('user-5-avatar'), bio: 'Music producer and DJ. Dropping beats daily.', followers: 5000, following: 50 },
];

const comments: { [postId: string]: Comment[] } = {
  'post-1': [
    { id: 'c1', text: 'Stunning shot! Where was this taken?', user: users[3], timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { id: 'c2', text: 'Wow, absolutely breathtaking!', user: users[1], timestamp: new Date(Date.now() - 1000 * 60 * 2) },
  ],
  'post-2': [
    { id: 'c3', text: 'That looks so delicious! Recipe?', user: users[0], timestamp: new Date(Date.now() - 1000 * 60 * 10) },
  ],
};

export const posts: Post[] = [
  {
    id: 'post-1',
    user: users[0],
    content: 'Chasing sunsets. There is nothing quite like the peace of watching the sun dip below the horizon. ✨',
    imageUrl: findImage('post-1-image'),
    likes: 182,
    comments: comments['post-1'] || [],
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: 'post-2',
    user: users[1],
    content: 'Homemade pasta night! A classic carbonara to warm the soul.',
    imageUrl: findImage('post-2-image'),
    likes: 250,
    comments: comments['post-2'] || [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: 'post-3',
    user: users[3],
    content: 'Reached the summit! The climb was tough but the view was worth every step. #hiking #adventure',
    imageUrl: findImage('post-3-image'),
    likes: 120,
    comments: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: 'post-4',
    user: users[2],
    content: 'Finally deployed the new feature I\'ve been working on for weeks. It feels so good to see it live! #coding #developerlife',
    likes: 95,
    comments: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
  },
  {
    id: 'post-5',
    user: users[0],
    content: 'Exploring the vibrant streets of Tokyo. What an incredible city!',
    imageUrl: findImage('post-4-image'),
    likes: 215,
    comments: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 'post-6',
    user: users[4],
    content: 'New track just dropped! Check it out on all platforms. Link in bio. 🎧',
    imageUrl: findImage('post-9-image'),
    likes: 530,
    comments: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28),
  },
];

export const allUsers = users;

export const currentUser = users[2];

export const suggestedUsers = users.filter(u => u.id !== currentUser.id).slice(0, 4);
