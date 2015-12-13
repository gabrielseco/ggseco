/**
* Contactos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    connection: 'mysql',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
          type:'string'
        },
        email:{
          type:'string'
        },
        telefono:{
          type:'string'
        },
        observaciones:{
          type:'text'
        },
        ip: {
            type: 'string'
        }
    }
};
