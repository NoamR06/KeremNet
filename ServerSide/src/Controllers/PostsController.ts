import { Request, Response } from 'express';
import { body } from 'express-validator';
import { Post } from '../Types/Post';
import { PostsService } from '../Services/PostsServices';


const validatePostAddition = [
  body('author').notEmpty().withMessage('Author is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be in the correct format'),
  body('likes').isInt({ min: 0 }).withMessage('Likes must be a non-negative integer'),
  body('comments').optional().isArray().withMessage('Comments must be an array'),
];

export class PostController {

    private userService: PostsService;

    constructor() {
        this.userService = new PostsService(); // Instantiate the service
    }

    public async createPost(req: Request, res: Response): Promise<void> {
        try {
            const new_post : Post = req.body;
            const service_response = this.userService.CreatePost(new_post);
            res.status(201).json({ message: 'Post added successfully', post: new_post });
            
        } catch (error) {
            console.error('Error adding post:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }

    public async getPostByID(req: Request, res: Response): Promise<void> {
        const Posts = this.userService.GetAllPosts();
        const post = this.userService.GetPostbyID(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getPosts(req: Request, res: Response): Promise<void> {
        const Posts =this.userService.GetAllPosts();
        if (Posts){
            res.json(Posts)
        }else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getCommentsByPostID(req: Request, res: Response): Promise<void> {
        const Posts = this.userService.GetAllPosts();
        const post = await this.userService.GetPostbyID(req.params.id);
        if (post) {
            res.json(post.comments);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
}