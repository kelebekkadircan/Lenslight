import express from 'express'
// import { getIndexPage, getAboutPage } from '../controllers/pageController'
import * as pageController from '../controllers/pageController.js'

const router = express.Router()

router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(pageController.getRegisterPage)

export default router