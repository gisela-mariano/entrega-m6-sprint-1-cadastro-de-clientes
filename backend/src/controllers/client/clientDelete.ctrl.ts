import { Request, Response } from 'express';
import clientDeleteService from '../../services/client/clientDelete.srvc';

const clientDeleteController = async (req: Request, res: Response) => {
  const idClient = req.params.id_client;

  try {
    await clientDeleteService(idClient);

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

export default clientDeleteController;
