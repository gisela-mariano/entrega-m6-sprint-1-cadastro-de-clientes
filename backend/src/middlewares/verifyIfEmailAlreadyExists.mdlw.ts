import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repositories/user.repository';

const verifyIfEmailAlreadExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (user)
    res
      .status(400)
      .json({ error: 'Error', message: 'Email already registred' });

  next();
};

export default verifyIfEmailAlreadExistsMiddleware;
