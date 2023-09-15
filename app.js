import express from 'express'
import dotenv from 'dotenv'
import conn from './db.js';
// import { getAboutPage, getIndexPage } from './controllers/pageController.js';
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config();

// Connection to the db
conn();



const app = express()

const port = process.env.PORT

// ejs  Template engine kavramı
app.set("view engine", "ejs")

// static files middleware
app.use(express.static('public')) // statik dosyalarımızın publictekiler olduğunu belirtiyor
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes

app.use("/", pageRoute)
app.use("/photos", photoRoute)
app.use("/users", userRoute)



/* app.get("/", getIndexPage)

app.get("/about", getAboutPage) */



app.listen(port, () => {
    console.log(`uygulamamız ${port} portunda çalışıyorr`)
})




