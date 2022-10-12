import { Request, Response } from 'express';
import emailCreateService from '../../services/email/emailCreate.srvc';

const emailCreateController = async (req: Request, res: Response) => {
  const idClient = req.params.id_client;
  const { email } = req.body;

  try {
    const createdEmail = await emailCreateService({ idClient, email });

    return res.status(201).json(createdEmail);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default emailCreateController;
