use("rental-project-db");

// Clear existing data
db.rentals.deleteMany({});

// Insert mock data for rentals collection
db.rentals.insertMany([
    {
        "_id": ObjectId("689a00000000000000000001"),
        "customer_id": ObjectId("689a00000000000000000101"), // Jenny
        "rental_start_date": new Date("2026-07-11T06:00:00Z"),
        "rental_end_date": new Date("2026-07-13T06:00:00Z"),
        "status": "ongoing"
    },
    {
        "_id": ObjectId("689a00000000000000000002"),
        "customer_id": ObjectId("689a00000000000000000102"), // Cara
        "rental_start_date": new Date("2026-07-15T06:00:00Z"),
        "rental_end_date": new Date("2026-07-19T06:00:00Z"),
        "status": "reserved"
    },
    {
        "_id": ObjectId("689a00000000000000000003"),
        "customer_id": ObjectId("689a00000000000000000103"), // Petty
        "rental_start_date": new Date("2026-07-09T06:00:00Z"),
        "rental_end_date": new Date("2026-07-11T06:00:00Z"),
        "status": "overdue"
    },
    {
        "_id": ObjectId("689a00000000000000000004"),
        "customer_id": ObjectId("689a00000000000000000104"), // Mint
        "rental_start_date": new Date("2026-07-14T06:00:00Z"),
        "rental_end_date": new Date("2026-07-16T06:00:00Z"),
        "status": "reserved"
    },
    {
        "_id": ObjectId("689a00000000000000000005"),
        "customer_id": ObjectId("689a00000000000000000105"), // Pla
        "rental_start_date": new Date("2026-07-06T06:00:00Z"),
        "rental_end_date": new Date("2026-07-10T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000006"),
        "customer_id": ObjectId("689a00000000000000000106"), // Pim
        "rental_start_date": new Date("2026-07-01T06:00:00Z"),
        "rental_end_date": new Date("2026-07-05T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000007"),
        "customer_id": ObjectId("689a00000000000000000107"), // Nook
        "rental_start_date": new Date("2026-07-20T06:00:00Z"),
        "rental_end_date": new Date("2026-07-25T06:00:00Z"),
        "status": "reserved"
    },
    {
        "_id": ObjectId("689a00000000000000000008"),
        "customer_id": ObjectId("689a00000000000000000108"), // Fern
        "rental_start_date": new Date("2026-07-12T06:00:00Z"),
        "rental_end_date": new Date("2026-07-14T06:00:00Z"),
        "status": "ongoing"
    },
    {
        "_id": ObjectId("689a00000000000000000009"),
        "customer_id": ObjectId("689a00000000000000000109"), // Gift
        "rental_start_date": new Date("2026-06-28T06:00:00Z"),
        "rental_end_date": new Date("2026-07-02T06:00:00Z"),
        "status": "overdue"
    },
    {
        "_id": ObjectId("689a00000000000000000010"),
        "customer_id": ObjectId("689a00000000000000000110"), // Olive
        "rental_start_date": new Date("2026-06-25T06:00:00Z"),
        "rental_end_date": new Date("2026-06-28T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000011"),
        "customer_id": ObjectId("689a00000000000000000111"), // Bowie
        "rental_start_date": new Date("2026-07-22T06:00:00Z"),
        "rental_end_date": new Date("2026-07-24T06:00:00Z"),
        "status": "reserved"
    },
    {
        "_id": ObjectId("689a00000000000000000012"),
        "customer_id": ObjectId("689a00000000000000000112"), // Jean
        "rental_start_date": new Date("2026-07-10T06:00:00Z"),
        "rental_end_date": new Date("2026-07-12T06:00:00Z"),
        "status": "ongoing"
    },
    {
        "_id": ObjectId("689a00000000000000000013"),
        "customer_id": ObjectId("689a00000000000000000113"), // Kay
        "rental_start_date": new Date("2026-06-20T06:00:00Z"),
        "rental_end_date": new Date("2026-06-23T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000014"),
        "customer_id": ObjectId("689a00000000000000000114"), // Sonya
        "rental_start_date": new Date("2026-07-08T06:00:00Z"),
        "rental_end_date": new Date("2026-07-11T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000015"),
        "customer_id": ObjectId("689a00000000000000000115"), // Mew
        "rental_start_date": new Date("2026-07-16T06:00:00Z"),
        "rental_end_date": new Date("2026-07-20T06:00:00Z"),
        "status": "reserved"
    },
    {
        "_id": ObjectId("689a00000000000000000016"),
        "customer_id": ObjectId("689a00000000000000000116"), // Praew
        "rental_start_date": new Date("2026-07-03T06:00:00Z"),
        "rental_end_date": new Date("2026-07-06T06:00:00Z"),
        "status": "overdue"
    },
    {
        "_id": ObjectId("689a00000000000000000017"),
        "customer_id": ObjectId("689a00000000000000000117"), // Jane
        "rental_start_date": new Date("2026-06-18T06:00:00Z"),
        "rental_end_date": new Date("2026-06-21T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000018"),
        "customer_id": ObjectId("689a00000000000000000118"), // Belle
        "rental_start_date": new Date("2026-07-05T06:00:00Z"),
        "rental_end_date": new Date("2026-07-08T06:00:00Z"),
        "status": "completed"
    },
    {
        "_id": ObjectId("689a00000000000000000019"),
        "customer_id": ObjectId("689a00000000000000000119"), // Mimi
        "rental_start_date": new Date("2026-07-17T06:00:00Z"),
        "rental_end_date": new Date("2026-07-19T06:00:00Z"),
        "status": "cancelled"
    },
    {
        "_id": ObjectId("689a00000000000000000020"),
        "customer_id": ObjectId("689a00000000000000000120"), // Tang
        "rental_start_date": new Date("2026-07-13T06:00:00Z"),
        "rental_end_date": new Date("2026-07-17T06:00:00Z"),
        "status": "ongoing"
    }
]);