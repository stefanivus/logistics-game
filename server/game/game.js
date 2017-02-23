(function(){
    "use strict"

    var Company = require("./company");

    function Game(companyName, budget/*, numStartingEmployees, numStartingClients*/) {
        this.company = new Company(companyName, budget);


        // -------------------------------------
        // NOTE Remove later. Used to end loop.
        this.company.employees = [1];
        // -------------------------------------



        // Initialize Environment
        this.round = 1;
    }
    //Game.prototype.FUNCTIONNAME = function FUNCTIONNAME() {}

    Game.prototype.nextRound = function nextRound() {
        if (!this.isAlive()) {
            console.log("GAME OVER");
        } else {
            this.round++;
            this.company.budget = this.budgetAfterRound();
        }
    }

    // NOTE GO CLIENT BY CLIENT AND DECREASE BASED ON SHIPMENTS
    Game.prototype.budgetAfterRound = function budgetAfterRound() {
        return this.company.budget - this.company.dailyExpense();
    }

    Game.prototype.isAlive = function isAlive() {
        return this.budgetAfterRound() > -100000;
    }

    module.exports = Game;
})();
