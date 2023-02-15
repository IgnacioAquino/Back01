const { Router } = require('express');
const FilesManager = require('../dao/files.manager');
const Product = require('../dao/models/products.model')

const router = Router();
const productsManager = new FilesManager('products.json')


router.get('/', async (req,res) =>{
    try{
        const products = await Product.find()
        
        res.json({ message: products })

    } catch(err){
        console.log(err)
    }
    
})

router.post('/', async (req,res) =>{
    try{
        const products = await productsManager.loadItems()

        await Product.insertMany(products)

        res.json({ message: 'productos cargados'})
    } catch(err){
        console.log(err)
    }
    
})

router.delete('/', async (req,res) =>{
    try{
        await Product.deleteMany()
        res.json({ message: "productos eliminados" })

    } catch(err){
        console.log(err)
    }
    
})


module.exports = router