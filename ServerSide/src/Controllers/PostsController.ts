import { Request, Response } from 'express';
import { body } from 'express-validator';
import { Post } from '../Types/Post';
import { PostsService } from '../Services/PostsServices';


export class PostController {

    private postsService: PostsService;

    constructor() {
        this.postsService = new PostsService(); // Instantiate the service
    }

    public async createPost(req: Request, res: Response): Promise<void> {
        const errors = this.postsService.ValidateNewPost(req);
        if (!(await errors).isEmpty()) {
            res.status(400).json({ message: 'Post request Failed:', errors });
        }
        try {
            const new_post : Post = req.body;
            const service_response = this.postsService.CreatePost(new_post);
            res.status(201).json({ message: 'Post added successfully', post: new_post });
            
        } catch (error) {
            console.error('Error adding post:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }

    public async getPostByID(req: Request, res: Response): Promise<void> {
        const Posts = this.postsService.GetAllPosts();
        const post = this.postsService.GetPostbyID(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getPosts(req: Request, res: Response): Promise<void> {
        const Posts =this.postsService.GetAllPosts();
        if (Posts){
            res.json(Posts)
        }else {
            res.status(404).json({ message: 'Post not found' });
        }
    }

    public async getCommentsByPostID(req: Request, res: Response): Promise<void> {
        const Posts = this.postsService.GetAllPosts();
        const post = await this.postsService.GetPostbyID(req.params.id);
        if (post) {
            res.json(post.comments);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
}