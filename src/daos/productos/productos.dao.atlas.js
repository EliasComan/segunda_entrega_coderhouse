const fs = require('fs')
const  contenedorAtlas  = require('../../contenedores/contenedorAtlas')
const {config } =  require('../../utils/config')

class productosDaoAtlas extends contenedorAtlas{
    constructor(){
        super('productos', {
            title:{type:String, require:true},
            price:{type:Number, require: true},
            thumbnail:{type:String, require: true},
            _id:{type:Number, require:true}
        })
    }
}

module.exports =  productosDaoAtlas