import express from 'express'
// import { getIndexPage, getAboutPage } from '../controllers/pageController'
import * as userController from '../controllers/userController.js'

const router = express.Router()


router.route("/register")
    .post(userController.createUser)

export default router