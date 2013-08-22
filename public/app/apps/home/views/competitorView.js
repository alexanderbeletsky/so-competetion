define(function (require) {
	var Backbone = require('Backbone');

	var CompetitorView = Backbone.View.extend({
		className: 'pure-u-1-2',

		render: function () {
			this.$el.append('Competitor');
			return this;
		}
	});

	return CompetitorView;
});