import mongoose from "mongoose" // lib untuk mongoDB client


const username_db = "arikun" // username mongodb
const password_db = "12345678A" // password mongodb
const link_db     = "pptikio3.sglpxl7.mongodb.net" // link mongodb
const serv_db     = "SENSORTANAH" // nama database dari mongodb


const db = `mongodb+srv://${username_db}:${password_db}@${link_db}/${serv_db}`; // link dari mongodb atlas


function connectDB(){
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log('DB Connected');
    });  
    
}
// koneksi ke database

export default connectDB