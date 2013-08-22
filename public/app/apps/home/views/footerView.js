define(function (require) {
	var Backbone = require('Backbone');

	var FooterView = Backbone.View.extend({
		tagName: 'footer',

		className: 'pure-u-1',

		render: function () {
			//this.$el.append('<h1>Footer view</h1>');

			return this;
		}
	});

	return FooterView;
});