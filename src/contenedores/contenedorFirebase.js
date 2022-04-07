const admin = require("firebase-admin");
const { config } = require('../utils/config')

admin.initializeApp({
    credential: admin.credential.cert(config.firebase.url)
  });

class contenedorFirebase {
    constructor(colection){
        this.conection = colection
    }

    async save (object) { 
        return await this.colection.insertOne(object)
    }
    async saveAll (object) { 
        
        return await this.colection.insertMany(object)
    }

    async getByid ( id){ 
        return await this.colection.find({_id:id})
     
     }
    async getAll () {
       return  await this.colection.find()
        
         
        }     
    async deleteById(id){
         return await this.colection.deleteOne({_id:id})
         
     }
    replaceById(newData){
      
     }
    deleteAll () {
     
     }
}

module.exports = contenedorFirebase