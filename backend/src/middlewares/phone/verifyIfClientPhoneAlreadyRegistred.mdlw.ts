import { NextFunction, Request, Response } from 'express';
import { phoneRepository } from '../../repositories';

const verifyIfClientPhoneAlreadyRegistredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { phone } = req.body;
  const { id_client } = req.params;

  const createdPhone = await phoneRepository
    .createQueryBuilder('phone')
    .where('phone.phone_number = :phone', { phone })
    .andWhere('phone.clientId = :id_client', { id_client })
    .getOne();

  if (createdPhone)
    return res.status(400).json({
      error: 'Error',
      message: 'Phone already registred to this client.',
    });

  next();
};

export default verifyIfClientPhoneAlreadyRegistredMiddleware;
