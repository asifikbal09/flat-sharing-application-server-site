import { NextFunction, Request, RequestHandler, Response } from "express";

declare module 'express-serve-static-core' {
    interface Request {
      user?: any; 
    }
  }

const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        }
        catch (err) {
            next(err);
        }
    }
};

export default catchAsync;