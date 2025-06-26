import { Post } from "../Types/Post";
import { body, Result, ValidationError, validationResult } from 'express-validator';
import { Request } from 'express';

export class PostsService {
    private postsSaver: Post[];

    constructor(){
        this.postsSaver = [];
    }

    private validatePostAddition = [
        body('author').notEmpty().withMessage('Author is required'),
        body('content').notEmpty().withMessage('Content is required'),
        body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be in the correct format'),
        body('likes').isInt({ min: 0 }).withMessage('Likes must be a non-negative integer'),
        body('comments').optional().isArray().withMessage('Comments must be an array'),
    ];

    public async ValidateNewPost(request: Request): Promise<Result<ValidationError>> {
        for (const validation of this.validatePostAddition) {
            await validation.run(request);
        }
        return validationResult(request);
    }

    public CreatePost(userData: Post) {
        this.postsSaver.push(userData);
    }

    public GetAllPosts(): Post[] {  
        return this.postsSaver;
    }

    public GetPostbyID(id: string): Post | undefined{
        return this.postsSaver.find((post) => post.id == id);
    }
}