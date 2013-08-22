define(function(require) {
	var MainView = require('./views/mainView');
	var Competitors = require('./models/competitors');

	return {
		run: function (viewManager) {
			var competitors = new Competitors();
			competitors.fetch ({
				success: function (competitors) {
					var view = new MainView({collection: competitors});
					viewManager.show(view);
				}
			});
		}
	};
});