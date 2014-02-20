$(document).ready(function(){
	console.log('Starting app');

     window.currentStep = new PhotoStory.Models.PhotoStoryModel();
     window.routers.base = new PhotoStory.Routers.BaseRouter();

     var view = new PhotoStory.Views.StoryStepView(window.currentStep);

    window.currentStep.set('title' ,'@___@');
    window.currentStep.set('description' ,'lallala');
    window.currentStep.set('img' ,'_MG_6388.jpg');
    window.currentStep.set('children' ,
          {
            "opcion1":{ title:"dos", description: 'lala2', img: '_MG_6388.jpg', 
                    children: [{
                        title:"cuatro", description: 'lala4', img: '_MG_6388.jpg', children:{}
                    }]
            } ,
            "opcion2":{ title:"tres", description: 'lala3', img: '_MG_6388.jpg', children: {} } 
          }
        );

    view.render();
    view.$el.insertAfter( "body" );


    Backbone.history.start({
        root: '/',
        pushState: true,
        silent: false
     });

});
