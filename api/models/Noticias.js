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
        imagenURL: {
          type:'string'
        },
        imagenFD: {
          type:'string'
        },
        slug:{
          type:'string',
          unique:true,
          required: true
        },
        categorias_noticias: {
          collection:'categorias_noticias',
          via:'noticias'
        },
        tags_noticias: {
          collection:'tags_noticias',
          via:'noticias'
        },
    }
};
