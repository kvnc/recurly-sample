define([
  'backbone',
  'models/gallery/asset'
], function(Backbone, Asset){
	var Assets = Backbone.Collection.extend({

		model: Asset,
    url: "http://pipes.yahoo.com/pipes/pipe.run?_id=c6b9f27dbbdfed8e30e5dc0a9b445bda&_render=json",
    parse: function(response) {
      return response.value.items;
    }
    
	});

  return Assets;

});