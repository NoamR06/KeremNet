import { Comment } from "../Types/Comment";
import { Post } from "../Types/Post";
import { body, Result, ValidationError, validationResult } from 'express-validator';
import express, { Request, Response, NextFunction } from 'express';

export class PostsService {
    private postsSaver: Post[];

    constructor(){
        this.postsSaver = [];
    }

    public ValidateNewPost(request: Request): Result<ValidationError> {
        const validatePostAddition = [
          body('author').notEmpty().withMessage('Author is required'),
          body('content').notEmpty().withMessage('Content is required'),
          body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be in the correct format'),
          body('likes').isInt({ min: 0 }).withMessage('Likes must be a non-negative integer'),
          body('comments').optional().isArray().withMessage('Comments must be an array'),
        ];

        const errors = validationResult(request);
        return errors;
    }

    public async CreatePost(userData: Post) {
        this.postsSaver.push(userData);
    }

    public GetAllPosts(): Post[] {
        return this.postsSaver;
    }

    public async GetPostbyID(id: string): Promise<Post | undefined>{
        return this.postsSaver.find((post) => post.id === id);
    }
}