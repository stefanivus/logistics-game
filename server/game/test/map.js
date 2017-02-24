(function() {
    var assert = require('assert');
    var Map = require("../map");
    var Game = require("../environment");

    describe('Map', function() {
        describe('#isAlive()', () => {
            var Map = new Map();
            var g = new Game();

            it('should return true when budget = 75000', () => {
                g.company.budget = 75000;
                assert.equal(true, g.isAlive());
            });
        });
    });


})();
