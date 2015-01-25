{
    /* 
        My own elevator logic for playing the awesome Elevator Saga
        http://play.elevatorsaga.com/
        
        Author: Chris Lamothe
        License: GNU GPL Version 2
    */
    
    init: function(elevators, floors) {

        //iterate through all elevators
        for (var i = 0; i < elevators.length; i++) {

            elevators[i].on("idle", function() {
                
                //basic loop for going to all floors, from bottom to top
                for (var j = 0; j < floors.length; j++) {
                    this.goToFloor(j);   
                }
            });
        }
    },

    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}