import { Router } from 'express';
import userCreateController from '../controllers/userCreate.controller';
import userListAllController from '../controllers/userListAllController';
import userLoginController from '../controllers/userLogin.controller';

const userRouter = Router();

userRouter.post('', userCreateController);
userRouter.post('/login', userLoginController);
userRouter.get('', userListAllController);

export default userRouter;
