import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

import Data from '../db.json';
import path from 'path';
import * as fs from 'fs/promises';
let Posts = Data.posts;
const DATA_FILE = path.join(__dirname, 'data.json')


const validatePostAddition = [
  body('author').notEmpty().withMessage('Author is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be in the correct format'),
  body('likes').isInt({ min: 0 }).withMessage('Likes must be a non-negative integer'),
  body('comments').optional().isArray().withMessage('Comments must be an array'),
];

export class PostController {
    public async createPost(req: Request, res: Response): Promise<void> {
        const errors = validationResult(req);
        
          if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
          }
          try {
                const newPost: Post = req.body; 
                const filePath = './db.json';
        
                let data: any = {};
                try {
                    const fileContent = await fs.readFile(filePath, 'utf-8');
                    data = JSON.parse(fileContent);
                } catch (readError: any) {
                    if (readError.code === 'ENOENT') {
                        data = { posts: [] };
                    } else {
                        throw readError;
                    }
                }
                if (!Array.isArray(data.posts)) {
                    data.posts = [];
                }
                data.posts.push(newPost);
        
                await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        
        
                const convertedPost = {
                    ...newPost,
                    id: Number(newPost.id),
                    comments: Array.isArray(newPost.comments)
                        ? newPost.comments.map(comment => ({
                            ...comment,
                            id: Number(comment.id),
                            date: typeof comment.date === 'string' ? comment.date : comment.date.toISOString(),
                            likes: (comment as any).likes !== undefined ? (comment as any).likes : 0
                        }))
                        : []
                };
                Posts.push(convertedPost);
        
                res.status(201).json({ message: 'Post added successfully', post: convertedPost });
        
            } catch (error) {
                console.error('Error adding post:', error);
                res.status(500).json({ message: 'Internal server error.' });
            }
    }

    public async getPostByID(req: Request, res: Response): Promise<void> {
        const objectId = parseInt(req.params.id);
        const post = Posts.find((post) => post.id === objectId);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getPosts(req: Request, res: Response): Promise<void> {
        if (Posts){
            res.json(Posts)
        }else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getCommentsByPostID(req: Request, res: Response): Promise<void> {
        const objectId = parseInt(req.params.id);
        const post = Posts.find((post) => post.id === objectId);
        if (post) {
            res.json(post.comments);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
}