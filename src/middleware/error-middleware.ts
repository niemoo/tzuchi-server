import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ErrorResponse } from '../response/error-response';

export async function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: `Validation error : ${JSON.stringify(error)}`,
    });
  } else if (error instanceof ErrorResponse) {
    res.status(400).json({
      error: error.message,
    });
  } else {
    res.status(500).json({
      error: error.message,
    });
  }
}
