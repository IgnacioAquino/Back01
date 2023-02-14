const { Router } = require('express');
const ProductManager = require('../manager/product.manager');
const Product = require('../models/products.model')

const router = Router();
const productsManager = new ProductManager()


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
        const products = await productsManager.loadProduct()

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