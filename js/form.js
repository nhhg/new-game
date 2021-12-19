class Form{
    constructor (){

    }

     display (){
         var title = createElements("h2")
        title.html ("AMONG US")
         title.position(displayWidth/2-50,50)
         var input = createInput("name")
         var button = createButton("play")
         input.position(displayWidth/2,displayHeight/2)
         button.position(displayWidth/2,displayHeight/2+100)
     }
}