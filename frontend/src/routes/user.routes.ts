import { Router } from 'express';
import userCreateController from '../controllers/userCreate.controller';

const userRouter = Router();

userRouter.post('', userCreateController);

export default userRouter;