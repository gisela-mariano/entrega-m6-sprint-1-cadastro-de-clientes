import { NextFunction, Request, Response } from 'express';
import { emailRepository } from '../../repositories';

const verifyIfClientEmailAlreadyRegistredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const { id_client } = req.params;

  const createdEmail = await emailRepository
    .createQueryBuilder('email')
    .where('email.email = :email', { email })
    .andWhere('email.clientId = :id_client', { id_client })
    .getOne();

  if (createdEmail)
    return res.status(400).json({
      error: 'Error',
      message: 'Email already registred to this client.',
    });

  next();
};

export default verifyIfClientEmailAlreadyRegistredMiddleware;
