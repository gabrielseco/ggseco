/**
 * Categorias_noticiasController
 *
 * @description :: Server-side logic for managing categorias_noticias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//
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
	}

};
