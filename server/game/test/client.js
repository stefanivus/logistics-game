(function() {
    var assert = require('assert');
    var Client = require("../client");

    describe('Client', function() {
        describe('#isAlive()', function() {
            var c = new Client();

            it('should return true when budget = 75000', () => {
                g.company.budget = 75000;
                assert.equal(true, g.isAlive());
            });
        });
    });
});
