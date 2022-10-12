import { Router } from 'express';
import emailCreateController from '../controllers/email/emailCreate.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/user/verifyAuthToken.mdlw';
import verifyIfClientExistsMiddleware from '../middlewares/client/verifyIfClientExists.mdlw';
import vreifiIfIsUserClientMiddleware from '../middlewares/client/verifyIfIsUserClient.mdlw';
import verifyIfClientEmailAlreadyRegistredMiddleware from '../middlewares/email/verifyIfClientEmailAlreadyRegistred.mdlw';
import verifyIfClientEmailExistsMiddleware from '../middlewares/email/verifyIfClientEmailExists';
import emailUpdateController from '../controllers/email/emailUpdate.ctrl';
import emailDeleteController from '../controllers/email/emailDelete.ctrl';

const emailRouter = Router();

emailRouter.post(
  '/clients/:id_client/email',
  verifyAuthTokenMiddleware,
  verifyIfClientExistsMiddleware,
  vreifiIfIsUserClientMiddleware,
  verifyIfClientEmailAlreadyRegistredMiddleware,
  emailCreateController
);
emailRouter.put(
  '/clients/email/:id_email',
  verifyAuthTokenMiddleware,
  verifyIfClientEmailExistsMiddleware,
  verifyIfClientEmailAlreadyRegistredMiddleware,
  emailUpdateController
);
emailRouter.delete(
  '/clients/email/:id_email',
  verifyAuthTokenMiddleware,
  verifyIfClientEmailExistsMiddleware,
  emailDeleteController
);

export default emailRouter;
