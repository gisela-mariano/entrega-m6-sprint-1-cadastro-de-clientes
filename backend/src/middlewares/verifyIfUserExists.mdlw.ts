import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repositories';

const verifyIfUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_user } = req.params;

  const user = await userRepository.findOne({
    where: {
      id: id_user,
    },
  });

  if (!user)
    return res.status(404).json({ error: 'Error', message: 'User not found.' });

  next();
};

export default verifyIfUserExistsMiddleware;
