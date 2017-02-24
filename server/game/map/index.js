(function(){

    function Map() {
        // Creates 10x10 grid
        this.grid = [];
        for (var i = 0; i < 10*10; i++)
            this.grid[i] = 0;


    }

    Map.prototype.placeRandomDropzones() = function placeRandomDropzones() {
        
    }

    module.exports = Map;
})();
