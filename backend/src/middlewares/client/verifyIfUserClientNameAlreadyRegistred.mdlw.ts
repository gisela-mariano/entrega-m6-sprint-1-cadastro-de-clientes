import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IToken } from '../../interfaces/user.interface';
import { clientRepository } from '../../repositories';

const vreifiIfIsUserClientNameAlreadyRegistredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  const { name } = req.body;

  const splitedToken = token!.split(' ')[1];
  const decodedToken = jwt.decode(splitedToken) as IToken;

  const client = await clientRepository
    .createQueryBuilder('client')
    .where('client.name = :name', { name })
    .andWhere('client.userId = :id_user', { id_user: decodedToken.id_user })
    .getOne();

  if (!client)
    return res.status(400).json({
      error: 'Error',
      message: 'There is already a client registered with this name.',
    });

  next();
};

export default vreifiIfIsUserClientNameAlreadyRegistredMiddleware;
