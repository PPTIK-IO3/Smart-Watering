import express from "express" // lib express untuk jalur port & internet
import connectDB from "./Database/Connection.js";
import router from "./routes/index.js"
import dataMqtt from "./mqtt.js"
const app = express() //  inisialisasi aplikasi 

connectDB();

dataMqtt();

// port yang akan di jalankan 
const port = 3000;
app.use('/', router)
// mendengarkan port di atas, bisa di buka di chrome 
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});