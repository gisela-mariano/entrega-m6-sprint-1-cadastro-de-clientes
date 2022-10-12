import { Router } from 'express';
import userCreateController from '../controllers/user/userCreate.ctrl';
import userListAllController from '../controllers/user/userListAll.ctrl';
import userListOneController from '../controllers/user/userListOne.ctrl';
import userLoginController from '../controllers/user/userLogin.ctrl';
import verifyIfUserEmailExistsMiddleware from '../middlewares/user/verifyIfUserEmailExists.mdlw';
import verifyIfUserExistsMiddleware from '../middlewares/user/verifyIfUserExists.mdlw';

const userRouter = Router();

userRouter.post('', verifyIfUserEmailExistsMiddleware, userCreateController);
userRouter.post('/login', userLoginController);
userRouter.get('', userListAllController);
userRouter.get(
  '/:id_user',
  verifyIfUserExistsMiddleware,
  userListOneController
);

export default userRouter;
