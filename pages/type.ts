// type.ts
export interface Comment {
  id: string;
  text: string;
  user_id: string;
}

export interface Post {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

export interface User {
  id: string;
  username: string;
  name: string;
  profile_picture: string;
  followers: string[];
  posts: Post[];
}
