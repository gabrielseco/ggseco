/**
 * SlideController
 *
 * @description :: Server-side logic for managing slides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	uploadImagen: function (req, res) {
		req.validate({
	     id: 'number'
	  });
  req.file('imagen').upload({
    // don't allow the total upload size to exceed ~10MB
    maxBytes: 10000000,
		dirname: require('path').resolve(sails.config.appPath, '/assets/images')
  },function whenDone(err, uploadedFiles) {
    if (err) {
      return res.negotiate(err);
    }

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0){
      return res.badRequest('No file was uploaded');
    }


    // Save the "fd" and the url where the avatar for a user can be accessed
    Slide.update(req.id, {

      // Generate a unique URL where the avatar can be downloaded.
      imagenURL: require('util').format('%s/slide/%s', sails.getBaseUrl(), req.id),

      // Grab the first file and use it's `fd` (file descriptor)
      //avatarFd: uploadedFiles[0].fd
    })
    .exec(function (err){
      if (err) return res.negotiate(err);
      return res.ok();
    });
  });
},
};
