const express = require("express")
const router = express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/user.controller")


router.post('/register',[
    body('email').isEmail().withMessage("Invalid mail"),
    body('fullName.firstName').isLength({min : 4}).withMessage("At least 4"),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
  // now i need to add controller
 userController.registerUser
)

module.exports = router;