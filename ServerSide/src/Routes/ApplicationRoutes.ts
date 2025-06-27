import { Router } from 'express';
import { ApplicationController } from '../Controllers/ApplicationController';

const router = Router();
const applicationController = new ApplicationController();

router.get('/logo', applicationController.getLogo.bind(applicationController));

export default router;