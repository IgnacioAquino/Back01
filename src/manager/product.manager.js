const fs = require('fs')

class ProductManager {
    file = `${process.cwd()}/src/files/products.json`
    
    
    async loadProduct(){
        if(fs.existsSync(this.file)){
            const data = await fs.promises.readFile(this.file)
            const response = JSON.parse(data)
            return response
        } 
        return 'No se encontro el archivo'
        
    }
}


module.exports = ProductManager