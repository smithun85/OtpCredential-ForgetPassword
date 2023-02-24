const user = require('../models/user')

const express = require('express');
const router = express.Router()

const {register} = require("../controllers/user")


router.route('/users').post(register)

module.exports = router

