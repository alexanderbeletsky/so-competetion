define(function (require) {
	var Backbone = require('Backbone');

	var HeaderView = require('./headerView');
	var CompetitorsView = require('./competitorsView');
	var CounterView = require('./counterView');
	var FooterView = require('./footerView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var header = new HeaderView();
			this.subviews.push(header);
			this.$el.append(header.render().el);

			var competitors = new CompetitorsView();
			this.subviews.push(competitors);
			this.$el.append(competitors.render().el);

			var counterView = new CounterView();
			this.subviews.push(counterView);
			this.$el.append(counterView.render().el);

			var footer = new FooterView();
			this.subviews.push(footer);
			this.$el.append(footer.render().el);

			return this;
		}
	});

	return MainView;
});