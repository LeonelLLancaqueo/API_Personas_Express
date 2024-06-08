const express= require('express')

const router = express.Router();

const database= require('./DBConnection.js');


router.get('/',  async(req,res) =>{

    try {
        const empleados= await database.collection('empleado').find({}).toArray();
        res.status(200).send(empleados);
        
    } catch (error) {
        console.log(error);
    }

}); 


router.post('/',  (req,res) =>{
    console.log('recibiendo request post en products')
})


module.exports= router