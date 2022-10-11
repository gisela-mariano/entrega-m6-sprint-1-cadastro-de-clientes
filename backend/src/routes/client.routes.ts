import { Router } from 'express';
import ClientCreateController from '../controllers/client/clientCreate.ctrl';
import clientListAllController from '../controllers/client/clientListAll.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.mdlw';

const clientRouter = Router();

clientRouter.post('', verifyAuthTokenMiddleware, ClientCreateController);
clientRouter.get('', verifyAuthTokenMiddleware, clientListAllController);

export default clientRouter;
