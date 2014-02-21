$(document).ready(function(){
	console.log('Starting app');

    window.currentStep = new PhotoStory.Models.PhotoStoryModel();
    window.routers.base = new PhotoStory.Routers.BaseRouter();
    window.road = []

    var view = new PhotoStory.Views.StoryStepView(window.currentStep);

    window.Story = {
       title:'Saturday morning...',
       description:'weekend, sunshiny, lazy, Murakami book is on bed..shall I?',
       img:'_MG_4603.jpg',
       children: 
          {
            "opcion1":{ title:"Lunch ! and then Murakami", description: 'You go to kitchen and see your lovely flatmates! eating a cake!, you eat too much cake', img: '_MG_6963.jpg', 
                    children: [{
                        title:"go and read!", description: 'lala4', img: '_MG_5166.jpg', children:{}
                    }]
            } ,
            "opcion2":{ title:"Go to the park", description: 'you look outside the window on the train and think about flowers...', img: '_MG_4511.jpg', children: 
                            [  
                               {title:"go on!", img:"_MG_6471.jpg", description: "you got some flowers, what do you do with them?", children:[]}
                              
                            ] 
                      },

            "opcion3":{ title:"Text Y!", description: 'lala3', img: '_MG_6471.jpg', children: [] } 
          }
    }


    window.currentStep.set('title',window.Story.title);
    window.currentStep.set('description' ,window.Story.description);
    window.currentStep.set('img' ,window.Story.img);
    window.currentStep.set('children' , window.Story.children);

    view.render();
    view.$el.insertAfter( "body" );


    Backbone.history.start({
        root: '/',
        pushState: true,
        silent: false
     });

});
