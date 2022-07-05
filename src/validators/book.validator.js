import Joi from '@hapi/joi';

export const newBookValidator = (req, res, next) => {
  const schema = Joi.object({
    description: Joi.string().min(4).required(),
    discountPrice: Joi.number().min(2).required(),
    bookImage: Joi.string().min(5).required(),
    bookName: Joi.string().min(5).required(),
    quantity: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
    author: Joi.string().min(3).required(),
    admin_user_id: Joi.number.min(4).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
