# Logistics Game!

Game
    ## User Input
    company

    ## Automatically Updated
    Map
    Clients







                    Table of Contents
                   -------------------

                1. Descriptions of Pieces
                2. How objects fit together
                3.











                1. Descriptions of Pieces
----------------------------------------------------------------

                            Game

    The Logistic Game challenges you to figure out the
    fastest and most cost-effective way to make deliveries
    for your clients.

    As the Logistics Manager, you will have to be in charge
    of your clients happiness and your company's budget.
        * The client's happiness is determined by how
           soon deliveries can be made.

        * The company's budget decreases each round
          based on the number of employees and vehicle
          fuel/maintenance costs.

    The levels become harder by having to manage more
    cities in the same amount of time. In harder levels,
    the Logistics Manager will have to send packages via
    plane or train; and then determine how to send out
    the packages locally.


----------------------------------------------------------------

                            Map

    This map of the city is a N x N grid marked with specific
    locations where deliveries can be made.
    The delivery trucks will have to pick the best routes so
    as to save time and gas.

    As rounds get harder the maps will be bigger and the user
    will have to manage sending products to different locations
    via trains/planes, then picking the best local delivery
    methods to get them to desired locations.

----------------------------------------------------------------

                            Clients

    Clients have products that need to be sent to various
    locations on the map. This may be nearby or far -
    i.e. a different city.

    Clients have various moods that determine if they will
    continue to work with you.

        Happy    =>  * deliveries ahead of time/on time
                     * No chance of leaving you

        Neutral  =>  * deliveries occasionally late but
                       usually on time.
                     * 10% chance of leaving you

        Annoyed  =>  * deliveries late often but still
                       make some deliveries on time
                     * 65% chance of leaving you

        Mad      =>  * too many late deliveries
                     * 90% chance of leaving you

----------------------------------------------------------------

                            Company

    The Logistic Company is the way the User interacts with
    the game.

----------------------------------------------------------------













                  2. How objects fit together
----------------------------------------------------------------
    There are two main groups: User Input and Automated.

    All the automated classes are those evaluated at the end
    of each round. When a round ends, we must re-calculate
    the Logistics Company's budget, and increment the deliveries
    by X amount.

    Once deliveries are made, we update the Clients' happiness
    and other parameters.

----------------------------------------------------------------
