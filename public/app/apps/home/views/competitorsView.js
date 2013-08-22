define(function (require) {
	var Backbone = require('Backbone');

	var CompetitorsView = Backbone.View.extend({
		render: function () {
			this.$el.append('<h1>CompetitorsView view</h1>');

			return this;
		}
	});

	return CompetitorsView;
});