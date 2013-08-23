define(function (require) {
	var Backbone = require('Backbone');

	var CounterView = Backbone.View.extend({
		className: 'counter pure-g-r',

		template: '\
			<div class="pure-u-1">\
			</div>\
		',

		render: function () {
			this.$el.append(this.template);

			return this;
		}
	});

	return CounterView;
});