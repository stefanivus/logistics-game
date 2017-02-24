(function() {
    var assert = require('assert');
    var Game = require("../game");

    describe('Game', function() {
        describe('#isAlive()', () => {
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

        describe('#nextRound()', () => {
            var g = new Game();
            g.company.budget = 99999999; // make sure we have enough money

            for (let i = 1; i <= 10; i++) {
                let currRound = g.round;
                it('should increment round. round = ' + i, () => {
                    assert.equal(i, currRound);
                });
                g.nextRound();
            }

            g.company.budget = -100000;
            it('should return false. Game over.', () => {
                assert.equal(false, g.nextRound());
            });
        });

        describe('#budgetAfterRound()', () => {
            var g = new Game();
            // 10 iterations with 1 employee
            g.company.budget = 80;
            g.employees = [1];
            g.vehicles = [];

            for (var i = 1; i <= 10; i++) {
                it('should decrement budget by 8. i = ' + i, () => {
                    assert.equal(g.company.budget - g.company.WAGE, g.budgetAfterRound());
                });
            }
        });
    });

})();
