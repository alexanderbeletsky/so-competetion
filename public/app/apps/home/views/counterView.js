define(function (require) {
	var Backbone = require('Backbone');

	var CounterView = Backbone.View.extend({
		render: function () {
			this.$el.append('<h1>CounterView view</h1>');

			return this;
		}
	});

	return CounterView;
});