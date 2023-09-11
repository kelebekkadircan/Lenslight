import express from 'express'

const app = express()

const port = 3000

// ejs  Template engine kavramı
app.set("view engine", "ejs")

// static files middleware
app.use(express.static('public')) // statik dosyalarımızın publictekiler olduğunu belirtiyor





app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})



app.listen(port, () => {
    console.log(`uygulamamız ${port} portunda çalışıyorr`)
})




