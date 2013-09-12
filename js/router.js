define([
  'backbone',
  'views/gallery',
  'collections/gallery/assets'
], function(Backbone, GalleryView, AssetsCollection) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'asset/:id': "showAsset",
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function () {
      // ideally this would be bootstrapped from the server instead of making an extra call
      var assetsCollection = new AssetsCollection;
      assetsCollection.fetch({
        success: function() {
          var galleryView = new GalleryView({collection: assetsCollection, index:0});
          galleryView.render();
        }
      });

    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});