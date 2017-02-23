(function(){
    "use strict"

    var Company = require("./company");

    function Game(companyName, budget/*, numStartingEmployees, numStartingClients*/) {
        this.company = new Company(companyName, budget);

        // Initialize Environment
        this.round = 1;

    }
    //Game.prototype.FUNCTIONNAME = function FUNCTIONNAME() {}

    Game.prototype.nextRound = function nextRound() {
        if (!this.isAlive()) {
            console.log("GAME OVER");
        } else {
            this.round++;
            this.company.budget = this.company.budget - this.company.dailyExpense();
        }
    }

    Game.prototype.isAlive = function isAlive() {
        return this.company.budget > -100000;
    }



    // Test
    var g = new Game();
    console.log(g.company.budget);
    //module.exports = Game;
})();
