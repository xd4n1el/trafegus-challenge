import { Router } from 'express';
import { ApiController } from '../controllers/api.controller';

const apiRouter = Router();

const apiController = new ApiController();

apiRouter.get('/health', apiController.healthCheck.bind(apiController));

export default apiRouter;
