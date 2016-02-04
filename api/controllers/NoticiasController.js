/**
 * NoticiasController
 *
 * @description :: Server-side logic for managing noticias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllCategoriesAndTags:function(req, res) {
		var _categorias = [];
		var _tags = [];
		var obj = {};

		Categorias_noticias.find().sort('id DESC').exec(function findCB(err, found){
		  while (found.length){
				_categorias.push(found.pop())
			}
			obj.categorias = _categorias;
		});

		Tags_noticias.find().sort('id DESC').exec(function findCB(err, found){
		  while (found.length){
				_tags.push(found.pop())
			}
			obj.tags = _tags;
			res.json(obj)
		});
	},
	uploadImagen: function (req, res) {

		req.validate({
	     id: 'string'
	  });

  req.file('file').upload({
    // don't allow the total upload size to exceed ~10MB
    maxBytes: 10000000,
		dirname: '../../assets/images'
  },function whenDone(err, uploadedFiles) {
    if (err) {
      return res.negotiate(err);
    }

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0){
      return res.badRequest('No file was uploaded');
    }
		console.log('id',req.param('id'))
    // Save the "fd" and the url where the avatar for a user can be accessed

		var name = uploadedFiles[0].fd.split("/");

    Noticias.update(+req.param('id'), {

      // Generate a unique URL where the avatar can be downloaded.
      imagenURL: require('util').format('%s/slide/%s', sails.getBaseUrl(), req.param('id')),

      // Grab the first file and use it's `fd` (file descriptor)
      imagenFD: name[6]
    })
    .exec(function (err){
      if (err) return res.negotiate(err);
      return res.ok();
    });
  });
},
};
