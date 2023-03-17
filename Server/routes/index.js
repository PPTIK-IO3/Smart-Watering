 import express from "express"
  import { halamanDepan } from "../controllers/HomeController.js"

 const router = express.Router()
//user


 router.get('/', halamanDepan)
 

 export default router