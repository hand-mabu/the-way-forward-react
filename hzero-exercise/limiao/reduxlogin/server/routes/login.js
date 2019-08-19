import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

const validateInput = (data) =>{
  console.log("server"+data);
    let errors = {};
    if (validator.isEmpty(data.username)) {
        errors.username = "username is required";
      }
    
      if (validator.isEmpty(data.password)) {
        errors.password = "password is required";
      }
    
      return {
        errors,
        isValid: isEmpty(errors)
      }
}
router.post('/', (req, res) => {
  // setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);
    if(isValid){
      res.json({success: true});
    }else {
      res.status(400).json(errors);
    }
  // }, 5000)
  });
  
  export default router;