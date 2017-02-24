(function(){
    "use strict"

    /* Client - needs products delivered by certain time

        Each Client has properties:
            products

    */

    function Client(name, products) {
        // Set Client Information
        if (name == null || name == undefined)
            this.name = "Company XYZ";
        else this.name = name;

        if (products == null || products == undefined || !Array.isArray(products))
            this.products = ['Default Product 1']; // default 1 product
        else this.products = products;

        // Set Shipment Information
        this.nextShipment = false;
    }

    //Client.prototype.setNextShipment = function setNextShipment() {}

    Client.prototype.getNextShipment = function setNextShipment() {

    }

    Client.prototype.setNextShipment = function setNextShipment() {

    }

    module.exports = Client;
})();
