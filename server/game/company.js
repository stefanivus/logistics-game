(function(){
    "use strict"

    function Company(name, budget, employees) {
        if (name == null || name == undefined)
             this.name = "Logistics Company, Inc.";
        else this.name = name;

        // $50,000 is the low limit cap for now
        if (budget == null || budget == undefined || budget < 50000)
             this.budget = 75000;
        else this.budget = budget;

        if (employees == null || employees == undefined ||
            employees.length == 0 || !Array.isArray(employees))
             this.employees = [];
        else this.employees = employees;

        // Set Company Variables
        this.vehicles = [];
        this.clients = [];
        this.plannedShipments = []; // priority queue
    }

    /* The amount of money spent on X per day.
            Type              Cost
        --------------      --------
           employees          $8/hr
           vehicles          $15/hr
    */
    Company.prototype.dailyExpense = function dailyExpense() {
        // Note: Later, charge different amounts for different vehicles
        return ((8 * this.employees.length + 1) +
                (15 * this.vehicles.length));
    }

    module.exports = Company;
})();
