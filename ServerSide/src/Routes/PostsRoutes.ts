import { Router } from 'express';
import { UserController } from '../Controllers/PostsController';

const router = Router();
const userController = new UserController();

router.post('/', userController.createPost.bind(userController)); 
router.get('/', userController.getPosts.bind(userController));
router.get('/:id/comments', userController.getCommentsByPostID.bind(userController));
router.get('/:id', userController.getPostByID.bind(userController));

export default router;