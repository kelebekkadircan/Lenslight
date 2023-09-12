import mongoose from "mongoose";

const conn = () => {

    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connected to MongoDB is SUCCESSFULLY HAPPENED  ");
        })
        .catch((err) => {
            console.log(`DB CONNECTION ERR: ${err}`);
        })

}

export default conn;






