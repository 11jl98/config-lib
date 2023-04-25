import { Request, Response, NextFunction } from "express";
export declare function authMiddlewares(request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>;
