PhotoStory.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"root" :  "root",
        "step/:id": "step"
	},
	initialize : function(){
		var self = this;

	},
	root: function(){
		var self = this;
        console.log('root');
        Backbone.history.loadUrl(Backbone.history.root);
	},

    step: function(optionID){
        var self = this;
        var currentStep = window.currentStep.get('children')[optionID];
        window.currentStep.set(currentStep)
    }
});
