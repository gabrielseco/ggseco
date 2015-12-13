/**
* Categorias.js
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
        from: {
          type:'string',
          required:true
        },
  			activo:{
  				type:'boolean',
  				defaultsTo:false
  			},
  			titulo:{
  				type:'string',
  				required: true
  			},
  			enlace:{
  				type:'string',
  				unique:true,
  				required: true
  			},
        noticias:{
          collection:'noticias',
          via:'categorias'
        }
  	}
  };
