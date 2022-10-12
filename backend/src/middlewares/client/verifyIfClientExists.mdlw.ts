import { NextFunction, Request, Response } from 'express';
import { clientRepository } from '../../repositories';

const verifyIfClientExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_client } = req.params;

  const client = await clientRepository.findOne({
    where: {
      id: id_client,
    },
  });

  if (!client)
    return res
      .status(404)
      .json({ error: 'Error', message: 'Client not found.' });

  next();
};

export default verifyIfClientExistsMiddleware;
