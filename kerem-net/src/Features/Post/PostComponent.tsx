import React from 'react';

interface Comment {
    id: string;
    author: string;
    text: string;
    date: string;
}

interface SocialMediaPostPros {
    id: string;
    authorName: string;
    content: string;
    likes: number;
    postDate: string;
    comments: Comment[];
}