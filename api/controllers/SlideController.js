/**
 * SlideController
 *
 * @description :: Server-side logic for managing slides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	restricted: function (req, res){
		return res.ok('You are authenticated');
	},
	open: function(req, res){
		return res.ok('Open');
	},
	jwt: function(req, res){
		return res.ok('You have a token');
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

    Slide.update(+req.param('id'), {

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

imagen: function (req, res){

  req.validate({
    id: 'string'
  });

  Slide.findOne(req.param('id')).exec(function (err, slide){
    if (err) return res.negotiate(err);
    if (!slide) return res.notFound();

    // User has no avatar image uploaded.
    // (should have never have hit this endpoint and used the default image)
    if (!slide.imagenFD) {
      return res.notFound();
    }

    var SkipperDisk = require('skipper-disk');
    var fileAdapter = SkipperDisk(/* optional opts */);

    // Stream the file down
    fileAdapter.read(slide.imagenFD)
    .on('error', function (err){
      return res.serverError(err);
    })
    .pipe(res);
  });
}


};
