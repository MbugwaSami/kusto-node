import Joi from '@hapi/joi';

export const kustoObject = Joi.object().keys({
    clientUserId: Joi.string().required(),
    clientPassword: Joi.string().required(),
    kustoEndPoint: Joi.string().required(),
    databaseName: Joi.string().required(),
})