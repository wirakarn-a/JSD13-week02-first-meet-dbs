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
    }
]);
