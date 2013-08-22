define(function (require) {
	var Backbone = require('Backbone');

	var HeaderView = Backbone.View.extend({
		render: function () {
			this.$el.append('<h1>HeaderView view</h1>');

			return this;
		}
	});

	return HeaderView;
});