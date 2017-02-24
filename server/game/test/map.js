(function() {
    var assert = require('assert');
    var Map = require("../map");
    var Game = require("../environment");

    describe('Map', function() {
        describe('#constructor()', () => {
            it('should return 10x10 grid', () => {
                assert.equal(100, map.grid.length);
            });
        });

        describe('#getGridIndex()', () => {
            var map = new Map();

            it('should return 10x10 grid', () => {
                assert.equal(100, map.grid.length);
            });
        });
    });


})();
