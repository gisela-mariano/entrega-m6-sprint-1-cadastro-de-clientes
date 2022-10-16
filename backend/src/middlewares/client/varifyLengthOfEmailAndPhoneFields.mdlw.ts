import { NextFunction, Request, Response } from 'express';

const verifyLengthOfEmailAndPhoneFieldMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { emails, phones } = req.body;

  if (emails.length > 2 || phones.length > 2)
    return res.status(400).json({
      error: 'Error',
      message:
        'It is not possible to register more than two emails or phones at same time.',
    });

  if (emails.length === 0 && phones.length)
    return res.status(400).json({
      error: 'Error',
      message:
        'You must register at least one email address or one phone number.',
    });

  next();
};

export default verifyLengthOfEmailAndPhoneFieldMiddleware;
