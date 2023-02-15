const User = require('./models/users.model')

class UsersManager{
    async find(){
        try{
            const users = await User.find()

            return users
        } catch(err){
            console.log(err)
        }
    }

    async create(newUser){
        try{
            await User.create(newUser)

            return 'Nuevo usuario creado'
        } catch(err){
            console.log(err)
        }
    } 

    async delete(){
        try{
            await User.deleteMany()

            return 'Usuarios eliminados'
        } catch(err){
            console.log(err)
        }
    }
}

module.exports = UsersManager