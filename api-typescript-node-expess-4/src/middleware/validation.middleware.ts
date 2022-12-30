import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

function validationMiddleware(schema: Joi.Schema): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const validationOptions = {
            abortEarly: false,//aborts the app early instead of searching more errors.So we set it false,to not let that happen.
            allowUnknown: true, //checks for unknown schema
            stripUnknown: true, // strip that unknown schema
        };

        try {
            const value = await schema.validateAsync(
                req.body,
                validationOptions
            );
            req.body = value;
            next();
        } catch (e: any) {
            const errors: string[] = [];
            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message);
            });
            res.status(400).send({ errors: errors });
        }
    };
}

export default validationMiddleware;
