define(function (require) {
	var Backbone = require('Backbone');

	var Competitor = Backbone.Model.extend({
		parse: function (data) {
			data.profile_image = data.profile_image.replace('?s=128', '?s=256');
			return data;
		}
	});

	return Competitor;
});