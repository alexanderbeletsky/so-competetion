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

require(['core/viewManager', 'apps/home/app'], function (viewManager, app) {
	app.run(viewManager);
});