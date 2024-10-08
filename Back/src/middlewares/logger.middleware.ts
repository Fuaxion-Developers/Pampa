import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request & { now: string }, res: Response, next: NextFunction) {
    const now = new Date();
    const format = now.toLocaleDateString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    req.now = format;
    Logger.debug(`Method: ${req.method} Route: ${req.url} Date: ${req.now}`);
    next();
  }
}
