define(function (require) {
	var Backbone = require('Backbone');

	var HeaderView = Backbone.View.extend({
		tagName: 'header',

		className: 'pure-u-1',

		render: function () {
			//this.$el.append('<h1>HeaderView view</h1>');

			return this;
		}
	});

	return HeaderView;
});