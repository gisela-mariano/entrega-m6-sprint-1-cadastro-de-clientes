import { Request, Response } from 'express';
import clientListAllService from '../../services/client/clientListAll.srvc';
import clientListOneService from '../../services/client/clientListOne.srvc';

const clientListOneController = async (req: Request, res: Response) => {
  const { id_client } = req.params;

  try {
    const client = await clientListOneService(id_client);

    return res.status(200).json(client);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default clientListOneController;
