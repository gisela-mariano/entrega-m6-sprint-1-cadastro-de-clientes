import jwt from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const verifyAuthTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({
      message: "Missing authorization token",
    });
  }

  const splitedToken = token.split(" ")[1];

  jwt.verify(splitedToken, String(process.env.JWT_SECRET), (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    
    next();
  });
};

export default verifyAuthTokenMiddleware;
