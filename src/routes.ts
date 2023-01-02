import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

// -- ROTAS USER --
router.post('/users', createUserController.handle);
router.post('/session', authUserController.handle);

export { router };