import { Request, Response } from 'express';
import emailUpdateService from '../../services/email/emailUpdate.srvc';

const emailUpdateController = async (req: Request, res: Response) => {
  const idEmail = req.params.id_email;
  const { email } = req.body;

  try {
    await emailUpdateService({ idEmail, email });

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

export default emailUpdateController;
