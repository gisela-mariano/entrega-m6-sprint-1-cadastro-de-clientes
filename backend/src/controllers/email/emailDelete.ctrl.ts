import { Request, Response } from 'express';
import emailDeleteService from '../../services/email/emailDelete.srvc';

const emailDeleteController = async (req: Request, res: Response) => {
  const idEmail = req.params.id_email;

  try {
    await emailDeleteService(idEmail);

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

export default emailDeleteController;
