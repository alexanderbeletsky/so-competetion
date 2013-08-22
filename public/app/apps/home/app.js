define(function(require) {
	var MainView = require('./views/mainView');

	return {
		run: function (viewManager) {
			var view = new MainView();
			viewManager.show(view);
		}
	};
});