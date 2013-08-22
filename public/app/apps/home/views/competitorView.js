define(function (require) {

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	var Backbone = require('Backbone');
	var _ = require('Underscore');

	var CompetitorView = Backbone.View.extend({
		className: 'competitor pure-u-1-2',

		template: '\
			<div class="image">\
				<img src="<%= get("profile_image") %>" alt="<%= get("display_name") %>"></img>\
			</div>\
			<div class="reputation">\
				<div class="pure-u-1 <%= getStyle() %>"><%= getReputation() %></div>\
			</div>\
			<div class="badges">\
				<div class="badge"><%= getGoldCount() %> <div class="gold medal"></div></div>\
				<div class="badge"><%= getSilverCount() %> <div class="silver medal"></div></div>\
				<div class="badge"><%= getBronzeCount() %> <div class="bronze medal"></div></div>\
			</div>\
			<div class="summary">\
				<div class="changes">\
					<div class="change day">Day: <span class="value">+<%= get("reputation_change_day") %></span></div>\
					<div class="change week">Week: <span class="value">+<%= get("reputation_change_week") %></span></div>\
					<div class="change week">Month: <span class="value">+<%= get("reputation_change_month") %></span></div>\
				</div>\
			</div>\
		',

		initialize: function () {
			this.collection = this.model.collection;
		},

		render: function () {
			var content = _.template(this.template, _.extend(_.extend(this.formatter, this.model)));
			this.$el.append(content);

			return this;
		},

		formatter: {
			getReputation: function () {
				return numberWithCommas(this.get('reputation'));
			},

			getStyle: function () {
				var winning = this.collection.isWinning(this.get('reputation'));
				return winning ? 'green' : 'red';
			},

			getGoldCount: function () {
				return this.get('badge_counts').gold;
			},

			getSilverCount: function () {
				return this.get('badge_counts').silver;
			},

			getBronzeCount: function () {
				return this.get('badge_counts').bronze;
			}
		}
	});

	return CompetitorView;
});