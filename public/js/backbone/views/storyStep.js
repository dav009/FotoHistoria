PhotoStory.Views.StoryStepView = Backbone.View.extend({
	events:{
		"show" : "show",
		"click button": "select"
	},
	className:"",
	initialize : function(model){
		//this.template = _.template($("#StoryStep_tpl").html());
		this.model = model;
        var self = this;

		this.model.on('change', function(){
			self.render();
		});

		this.template = swig.compile($("#photoStepTemplate").html());

	},
	render: function(data) {
		var locals ={
			photoStep: this.model.toJSON()
		};

		this.$el.html( this.template(locals) );

		return this;
	},

	home: function(e){
	    Backbone.history.navigate('root',  true)
	},

	select: function(e){
		var clickedOptionID = e.target.getAttribute('data-option');
		Backbone.history.navigate('step/'+clickedOptionID,  true)
	    
	}
});
