(function(){

    function Map(numDropZones) {
        this.N = 10;
        this.grid = [];
        this.dropZones = [];

        // Creates 10x10 grid
        for (var i = 0; i < (this.N * this.N); i++)
            this.grid[i] = 0;

        // Place Random Drop Zones

        // Place Random Base Camp
    }

    /* Place X random drop zones */
    Map.prototype.placeRandomDropzones = function placeRandomDropzones(numZones) {

    }

    Map.prototype.placeRandomBaseCamp = function placeRandomBaseCamp() {

    }

    /* Turn (row, col) into an index.
        Row and Col must be in range [1, N]

     */
    Map.prototype.getGridIndex = function getGridIndex(row, col) {
        if (row < 1 || row > this.N)
            throw new Error("Row is out of bounds.");
        if (col < 1 || col > this.N)
            throw new Error("Row is out of bounds.");

        return (row * this.N) + this.col - 1;
    }

    Map.prototype.printGrid = function printGrid() {
        var defaultString = "    ";
        var stringBuilder = defaultString;

        for (var i = 0; i < this.grid.length; i++) {
            if (i % this.N == 0) {
                console.log(stringBuilder);
                stringBuilder = defaultString;
            }
            else stringBuilder += (this.grid[i] + " ");
        }
    }




    var m = new Map();
    m.printGrid();

    //module.exports = Map;
})();
