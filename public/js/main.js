$(document).ready(function(){
	console.log('Starting app');

    window.currentStep = new PhotoStory.Models.PhotoStoryModel();
    window.routers.base = new PhotoStory.Routers.BaseRouter();
    window.road = []

    var view = new PhotoStory.Views.StoryStepView(window.currentStep);

    window.Story = {
       title:'Saturday morning...',
       description:'It is a sunshiny Saturday, there is a murakami book on your bed waiting to be read :)',
       img:'_MG_4603.jpg',
       children: [
         {
              title:'walk to the kitchen',
              description:'You go to the kitchen',
              img:'_MG_8031.jpg',
              children: [


                          {
                            title:'thinking on breakfasty',
                            description:'Yummy.. you fancy a shoko croissant and eggs',
                            img:'_MG_8033.jpg',
                            children: [

                                          {
                                                 title:'cook scrambled eggs',
                                                 description:'yay! eggs + saturday',
                                                 img:'_MG_8040.jpg',
                                                 children: [

                                                        {
                                                               title:'you look outside the window',
                                                               description:'Blue sky, sunshine, you wonder whether spring is saying hello to you',
                                                               img:'_MG_8042.jpg',
                                                               children: [

                                                                      {
                                                                             title:'lets eat breakfast',
                                                                             description:'It doesnt look so yummy, but I love croissants and eggs saturdays',
                                                                             img:'_MG_8044.jpg',
                                                                             children: [
                                                                                    {
                                                                                           title:'watch ADVENTURE TIME!!!!!!',
                                                                                           description:'yeah, it is never a good day without Adventure time!',
                                                                                           img:'_MG_8051.jpg',
                                                                                           children: [

                                                                                           {
                                                                                                  title:'time to go out!',
                                                                                                  description:'stairs, stairs',
                                                                                                  img:'_MG_8052.jpg',
                                                                                                  children: [

                                                                                                       {
                                                                                                                title:'go down!',
                                                                                                                description:'oops you dropped your lens cap',
                                                                                                                img:'_MG_8055.jpg',
                                                                                                                children: [
                                                                                                                              {
                                                                                                                                            title:'go to the front door',
                                                                                                                                            description:'lalala :)',
                                                                                                                                            img:'_MG_8056.jpg',
                                                                                                                                            children: [
                                                                                                                                                   {
                                                                                                                                                          title:'turn to your left',
                                                                                                                                                          description:'la lel lalalala',
                                                                                                                                                          img:'_MG_8057.jpg',
                                                                                                                                                          children: [
                                                                                                                                                                 {
                                                                                                                                                                               title:'go ahead',
                                                                                                                                                                               description:'beautiful day. You wonder where is the cat which is usually waiting and staring at me at the gate',
                                                                                                                                                                               img:'_MG_8058.jpg',
                                                                                                                                                                               children: [
                                                                                                                                                                                             {
                                                                                                                                                                                                    title:'go to the street',
                                                                                                                                                                                                    description:'you  are walking towards the train station. Destionation: Unkown ',
                                                                                                                                                                                                    img:'_MG_8059.jpg',
                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                {
                                                                                                                                                                                                                         title:'go to wimbledon station',
                                                                                                                                                                                                                         description:'lala crossing the streets ',
                                                                                                                                                                                                                         img:'_MG_8060.jpg',
                                                                                                                                                                                                                         children: [

                                                                                                                                                                                                                                                                   {
       title:'you look at the floor',
       description:'lala crossing the streets ',
       img:'_MG_8061.jpg',
       children: [
              {
                     title:'you look to the left',
                     description:'you wonder about whether this is the ultimate relality',
                     img:'_MG_8063.jpg',
                     children: [

                                   {
                                          title:'you look to the left',
                                          description:'you wonder about whether this is the ultimate relality',
                                          img:'_MG_8063.jpg',
                                          children: [
                                                        {
                                                                      title:'go ahead',
                                                                      description:'passing next to the centre court mall',
                                                                      img:'_MG_8064.jpg',
                                                                      children: [

                                                                             {
                                                                                    title:'go ahead',
                                                                                    description:'wimbledon main street',
                                                                                    img:'_MG_8065.jpg',
                                                                                    children: [
                                                                                           {
                                                                                                  title:'turn to the right',
                                                                                                  description:'wimbledon station',
                                                                                                  img:'_MG_8066.jpg',
                                                                                                  children: [
                                                                                                         {
                                                                                                                title:'top up your oyster card',
                                                                                                                description:'! wow one month passed, your oyster card is out of credit.',
                                                                                                                img:'_MG_8068.jpg',
                                                                                                                children: [

{
       title:'renew your monthly oyster',
       description:'lalaa',
       img:'_MG_8069.jpg',
       children: [
{
       title:'put your oyster in the machine',
       description:'yay a shine new oyster',
       img:'_MG_8072.jpg',
       children: [
{
       title:'Go to the district line',
       description:'apperantly people dont wake up early. you wonder about the two moons on the sky you saw last night',
       img:'_MG_8073.jpg',
       children: [
{
       title:'take the train',
       description:'you look outside the window, beautiful day',
       img:'_MG_8076.jpg',
       children: [

{
       title:'enjoy the ride',
       description:'... you wonder whether you should ask soemone about the two moons, it would be like throwing a bottle in the sea with a message',
       img:'_MG_4511.jpg',
       children: [


{
       title:'check your new flat',
       description:'so you get off at putney bridge',
       img:'_MG_8078.jpg',
       children: [
       {
       title:'walk to your flat',
       description:'you forget to take pics. the front door..mm not bad',
       img:'_MG_8079.jpg',
       children: [
                            {
                            title:'walk to your flat',
                            description:'there is a struggle opening the door. Yes, the classic battle between you, keys and doors.',
                            img:'_MG_8080.jpg',
                            children: [

                                   {
                                          title:'go to your room',
                                          description:'not bad, not bad',
                                          img:'_MG_8082.jpg',
                                          children: [

                                                 {
                                                        title:'go back to putney station',
                                                        description:'the train takes a long time to arrive. the world moves, while you stand still, time does its tick tack, while you stand still.. ',
                                                        img:'_MG_8087.jpg',
                                                        children: [

{
       title:'you look at the map',
       description:'mm... ',
       img:'_MG_8094.jpg',
       children: [


       {
       title:'lonely day in the park ,you feel a bit blue',
       description:'mm... ',
       img:'_MG_6471.jpg',
       children: [

{
       title:'take pics of your traveller bear',
       description:'yay good sunshine',
       img:'_MG_6388.jpg',
       children: [
{
       title:'look for a place with more people',
       description:'you got some flowers on the way, you want to try something',
       img:'_MG_7976.jpg',
       children: [
{
       title:'look in front of you',
       description:'you see a rainbow',
       img:'_MG_7978.jpg',
       children: [
{
       title:'sit down',
       description:'... you wonder if you are human',
       img:'_MG_7986.jpg',
       children: [
{
       title:'write down a message',
       description:'you write down that message, leave it next to the flowers and.. ',
       img:'_MG_7992.jpg',
       children: [

{
       title:'get some sandwhichs',
       description:'yummy ',
       img:'_MG_4620.jpg',
       children: [

              {
                     title:'go home',
                     description:'you gohome, and find your flatmates in the kitchen eating cake, you join them! END!:)',
                     img:'_MG_6963.jpg',
                     children: []
              }

       ]
}

       ]
}

       ]
}

       ]
}

       ]
}


       ]
}


        ]
       },

       {
       title:'eat some Pho in Shoreditch',
       description:'mm... long ride on the tube, best option is go to waterloo and take bus 26 <3',
       img:'_MG_8094.jpg',
       children: [

       {
       title:'go to waterloo',
       description:'you forgot to take pics, anyway',
       img:'_MG_8095.jpg',
       children: [


       {
       title:'go out of waterloo',
       description:'stairs, line..ahg',
       img:'_MG_8096.jpg',
       children: [

       {
       title:'go to the bus station',
       description:'bus 26 is your favorite, if you manage to get a seat on the first row of the second floor you will get an amazing view of best places in london',
       img:'_MG_8098.jpg',
       children: [

                     {
                     title:'take the bus',
                     description:'you are lucky to get a seat in the first row',
                     img:'_MG_8099.jpg',
                     children: [

                     {
                            title:'lala!',
                            description:'..',
                            img:'_MG_8101.jpg',
                            children: [
                                   {
                                          title:'lala!',
                                          description:'..',
                                          img:'_MG_8102.jpg',
                                          children: [
                                                 {
                                                        title:'lala!',
                                                        description:' \'I didn\'t have much to say to anybody but kept to myself and my books. With my eyes closed, I would touch a familiar book and draw it\'s fragrance deep inside me. This was enough to make me happy\' ',
                                                        img:'_MG_8105.jpg',
                                                        children: [

                                                               {
                                                                      title:'lala!',
                                                                      description:' flappy bird, meh',
                                                                      img:'_MG_8106.jpg',
                                                                      children: [

{
       title:'arrive to shoreditch',
       description:' shoreditch! hipsters everywhere!',
       img:'_MG_8108.jpg',
       children: [

{
       title:'go to the vietnamese cafe! or die',
       description:' you arrive, to the vietnamese food place, the waiter takes ages to bring the menu',
       img:'_MG_8110.jpg',
       children: [

{
       title:'ORDER PHO! NOW! :D',
       description:' yummy! time to eat! forget about the two moons on the sky',
       img:'_MG_8111.jpg',
       children: [

{
       title:'eat!!',
       description:' ahg..full!:)',
       img:'_MG_8112.jpg',
       children: [

{
       title:'get some bubble tea',
       description:'you find a cafe with drawings on the walls :)',
       img:'_MG_8113.jpg',
       children: [

{
       title:'look at more drawings',
       description:'you drew one before, you look for it',
       img:'_MG_8114.jpg',
       children: [

{
       title:'get bubble tea',
       description:'you make your choice: vanilla + mango',
       img:'_MG_8115.jpg',
       children: [
{
       title:'get bubble tea',
       description:'yummy!, now I need some food for my brain :) my book',
       img:'_MG_8119.jpg',
       children: [

{
       title:'get bubble tea',
       description:'yummy!, now I need some food for my brain :) my book',
       img:'_MG_8119.jpg',
       children: [
{
       title:'time to go somwhere else',
       description:'you walk to liverpool street station',
       img:'_MG_8122.jpg',
       children: [
{
       title:'where shall we go?',
       description:'move move move',
       img:'_MG_8124.jpg',
       children: [
{
       title:'look for the central line',
       description:'you see a cute child with a balloon',
       img:'_MG_8126.jpg',
       children: [

{
       title:'go down the escalators',
       description:'',
       img:'_MG_8128.jpg',
       children: [

{
       title:'take the tube',
       description:'you take the tube and then go to the pub after that everything is blurry',
       img:'_MG_8130.jpg',
       children: []
}

       ]
}

       ]
}


       ]
}

       ]
}


       ]
}

       ]

}

       ]
}

       ]
}

       ]
}


       ]
}


       ]
}

       ]
}

       ]
}

                                                                      ]
                                                               }
                                                        ]
                                                 }

                                          ]
                                   }

                            ]
                     }

                     ]
              }

       ]
       }

       ]
       }




        ]
       }


       ]
}





       ]
}



                                                        ]
                                                 }
                                          ]
                                   }
                            ]
                     }


        ]
}
       ]
}











       ]


}


       ]
}

       ]
}

       ]
}

       ]
}

                                                                                                                ]
                                                                                                         }

                                                                                                  ]
                                                                                           }

                                                                                    ]
                                                                             }

                                                                      ]
                                                               }
                                          ]
                                   }
                     ]
              }
       ]
}
                                                                                                                                                                                                                         ]
                                                                                                                                                                                                                  }
                                                                                                                                                                                                    ]
                                                                                                                                                                                             }

                                                                                                                                                                               ]
                                                                                                                                                                        }
                                                                                                                                                          ]
                                                                                                                                                   }

                                                                                                                                            ]
                                                                                                                                     }

                                                                                                                ]
                                                                                                         }
   
                                                                                                  ]
                                                                                           }


                                                                                           ]
                                                                                    }

                                                                             ]
                                                                      }
                                                               ]
                                                        }

                                                 ]
                                          }

                            ]
                          }

              ]
         }
       ]
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
