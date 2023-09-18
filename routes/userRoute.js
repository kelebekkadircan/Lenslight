import express from 'express'
// import { getIndexPage, getAboutPage } from '../controllers/pageController'
import * as userController from '../controllers/userController.js'

const router = express.Router()


router.route("/register")
    .post(userController.createUser)

router.route('/login')
    .post(userController.loginUser)

export default router