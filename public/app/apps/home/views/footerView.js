define(function (require) {
	var Backbone = require('Backbone');

	var FooterView = Backbone.View.extend({
		render: function () {
			this.$el.append('<h1>Footer view</h1>');

			return this;
		}
	});

	return FooterView;
});