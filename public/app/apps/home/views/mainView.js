define(function (require) {
	var Backbone = require('Backbone');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.$el.append('<h1>MainView</h1>');

			return this;
		}
	});

	return MainView;
});