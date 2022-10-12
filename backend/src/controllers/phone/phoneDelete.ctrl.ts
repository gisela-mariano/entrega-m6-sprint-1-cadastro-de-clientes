import { Request, Response } from 'express';
import phoneDeleteService from '../../services/phone/phoneDelete.srvc';

const phoneDeleteController = async (req: Request, res: Response) => {
  const idPhone = req.params.id_phone;

  try {
    await phoneDeleteService(idPhone);

    return res.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default phoneDeleteController;
