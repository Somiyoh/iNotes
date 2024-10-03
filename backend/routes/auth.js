const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')

// create a user using: POST "/api/auth/createUser" . No login required
router.post(
  '/createUser',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('password', 'Password must be atleast 5 characters').isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      // check whether the user with this email exits alr
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res
          .status(400)
          .json({ error: 'Sorry this email is used already' })
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
      res.json(user)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('some error occured')
    }
  }
)

module.exports = router
