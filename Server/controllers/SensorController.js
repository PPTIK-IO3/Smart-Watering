import SchemaSensor from "../models/Sensor.js"

const ImportDt = async (req, res)=>{
    const uplload = new SchemaSensor({
        dataSensor : req
    })
    uplload.save(function (err){
        if (err) return handleError(err);

    })
    //console.log(req)
}


export default ImportDt