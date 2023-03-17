import mongoose from "mongoose"

// data yang di butuhkan dan tipedata untuk dikirim ke server mongodb
const SchemaSensor = new mongoose.Schema({
    dataSensor: {
        type: String,
    },
   
});
export default mongoose.model('TERBAMBUT', SchemaSensor);