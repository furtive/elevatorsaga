{
    /* 
        My own elevator logic for playing the awesome Elevator Saga
        
        Site: http://play.elevatorsaga.com/
        Documentation: http://play.elevatorsaga.com/documentation.html
        
        Author: Chris Lamothe
        License: GNU GPL Version 2
    */
    
    init: function(elevators, floors) {

        //iterate through all elevators
        for (var i = 0; i < elevators.length; i++) {


            //idle event listener
            elevators[i].on("idle", function() {
                
                //basic loop for going to all floors, from bottom to top
                for (var j = 0; j < floors.length; j++) {
                    this.goToFloor(j);   
                }
            });

            //button press event listener
            elevators[i].on("floor_button_pressed", function(floorNum) {

                
            } );
 
        }
        
        //iterate through all floors
        for(var i = 0; i < floors.length; i++) {

            //event listener for press of up button
            floors[i].on('up_button_pressed', function() {

            });

            //event flister for press of down button
            floors[i].on('down_button_pressed', function() {

            });
        }
    },

    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}