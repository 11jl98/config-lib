import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface tokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export function authMiddlewares(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) return response.sendStatus(401);

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.PASSWORD_JWT);
    const { id } = data as tokenPayload;
    request.id_user = id;
    next();
  } catch (error) {
    return response.sendStatus(401);
  }
}
