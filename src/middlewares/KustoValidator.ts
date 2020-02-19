import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../helpers/ResponseHelper";
import JoiHelper from "../helpers/JoiHelper";
import { kustoObject }  from "./ValidationSchema";

class KustoValidator {
    static validateInputs(req: Request, res: Response, next: NextFunction) {
        const data: object = req.body;
        const validate = JoiHelper.validateSubmission(data, kustoObject);
        if (validate.errorMessage) {
            const { errorMessage, ...rest } = validate;
            return ResponseHandler.handleError(errorMessage, 400, res, { ...rest });
          }
        return next();
    }
}

export default KustoValidator;