import { Request, Response } from 'express';
import clientCreateService from '../../services/client/clientCreate.srvc';

const ClientCreateController = async (req: Request, res: Response) => {
  const { name, contacts } = req.body;
  const token = req.headers.authorization;

  try {
    const createdClient = await clientCreateService({
      name,
      contacts,
      token,
    });
    return res.status(201).json(createdClient);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default ClientCreateController;
