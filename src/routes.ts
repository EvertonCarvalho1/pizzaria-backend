import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListbyCategoryController } from './controllers/product/ListbyCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { isAutheticated } from './middlewares/isAutheticated';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const createProductController = new CreateProductController();
const listbyCategoryController = new ListbyCategoryController();
const createOrderController = new CreateOrderController();
const removeOrderController = new RemoveOrderController();

// -- ROTAS USER --
router.post('/users', createUserController.handle);

router.post('/session', authUserController.handle);

router.get('/me', isAutheticated, detailUserController.handle);

// -- ROTAS  CATEGORY
router.post('/category', isAutheticated, createCategoryController.handle);

router.get('/category', isAutheticated, listCategoryController.handle);

// -- ROTAS PRODUCT
router.post('/product', isAutheticated, upload.single('file'), createProductController.handle);

router.get('/category/product', isAutheticated, listbyCategoryController.handle);

//-- ROTAS ORDER
router.post('/order', isAutheticated, createOrderController.handle);

router.delete('/order', isAutheticated, removeOrderController.handle);


export { router };