require.config({
	hbs: {
		templateExtension: 'html',
		disableI18n: true,
		disableHelpers: true
	},

	shim: {
		'jQuery': {
			exports: '$'
		},

		'Underscore': {
			exports: '_'
		},

		'Backbone': {
			deps: ['Underscore', 'jQuery'],
			exports: 'Backbone'
		},

		'Handlebars': {
			deps: ['handlebars'],
			exports: 'Handlebars'
		},

		'ApplicationRouter': {
			deps: ['jQuery', 'Underscore', 'Backbone']
		}
	},

	paths: {
		jQuery: './../components/jquery/jquery',
		Underscore: './../components/underscore/underscore',
		Backbone: './../components/backbone/backbone'
	}
});

require(['core/router', 'core/client', 'Backbone'], function (Router, client, Backbone) {
	var app = {
		root: '/'
	};

	window.Router = new Router();
	client.setup(window, app);

	Backbone.history.start({ pushState: true });
});