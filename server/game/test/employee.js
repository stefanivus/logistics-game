(function() {
    var assert = require('assert');
    var Employee = require('../employee');

    describe('Employee', () => {
        var e = new Employee('Fernando', 1);
        var e_def = new Employee();

        describe('#name', () => {
            it('should return name = Fernando', () => {
                assert.equal('Fernando', e.name);
            });

            it('should return wage = 1', () => {
                assert.equal(1, e.wage);
            });

            it('should return default wage = 8', () => {
                assert.equal(8, e_def.wage);
            });
        });
    });
})();
