/**
* Noticias.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    connection: 'mysql',
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
        activo:{
          type:'boolean',
          defaultsTo:false
        },
        fecha:{
          type:'date',
          date:true
        },
        titulo:{
          type:'string',
          required: true
        },
        intro:{
          type:'text'
        },
        texto:{
          type:'text'
        },
        imagen: {
          type:'string'
        },
        enlace:{
          type:'string',
          unique:true,
          required: true
        },
        categorias:{
          collection:'categorias',
          via:'noticias'
        },
        tags:{
          collection:'tags',
          via:'noticias'
        },
        galeria:{
          collection:'noticias',
          via:'galeria'
        }
    }
};
