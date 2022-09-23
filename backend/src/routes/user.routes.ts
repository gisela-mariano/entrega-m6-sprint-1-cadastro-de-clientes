import { Router } from 'express';
import userCreateController from '../controllers/user/userCreate.ctrl';
import userListAllController from '../controllers/user/userListAll.ctrl';
import userListOneController from '../controllers/user/userListOne.ctrl';
import userLoginController from '../controllers/user/userLogin.ctrl';
import verifyIfEmailAlreadExistsMiddleware from '../middlewares/verifyIfEmailAlreadyExists.mdlw';
import verifyIfUserExistsMiddleware from '../middlewares/verifyIfUserExists.mdlw';

const userRouter = Router();

userRouter.post('', verifyIfEmailAlreadExistsMiddleware, userCreateController);
userRouter.post('/login', userLoginController);
userRouter.get('', userListAllController);
userRouter.get('/:id_user', verifyIfUserExistsMiddleware, userListOneController);

export default userRouter;
