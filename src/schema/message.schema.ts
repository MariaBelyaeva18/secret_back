import * as Joi from 'joi';

const messages = {
  'any.required': 'errorEmpty',
  'any.empty': 'errorEmpty',
};

export const messageCreateSchema = Joi.object({
  message: Joi.string().empty([null, '']).required().messages(messages),
  route: Joi.string().empty([null, '']).required().messages(messages),
})
