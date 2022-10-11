import { Request, Response } from "express";
import clientListAllService from "../../services/client/clientListAll.srvc";

const clientListAllController = async (req: Request, res: Response) => {

  const token = req.headers.authorization;

  try {
    const clients = await clientListAllService(token!)

    return res.status(200).json(clients)
    
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default clientListAllController