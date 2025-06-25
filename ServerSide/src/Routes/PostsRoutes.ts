import { Router } from 'express';
import { PostController } from '../Controllers/PostsController';

const router = Router();
const postController = new PostController();

router.post('/', postController.createPost.bind(postController));
router.get('/', postController.getPosts.bind(postController));
router.get('/:id/comments', postController.getCommentsByPostID.bind(postController));
router.get('/:id', postController.getPostByID.bind(postController));

export default router;