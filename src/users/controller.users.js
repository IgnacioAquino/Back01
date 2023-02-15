const { Router } = require('express');
const UsersManager = require('../dao/users.manager');

const User = new UsersManager

const router = Router();

router.get('/', async (req,res) =>{
    try{
        const users = await User.find()
        const response = users.map(({_id, name, lastname}) => ({
            id: _id,
            name,
            lastname
        }))

        res.json({ message: response })

    } catch(err){
        console.log(err)
    }
    
})

router.post('/', async (req,res) =>{
    try{
        const {name, lastname} = req.body
        const newUser = {
            name,
            lastname
        }
        
        await User.create(newUser)
        res.status(201).json({ message: "usuario creado" })

    } catch(err){
        console.log(err)
    }
    
})

router.delete('/', async (req,res) =>{
    try{
        await User.delete()
        res.json({ message: "usuarios eliminado" })

    } catch(err){
        console.log(err)
    }
    
})

module.exports = router