import { NextFunction, Request, Response } from 'express';
import { phoneRepository } from '../../repositories';

const verifyIfClientPhoneExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id_phone } = req.params;

  const phone = await phoneRepository.findOne({
    where: {
      id: id_phone,
    },
  });

  if (!phone)
    return res
      .status(404)
      .json({ error: 'Error', message: 'Client phone not found.' });

  next();
};

export default verifyIfClientPhoneExistsMiddleware;
