import { NextFunction, Request, Response } from 'express';
import { emailRepository } from '../../repositories';

const verifyIfClientEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_email } = req.params;

  const email = await emailRepository.findOne({
    where: {
      id: id_email,
    },
  });

  if (!email)
    return res
      .status(404)
      .json({ error: 'Error', message: 'Client email not found.' });

  next();
};

export default verifyIfClientEmailExistsMiddleware;
