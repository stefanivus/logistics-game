(function(){
    "use strict"

    var Company = require("./company");

    /*
        Game Environment

        Properties:
            - company
            - clients => all the current clients
            - round
            -

        Round System:
            - Every round the game environment is recalculated.
                1. Company's budget is recalculated
                    (subtract wages and vehicle costs)
                2. Increment Deliveries

    */

    function Game(companyName, budget, numStartingEmployees/*, numStartingClients*/) {
        this.company = new Company(companyName, budget);

        // -------------------------------------
        // NOTE Remove later. Used to end loop.
        this.company.employees = [1];
        // -------------------------------------

        // Initialize Environment
        this.turn = 1;
        this.clients = []; // array of client objects


        // Game Settings (Constants)
        this.BUDGET_THRESHOLD = 0; // Lose is budget < threshold
        this.COST_GAS = 2.55; // $ per gallon
        
    }
    //Game.prototype.FUNCTIONNAME = function FUNCTIONNAME() {}

    Game.prototype.nextRound = function nextRound() {
        if (!this.isAlive()) {
            return false; // GAME OVER

        } else {
            this.turn++;
            // Subtract Employee Wages from Budget
            // Subtract Gas Costs from Budget
        }
    }

    Game.prototype.checkBudget = function checkBudget() {
        return this.company.budget > this.BUDGET_THRESHOLD;
    }

    // // NOTE GO CLIENT BY CLIENT AND DECREASE BASED ON SHIPMENTS
    // Game.prototype.budgetAfterRound = function budgetAfterRound() {
    //     return this.company.budget - this.company.dailyExpense();
    // }

    // Game.prototype.loadClients = function loadClients(clients) {
    //
    // }

    /* Check what the budget will be when the round ends */
    Game.prototype.isAlive = function isAlive() {
        return false;
    }

    module.exports = Game;
})();
