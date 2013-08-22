define(function (require) {
	var Backbone = require('Backbone');
	var CompetitorView = require('./competitorView');

	var CompetitorsView = Backbone.View.extend({
		className: 'pure-g-r',

		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.collection.each(function (competitor) {
				var view = new CompetitorView({model: competitor});
				this.subviews.push(view);
				this.$el.append(view.render().el);
			}, this);
			return this;
		}
	});

	return CompetitorsView;
});