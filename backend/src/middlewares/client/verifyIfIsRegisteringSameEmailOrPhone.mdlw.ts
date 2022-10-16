import { NextFunction, Request, Response } from 'express';

const verifyIfIsRegisteringSameEmailOrPhoneMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { emails, phones } = req.body;

  if (emails.length > 1) {
    if (emails[0] === emails[1])
      return res.status(400).json({
        error: 'Error',
        message: "It is not possible to register the same email address for the same user.",
      });
  }

  if (phones.length > 1) {
    if (phones[0] === phones[1])
      return res.status(400).json({
        error: 'Error',
        message: "It is not possible to register the same phone numbers for the same user.",
      });
  }

  next();
};

export default verifyIfIsRegisteringSameEmailOrPhoneMiddleware;