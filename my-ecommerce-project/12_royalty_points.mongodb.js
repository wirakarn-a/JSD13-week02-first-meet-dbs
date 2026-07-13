use("rental-project-db");

// Clear existing data
db.royalty_points.deleteMany({});

// Insert mock data for royalty_points collection
db.royalty_points.insertMany([
    {
        "_id": ObjectId("689a00000000000000000101"), // Jenny
        "customer_id": ObjectId("689a00000000000000000101"),
        "total_rentals": 7,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000062"),
        "customer_id": ObjectId("689a00000000000000000102"),
        "total_rentals": 10,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000103"),
        "customer_id": ObjectId("689a00000000000000000103"),
        "total_rentals": 5,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000104"),
        "customer_id": ObjectId("689a00000000000000000104"),
        "total_rentals": 12,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000105"),
        "customer_id": ObjectId("689a00000000000000000105"),
        "total_rentals": 3,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000106"),
        "customer_id": ObjectId("689a00000000000000000106"),
        "total_rentals": 8,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000107"),
        "customer_id": ObjectId("689a00000000000000000107"),
        "total_rentals": 15,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000108"),
        "customer_id": ObjectId("689a00000000000000000108"),
        "total_rentals": 2,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000109"),
        "customer_id": ObjectId("689a00000000000000000109"),
        "total_rentals": 20,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000110"),
        "customer_id": ObjectId("689a00000000000000000110"),
        "total_rentals": 6,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000111"),
        "customer_id": ObjectId("689a00000000000000000111"),
        "total_rentals": 9,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000112"),
        "customer_id": ObjectId("689a00000000000000000112"),
        "total_rentals": 4,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000113"),
        "customer_id": ObjectId("689a00000000000000000113"),
        "total_rentals": 11,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000114"),
        "customer_id": ObjectId("689a00000000000000000114"),
        "total_rentals": 1,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000115"),
        "customer_id": ObjectId("689a00000000000000000115"),
        "total_rentals": 14,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000116"),
        "customer_id": ObjectId("689a00000000000000000116"),
        "total_rentals": 0,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000117"),
        "customer_id": ObjectId("689a00000000000000000117"),
        "total_rentals": 18,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000118"),
        "customer_id": ObjectId("689a00000000000000000118"),
        "total_rentals": 3,
        "reward_redeemed": false
    },
    {
        "_id": ObjectId("689a00000000000000000119"),
        "customer_id": ObjectId("689a00000000000000000119"),
        "total_rentals": 16,
        "reward_redeemed": true
    },
    {
        "_id": ObjectId("689a00000000000000000120"),
        "customer_id": ObjectId("689a00000000000000000120"),
        "total_rentals": 5,
        "reward_redeemed": false
    }
]);