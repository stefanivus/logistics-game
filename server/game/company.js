/** i am commenting **/
(function(){
    "use strict"

    function Company(name, budget, numEmployees) {
        // Set Company Information
        if (name == null || name == undefined)
             this.name = "Logistics Company, Inc.";
        else this.name = name;

        // $50,000 is the low limit cap for now
        if (budget == null || budget == undefined || budget < 50000)
             this.budget = 75000;
        else this.budget = budget;

        if (numEmployees == null || numEmployees == undefined)
             this.numEmployees = 1;
        else this.numEmployees = numEmployees;

        // Set Company Variables
        this.vehicles = {
            bicycle: [],
            trucks: [],
            train: [],
            plane: []
        };

        // Constant Variables
        this.WAGE = 8;
    }

    /* The amount of money spent on X per day.
            Type              Cost
        --------------      --------
           employees          $8/hr
           vehicles          $15/hr
    */
    Company.prototype.dailyExpense = function dailyExpense() {
        // NOTE: Later, charge different amounts for different vehicles
        return ((this.WAGE * this.employees.length) +
                (15 * this.vehicles.length));
    }

    module.exports = Company;
})();
