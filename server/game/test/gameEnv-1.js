(function() {
    var assert = require('assert'),
        Game = require("../environment"),
        Client = require('../client');

    /*
        Comprehensive Test of game
        setting up an entire environment.

        Play a few rounds to make sure
        things are working as should.
    */
    describe('Game', function() {
        describe('#initializeEnvironment', () => {
            // Default Variables
            var companyName = "Test Company 1";
            var startingBudget = 100000; // $100,000
            var startingEmployees = 5;
            var startingClients = [];

            // Load Clients
            for (let i = 1; i <= 5; i++)
                startingClients.push(new Client('Client ' + i));

            var g = new Game(companyName, startingBudget,
                             startingEmployees, startingClients);

            it('should return true when budget = 75000', () => {
                assert.equal(true, g.isAlive());
            });
        });

    });
})();
