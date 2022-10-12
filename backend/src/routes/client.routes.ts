import { Router } from 'express';
import ClientCreateController from '../controllers/client/clientCreate.ctrl';
import clientListAllController from '../controllers/client/clientListAll.ctrl';
import clientUpdateController from '../controllers/client/clientUpdate.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/user/verifyAuthToken.mdlw';
import verifyIfClientExistsMiddleware from '../middlewares/client/verifyIfClientExists.mdlw';
import clientDeleteController from '../controllers/client/clientDelete.ctrl';
import vreifiIfIsUserClientMiddleware from '../middlewares/client/verifyIfIsUserClient.mdlw';
import vreifiIfIsUserClientNameAlreadyRegistredMiddleware from '../middlewares/client/verifyIfUserClientNameAlreadyRegistred.mdlw';

const clientRouter = Router();

clientRouter.post(
  '',
  verifyAuthTokenMiddleware,
  vreifiIfIsUserClientNameAlreadyRegistredMiddleware,
  ClientCreateController
);
clientRouter.get('', verifyAuthTokenMiddleware, clientListAllController);
clientRouter.put(
  '/:id_client',
  verifyAuthTokenMiddleware,
  verifyIfClientExistsMiddleware,
  vreifiIfIsUserClientMiddleware,
  vreifiIfIsUserClientNameAlreadyRegistredMiddleware,
  clientUpdateController
);
clientRouter.delete(
  '/id_client',
  verifyAuthTokenMiddleware,
  verifyIfClientExistsMiddleware,
  vreifiIfIsUserClientMiddleware,
  clientDeleteController
);

export default clientRouter;
