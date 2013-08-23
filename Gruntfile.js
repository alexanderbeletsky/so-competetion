module.exports = function(grunt) {
	grunt.initConfig({
		meta: {
			version: '0.0.1'
		},

		jshint: {
			options: {
				"asi" : false,
				"bitwise" : true,
				"boss" : false,
				"curly" : true,
				"debug": false,
				"devel": false,
				"eqeqeq": true,
				"evil": false,
				"expr": true,
				"forin": false,
				"immed": true,
				"latedef" : false,
				"laxbreak": false,
				"multistr": true,
				"newcap": true,
				"noarg": true,
				"node" : true,
				"browser": true,
				"noempty": false,
				"nonew": true,
				"onevar": false,
				"plusplus": false,
				"regexp": false,
				"strict": false,
				"sub": false,
				"trailing" : true,
				"undef": true,
				globals: {
					jQuery: true,
					Backbone: true,
					_: true,
					$: true,
					require: true,
					define: true
				}
			},
			js: ['public/js/**/*.js', 'source/**/*.js']
		},

		requirejs: {
			js: {
				options: {
					uglify2: {
						mangle: false
					},
					baseUrl: "public/app",
					mainConfigFile: "public/app/main.js",
					name: 'main',
					out: "public/build/main.js",
					optimize: 'uglify2'
				}
			},
			css: {
				options: {
					baseUrl: 'public/css',
					cssIn: "public/css/style.css",
					out: "public/build/style.css",
					cssImportIgnore: null,
					optimizeCss: 'default'
				}
			}
		}
	});

	// Laoded tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-hashres');

	// Default task.
	grunt.registerTask('default', ['jshint', 'requirejs']);
};
