{
    /* 
        My own elevator logic for playing the awesome Elevator Saga
        
        Site: http://play.elevatorsaga.com/
        Documentation: http://play.elevatorsaga.com/documentation.html
        
        Author: Chris Lamothe
        License: GNU GPL Version 2
    */
    
    init: function(elevators, floors) {

        var idleFloorQueue = [];

        //iterate through all elevators
        for (var i = 0; i < elevators.length; i++) {


            //idle event listener
            elevators[i].on("idle", function() {
                
                //basic loop for going to all floors, from bottom to top
                for (var j = 0; j < floors.length; j++) {
                    this.goToFloor(_updateFloorQueue());
                }
            });

            //button press event listener
            elevators[i].on("floor_button_pressed", function(floorNum) {
                _updateFloorQueue(floorNum);
            } );
            
            /*helper for managing floor queue
            returns next floor in queue, or ground floor if none available.
            TODO: should probably have a queue per elevator, and assign to queue
            based on direction of elecator and proximity to floor being called
            also, idle elevators should stagger from middle, high and low, or something like that
            */
            _updateFloorQueue = function(floor) {

                if (floor) {
                    idleFloorQueue.push(floor);
                    idleFloorQueue.sort();
                    return floor;
                } else {
                    if (idleFloorQueue.length == 0) {
                        idleFloorQueue.push(0);
                        return 0;
                    } else {
                        return idleFloorQueue.shift();
                    }
                }
            }
            
        }
        
        //iterate through all floors
        for(var i = 0; i < floors.length; i++) {

            floors[i].on('up_button_pressed', function() {
            });

            floors[i].on('down_button_pressed', function() {
            });
        }
    },

    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}