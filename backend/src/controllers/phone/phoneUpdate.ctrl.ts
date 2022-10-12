import { Request, Response } from 'express';
import phoneUpdateService from '../../services/phone/phoneUpdate.srvc';

const phoneUpdateController = async (req: Request, res: Response) => {
  const idPhone = req.params.id_phone;
  const { phone } = req.body;

  try {
    await phoneUpdateService({ idPhone, phone });

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

export default phoneUpdateController;
