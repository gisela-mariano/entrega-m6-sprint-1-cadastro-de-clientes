import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import clientUpdateService from '../../services/client/clientUpdate.srvc';

const clientUpdateController = async (req: Request, res: Response) => {
  const idClient = req.params.id_client;
  const { name } = req.body;

  try {
    await clientUpdateService({ idClient, name });

    return res.status(204).send();
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default clientUpdateController;
