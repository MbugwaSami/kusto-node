import  { Response } from 'express';

class ResponseHandler {
    static sendResponse(res: Response, code: number, data: Array<any>) {
        
        return res.status(code).json({
          data,
        });
      }

      static handleError(message: string, statusCode: number, response: Response, error?: object ) {
        return response.status(statusCode).json({
          success: false,
          message,
          error,
        });
      }

    }

export default ResponseHandler;