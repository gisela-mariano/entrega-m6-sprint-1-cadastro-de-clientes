import { Request, Response } from 'express';
import phoneCreateService from '../../services/phone/phoneCreate.srvc';

const phoneCreateController = async (req: Request, res: Response) => {
  const idClient = req.params.id_client;
  const { phone } = req.body;

  try {
    const createdPhone = await phoneCreateService({ idClient, phone });

    return res.status(201).json(createdPhone);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default phoneCreateController;
