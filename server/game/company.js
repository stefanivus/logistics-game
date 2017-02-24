
(function() {
    "use strict"
    id = [0,0,0,0];
    function Company(name, budget, numEmployees)
	{
        // Set Company Information
        if (name == null || name == undefined) this.name = "Logistics Company, Inc.";
        else this.name = name;

        // $50,000 is the low limit cap for now
        if (budget == null || budget == undefined || budget < 50000) this.budget = 75000;
        else this.budget = budget;

        if (numEmployees == null || numEmployees == undefined) this.numEmployees = 1;
        else this.numEmployees = numEmployees;

        // Set Company Variables
        this.vehicles =
		{
            "bicycle": [],
            "truck": [],
            "train": [],
            "plane": []
        };

        // Constant Variables
        this.WAGE = 8;
    }

	// Add a new vehicle to Company class
	Company.prototype.AddVehicle = function AddVehicle(type, vehicle)
	{
		this.vehicles[type].push(vehicle);
	}

    /* The amount of money spent on X per day.
            Type              Cost
        --------------      --------
           employees          $8/hr
           vehicles          $15/hr
    */
    Company.prototype.dailyExpense = function dailyExpense()
    {
        // NOTE: Later, charge different amounts for different vehicles
        return ((this.WAGE * this.employees.length) +
                (15 * this.vehicles.length));
    }

    

	function Vehicle(TilesPerTurn,Capacity,GasPrice,TilesPerGallon,Range,Type)
	{
		// Set vehicle static variables
		if (GasPrice == null || GasPrice == undefined) this.GasPrice = 200;
        else this.GasPrice = GasPrice;
		if (TilesPerTurn == null || TilesPerTurn == undefined) this.TilesPerTurn = 0;
        else this.TilesPerTurn = TilesPerTurn;
		if (Capacity == null || Capacity == undefined) this.Capacity = 0;
        else this.Capacity = Capacity;
		if (TilesPerGallon == null || TilesPerGallon == undefined) this.TilesPerGallon = 0;
        else this.TilesPerGallon = TilesPerGallon;
		if (Range == null || Range == undefined) this.Range = 0;
        else this.Range = Range;

		// Set vehicle ID and increment global ID
		this.ID = id[type];
		id[type]++;

	}

	// Returns the cost for that vehicle if a certain distance is travelled
	Vehicle.prototype.TotalCost = function TotalCost(TilesTravelled)
	{
		return TilesTravelled * this.GasPrice * this.TilesPerGallon;
	}

    module.exports = Company;
})();
