import { Router } from 'express';
import phoneCreateController from '../controllers/phone/phoneCreate.ctrl';
import phoneDeleteController from '../controllers/phone/phoneDelete.ctrl';
import phoneUpdateController from '../controllers/phone/phoneUpdate.ctrl';
import verifyIfClientExistsMiddleware from '../middlewares/client/verifyIfClientExists.mdlw';
import vreifiIfIsUserClientMiddleware from '../middlewares/client/verifyIfIsUserClient.mdlw';
import verifyIfClientPhoneAlreadyRegistredMiddleware from '../middlewares/phone/verifyIfClientPhoneAlreadyRegistred.mdlw';
import verifyIfClientPhoneExistsMiddleware from '../middlewares/phone/verifyIfClientPhoneExists';
import verifyAuthTokenMiddleware from '../middlewares/user/verifyAuthToken.mdlw';

const phoneRouter = Router();

phoneRouter.post(
  '/clients/:id_client/phone',
  verifyAuthTokenMiddleware,
  verifyIfClientExistsMiddleware,
  vreifiIfIsUserClientMiddleware,
  verifyIfClientPhoneAlreadyRegistredMiddleware,
  phoneCreateController
);
phoneRouter.put(
  '/clients/phone/:id_phone',
  verifyAuthTokenMiddleware,
  verifyIfClientPhoneExistsMiddleware,
  verifyIfClientPhoneAlreadyRegistredMiddleware,
  phoneUpdateController
);
phoneRouter.delete(
  '/clients/phone/:id_phone',
  verifyAuthTokenMiddleware,
  verifyIfClientPhoneExistsMiddleware,
  phoneDeleteController
);

export default phoneRouter;
