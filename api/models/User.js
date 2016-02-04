var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    activo: {
      type:'boolean',
      defaultsTo: false
    },
    nombre  : {
      type: 'string',
      unique: true
    },
    email     : {
      type: 'email',
      unique: true
    },
    twitter  : {
      type: 'string',
      unique: true
    },
    facebook  : {
      type: 'string',
      unique: true
    },
    github  : {
      type: 'string',
      unique: true
    },
    soundcloud  : {
      type: 'string',
      unique: true
    },
    passports : { collection: 'Passport', via: 'user' }
  }
};

module.exports = User;
