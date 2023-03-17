import mqtt from 'mqtt'
import ImportDt from "./controllers/SensorController.js"



const host = 'rmq2.pptik.id'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: '/surveyworkshop:surveyworkshop',
  password: 'survvy23!',
  reconnectPeriod: 1000,
})



const topic = 'SENSORTANAH'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  // client.publish(topic, '751', function() {
  //   //console.log(`lampu `)
  // })
})

 function dataMqtt() {
  client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
    ImportDt(payload.toString());
    //console.log(payload.toString())

  })
}

 


export default dataMqtt 
