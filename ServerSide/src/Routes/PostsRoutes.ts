import { Router } from 'express';
import { PostController } from '../Controllers/PostsController';
import { PostsService } from '../Services/PostsServices';

const router = Router();
const postServices = new PostsService();
const postController = new PostController(postServices);

router.post('/', postController .createPost.bind(postController));
router.get('/', postController.getPosts.bind(postController));
router.get('/:id/comments', postController.getCommentsByPostID.bind(postController));
router.get('/:id', postController.getPostByID.bind(postController));

export default router;