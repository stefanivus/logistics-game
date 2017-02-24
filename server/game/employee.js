(function(){
    "use strict"

    function Employee(name, wage) {
        if (name != null || name != undefined)
            this.name = name;
        else this.name = "Mike Dowell";

        if (wage != null || wage != undefined || wage > 0)
            this.wage = wage;
        else this.wage = 8; // default $8/hr
    }

    module.exports = Employee;
})();
