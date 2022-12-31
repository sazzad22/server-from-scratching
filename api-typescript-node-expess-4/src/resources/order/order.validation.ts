import Joi from 'joi';

const create = Joi.object({
    orderItems: Joi.array().required(),

    phone: Joi.string().required(),
});

export default { create };
