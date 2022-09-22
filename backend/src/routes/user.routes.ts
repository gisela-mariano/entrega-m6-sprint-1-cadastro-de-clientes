import { Router } from 'express';
import userCreateController from '../controllers/userCreate.controller';
import userListAllController from '../controllers/userListAllController';

const userRouter = Router();

userRouter.post('', userCreateController);
userRouter.get('', userListAllController);

export default userRouter;