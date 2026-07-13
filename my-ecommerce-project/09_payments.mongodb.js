use("rental-project-db");

// Clear existing data
db.payments.deleteMany({});

// Insert mock data for payments collection
db.payments.insertMany([
    {
        "_id": ObjectId("689a00000000000000000031"),
        "rental_id": ObjectId("689a00000000000000000001"), // Jenny Chanel Classic bag
        "total_amount": 2500,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1300,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-09T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000032"),
        "rental_id": ObjectId("689a00000000000000000002"), // Cara Chanel handbag
        "total_amount": 2600,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1400,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-12T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000033"),
        "rental_id": ObjectId("689a00000000000000000003"), // Petty Fabrique dress
        "total_amount": 550,
        "payment_type": [
            {
                "amount": 200,
                "payment_type": "deposit"
            },
            {
                "amount": 50,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 300,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-06T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000034"),
        "rental_id": ObjectId("689a00000000000000000004"),
        "total_amount": 2300,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1100,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "pending",
        "payment_date": "2026-07-13T09:00:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000035"),
        "rental_id": ObjectId("689a00000000000000000005"),
        "total_amount": 2400,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1200,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-04T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000036"),
        "rental_id": ObjectId("689a00000000000000000006"),
        "total_amount": 1950,
        "payment_type": [
            {
                "amount": 800,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 950,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-06-29T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000037"),
        "rental_id": ObjectId("689a00000000000000000007"),
        "total_amount": 3700,
        "payment_type": [
            {
                "amount": 1500,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 2000,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "pending",
        "payment_date": "2026-07-19T09:00:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000038"),
        "rental_id": ObjectId("689a00000000000000000008"),
        "total_amount": 1200,
        "payment_type": [
            {
                "amount": 500,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 500,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-10T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000039"),
        "rental_id": ObjectId("689a00000000000000000009"),
        "total_amount": 1050,
        "payment_type": [
            {
                "amount": 400,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 450,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-06-26T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000040"),
        "rental_id": ObjectId("689a00000000000000000010"),
        "total_amount": 1400,
        "payment_type": [
            {
                "amount": 600,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 600,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-06-23T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000041"),
        "rental_id": ObjectId("689a00000000000000000011"),
        "total_amount": 1600,
        "payment_type": [
            {
                "amount": 700,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 700,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "pending",
        "payment_date": "2026-07-21T09:00:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000042"),
        "rental_id": ObjectId("689a00000000000000000012"),
        "total_amount": 1250,
        "payment_type": [
            {
                "amount": 500,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 550,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-08T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000043"),
        "rental_id": ObjectId("689a00000000000000000013"),
        "total_amount": 2900,
        "payment_type": [
            {
                "amount": 1200,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1500,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-06-18T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000044"),
        "rental_id": ObjectId("689a00000000000000000014"),
        "total_amount": 1800,
        "payment_type": [
            {
                "amount": 800,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 800,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-06T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000045"),
        "rental_id": ObjectId("689a00000000000000000015"),
        "total_amount": 2400,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1200,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "pending",
        "payment_date": "2026-07-15T09:00:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000046"),
        "rental_id": ObjectId("689a00000000000000000016"),
        "total_amount": 1000,
        "payment_type": [
            {
                "amount": 400,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 400,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-01T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000047"),
        "rental_id": ObjectId("689a00000000000000000017"),
        "total_amount": 1850,
        "payment_type": [
            {
                "amount": 800,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 850,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-06-16T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000048"),
        "rental_id": ObjectId("689a00000000000000000018"),
        "total_amount": 2500,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1300,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-03T10:30:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000049"),
        "rental_id": ObjectId("689a00000000000000000019"),
        "total_amount": 2300,
        "payment_type": [
            {
                "amount": 1000,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 1100,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "refunded",
        "payment_date": "2026-07-16T09:00:00Z"
    },
    {
        "_id": ObjectId("689a00000000000000000050"),
        "rental_id": ObjectId("689a00000000000000000020"),
        "total_amount": 1400,
        "payment_type": [
            {
                "amount": 600,
                "payment_type": "deposit"
            },
            {
                "amount": 200,
                "payment_type": "delivery_fee"
            },
            {
                "amount": 600,
                "payment_type": "rental_fee"
            }
        ],
        "payment_status": "completed",
        "payment_date": "2026-07-11T10:30:00Z"
    }
]);