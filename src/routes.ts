import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController'

import { isAutheticated } from './middlewares/isAutheticated';

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const createCategoryController = new CreateCategoryController();

// -- ROTAS USER --
router.post('/users', createUserController.handle);

router.post('/session', authUserController.handle);

router.get('/me', isAutheticated, detailUserController.handle);

// -- ROTAS  CATEGORY
router.post('/category', isAutheticated, createCategoryController.handle);


export { router };