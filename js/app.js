// setup require.js settings and initialize app which will initialize the backbone 
// router, can add more calls to app if needed in future
require.config({
  paths: {
    jquery: 'libs/jquery-min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min'
  },
  shim: {
  	backbone: {
  		deps: ["underscore", "jquery"],
  		exports: "Backbone"
  	},
  	underscore: { 
  		exports: "_"
  	}
  }
});

require(['router'], function(Router){
	Router.initialize();
});