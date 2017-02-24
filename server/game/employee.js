(function(){
    "use strict"

    /*
        Employees can be paid extra based on production levels.

    */

    function Employee(name, wage, speedMulti, capacityMulti) {
        if (name != null || name != undefined)
            this.name = name;
        else this.name = "Mike Dowell";

        if (wage != null || wage != undefined || wage > 0)
            this.wage = wage;
        else this.wage = 8; // default $8/hr

        // Production Levels
        this.speedMultiplier;
        this.capacityMultiplier;

    }

    module.exports = Employee;
})();
