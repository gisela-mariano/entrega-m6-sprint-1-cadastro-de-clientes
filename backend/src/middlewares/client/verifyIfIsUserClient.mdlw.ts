import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IToken } from '../../interfaces/user.interface';
import { clientRepository } from '../../repositories';

const vreifiIfIsUserClientMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  const id_client = req.params.id_client;

  const splitedToken = token!.split(' ')[1];
  const decodedToken = jwt.decode(splitedToken) as IToken;

  const client = await clientRepository
    .createQueryBuilder('client')
    .where('client.id = :id_client', { id_client })
    .andWhere('client.userId = :id_user', { id_user: decodedToken.id_user })
    .getOne();

  if (!client)
    return res.status(403).json({
      error: 'Error',
      message: "You don't have permission to perform this action.",
    });

  next();
};

export default vreifiIfIsUserClientMiddleware;
