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
		var optionID = e.target.getAttribute('data-option');
		var currentStep = window.currentStep.get('children')[optionID];
        window.road.push(optionID)

        var currentStep = window.Story
        for (var i=0;i< window.road.length;i++)
        { 
            currentStep = currentStep['children'][window.road[i]]
        }
        
        window.currentStep.set(currentStep)
	    
	}
});
