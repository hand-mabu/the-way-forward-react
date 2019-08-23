import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

const validateInput = (data) => {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "用户名不可为空";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "密码不可为空";
  }

  if (data.username != "admin" && data.password != "123") {
    errors.password = "用户名密码错误";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
      res.json({success: true})
    } else {
      res.status(400).json(errors);
    }
});

export default router;