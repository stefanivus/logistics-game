(function() {
    var assert = require('assert');
    var Game = require("../game");

    describe('Game', function() {
        describe('#isAlive()', function() {
            var g = new Game();
            g.employees = [1];
            g.vehicles = [];

            it('should return true when budget = 75000', () => {
                g.company.budget = 75000;
                assert.equal(true, g.isAlive());
            });

            it('should return true when budget = 0', () => {
                g.company.budget = 0;
                assert.equal(true, g.isAlive());
            });

            it('should return true when budget = -1', () => {
                g.company.budget = -1;
                assert.equal(true, g.isAlive());
            });

            // Remember, isAlive() subtracts budgetAfterRound
            // and then checks if > -100,000
            it('should return false when budget = -99999', () => {
                g.company.budget = -99999;
                assert.equal(false, g.isAlive());
            });

            it('should return false when budget = -100000', () => {
                g.company.budget = -100000;
                assert.equal(false, g.isAlive());
            });

            it('should return false when budget = -200000', () => {
                g.company.budget = -200000;
                assert.equal(false, g.isAlive());
            });
        });

        describe('#nextRound()', function() {
            var g = new Game();
            g.company.budget = 99999999; // make sure we have enough money

            it('should start at round 1', () => {
                assert.equal(1, g.round);
            });

            it('should increment round. round 2', () => {
                g.nextRound();
                assert.equal(2, g.round);
            });

            it('should increment round. round 3', () => {
                g.nextRound();
                assert.equal(3, g.round);
            });
        });
    });

})();

// Test
// var g = new Game();
// console.log("budget:", g.company.budget);
// while (g.isAlive()) {
//     console.log("\nbudget:", g.company.budget);
//     g.nextRound();
// }
