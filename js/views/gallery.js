define([
	'backbone',
  	'text!../../templates/gallery/gallery.html',
  	'text!../../templates/gallery/asset.html'
], function(Backbone, GalleryTemplate, AssetTemplate) {

	var GalleryView = Backbone.View.extend({

		el: $('#main-content'),

		render: function(options) {
			var template = _.template(GalleryTemplate);
  			this.$el.html(template);
  			this.renderAsset(this.options.collection.at(this.options.index));
		},

		renderAsset: function(asset) {
			var template = _.template(AssetTemplate, {asset: asset.attributes});
			$('#asset-panel').html(template);
		}, 

		events: {
			"click #back": "backAsset",
			"click #next": "nextAsset"
		},

		backAsset: function() {
			if (this.options.collection.at(this.options.index-1) !== undefined) {
				var asset = this.options.collection.at(--this.options.index);
				var template = _.template(AssetTemplate, {asset: asset.attributes});
				if ($('.asset').length > 1) {
					$('.asset:last').remove();;
				}
				$('#asset-panel').prepend(template);
				$('.asset:last').addClass('leftTrans');
			}
		},

		nextAsset: function() {
			if (this.options.collection.at(this.options.index+1) !== undefined) {
				var asset = this.options.collection.at(++this.options.index);
				var template = _.template(AssetTemplate, {asset: asset.attributes});
				if ($('.asset').length > 1) {
					$('.asset:last').remove();;
				}
				$('#asset-panel').prepend(template);
				$('.asset:last').addClass('leftTrans');
			}
		}

	});

	return GalleryView;
});