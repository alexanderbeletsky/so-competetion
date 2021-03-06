define(function (require) {
	var Backbone = require('Backbone');

	var Competitors = Backbone.Collection.extend({
		model: require('./Competitor'),

		url: function () {
			return 'https://api.stackexchange.com/2.1/users/397991;386751?order=desc&sort=reputation&site=stackoverflow';
		},

		parse: function (resp) {
			return resp.items;
		},

		isWinning: function (reputation) {
			var max = this.max(function (competitor) {
				return competitor.get('reputation');
			});

			return max.get('reputation') === reputation;
		}
	});

	return Competitors;
});