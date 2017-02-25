
(function() {
    "use strict"
    id = [0,0,0,0];
    function Company(name, budget, employees, coordinates)
	{
        // Set Company Information
        if (name == null || name == undefined) this.name = "Logistics Company, Inc.";
        else this.name = name;

        // $50,000 is the low limit cap for now
        if (budget == null || budget == undefined || budget < 50000) this.budget = 75000;
        else this.budget = budget;

        if (employees == null || employees == undefined) this.employees = 1;
        else this.employees = employees;
		
		if (coordinates == null || coordinates == undefined) this.coordinates = [0,0];
        else this.coordinates = coordinates;

        // Define Vehicle Types
        this.vehicles = {
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



	function Vehicle(TilesPerTurn,Capacity,GasPrice,TilesPerGallon,Range,Type)// Make this into a child class pls
	{
		// Set static variables
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
		
		// Set dynamic variables
		this.coordinates = company.coordinates; // company.coordinates AKA coordinates in the company class
		this.driver = false;
		this.load = 0;
		this.destination = [company.coordinates[0],company.coordinates[1]];
		this.route = [destination];

		// Set vehicle ID and increment global ID
		this.ID = id[type];
		id[type]++;

	}

	// Returns the cost for that vehicle if a certain distance is travelled
	Vehicle.prototype.TotalCost = function TotalCost(TilesTravelled)
	{
		return TilesTravelled * this.GasPrice * this.TilesPerGallon;
	}
	
	// Sets/unsets driver in the vehicle
	Vehicle.prototype.SetDriver = function SetDriver()
	{
		if (this.driver == true)
		{
			this.driver = false;
			company.employees++;
		}
		else
	    {
			this.driver = true;
			company.employees--;
		}
	}
	
	// Checks if vehicle is available
	Vehicle.prototype.Available = function Available()
	{
		if (this.coordinates[0] == company.coordinates[0] && this.coordinates[1] == company.coordinates[1]
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	// Deploy car to destination using route
	Vehicle.prototype.Deploy = function Deploy(route,destination)
    {
		this.route = route;
		this.destination = destination;
	}
	
	// Inside function
	Vehicle.prototype.FindIndex = function FindIndex()
	{
		for (var i=0; i < this.route.length;i++)
	    {
			if (this.coordinates[0] == route[i][0] && this.coordinates[1] == route[i][1])
		    {
				return i;
			}
		}
	}
	
	// Moves a car by its speed following the route (use per turn)
	Vehicle.prototype.Move = function Move()
	{
		next = this.FindIndex() + this.TilesPerTurn;
		if (next <= this.route.length)
		{
			this.coordinates[0] = this.route[next][0];
			this.coordinates[1] = this.route[next][1];
		}
		else
		{
			this.coordinates[0] = this.route[this.route.length-1][0];
			this.coordinates[1] = this.route[this.route.length-1][1];
		}
	}

    module.exports = Company;
})();
