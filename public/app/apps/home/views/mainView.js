define(function (require) {
	var Backbone = require('Backbone');

	var CompetitorsView = require('./competitorsView');
	var CounterView = require('./counterView');

	var MainView = Backbone.View.extend({
		initialize: function (options) {
			this.subviews = [];
		},

		render: function () {
			var competitors = new CompetitorsView({collection: this.collection});
			this.subviews.push(competitors);
			this.$el.append(competitors.render().el);

			var counterView = new CounterView();
			this.subviews.push(counterView);
			this.$el.append(counterView.render().el);

			return this;
		}
	});

	return MainView;
});