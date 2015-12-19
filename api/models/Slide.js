/**
* Slide.js
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
        activo: {
          type:'boolean',
          defaultsTo: false
        },
        titulo:{
          type:'string'
        },  
        enlace:{
          type:'string'
        },
        texto:{
          type:'text'
        },
        imagenURL:{
          type:'string'
        },
        imagenFD:{
          type:'string'
        }
    }
};
