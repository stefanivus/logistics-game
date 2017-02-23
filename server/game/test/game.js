(function() {
    var assert = require('assert');
    var Game = require("../game");

    describe('Game', function() {
        describe('#isAlive()', function() {
            it('should return true when budget > -100,000', () => {
                var g = new Game();
                g.budget = 75000;
                assert.equal(true, g.isAlive());
                g.budget = 0;
                assert.equal(true, g.isAlive());
                g.budget = -1;
                assert.equal(true, g.isAlive());
                g.budget = -99999;
                assert.equal(true, g.isAlive());

                g.budget = -100000;
                assert.equal(false, g.isAlive());
                g.budget = -200000;
                assert.equal(false, g.isAlive());
            });
        });

        describe('#nextRound()', function() {
            it('should increment round if budget > -100,000', () => {
                var g = new Game();
                g.budget = 99999999; // make sure we have enough money
                assert.equal(1, g.round);
                g.nextRound();
                assert.equal(2, g.round;
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
