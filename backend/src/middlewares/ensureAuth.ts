import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {

  const authToken = req.headers.authorization;

  if (!authToken) { 
    return res.status(401).json({
      errorCode: "token.invalid"
    }); 
  }

  const token = authToken.split(" ")[1];

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    req.userId = sub;

    return next()
  } catch (error) {
    return res.status(401).json({
      errorCode: "token.expired"
    }); 
  }
}