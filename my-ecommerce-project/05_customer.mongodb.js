use("rental-project-db");

// Clear existing data
db.customers.deleteMany({});

// Insert mock data for customers collection
db.customers.insertMany([
    {
        "_id": ObjectId("689a00000000000000000101"),
        "name": "Jenny",
        "phone_number": "0971657284",
        "email": "jenny1423@example.com",
        "id_number": "563-1537",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000102"),
        "name": "Cara",
        "phone_number": "0946287493",
        "email": "cara999@example.com",
        "id_number": "584-9836",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000103"),
        "name": "Petty",
        "phone_number": "0930281746",
        "email": "petty@example.com",
        "id_number": "983-0284",
        "blacklist_flag": true
    },
    {
        "_id": ObjectId("689a00000000000000000104"),
        "name": "Mint",
        "phone_number": "0812345678",
        "email": "minty@example.com",
        "id_number": "127-4829",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000105"),
        "name": "Pla",
        "phone_number": "0898765432",
        "email": "pla456@example.com",
        "id_number": "341-7652",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000106"),
        "name": "Pim",
        "phone_number": "0951122334",
        "email": "pimada@example.com",
        "id_number": "782-3195",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000107"),
        "name": "Nook",
        "phone_number": "0864433221",
        "email": "nooknik@example.com",
        "id_number": "456-8271",
        "blacklist_flag": true
    },
    {
        "_id": ObjectId("689a00000000000000000108"),
        "name": "Fern",
        "phone_number": "0929988776",
        "email": "baifernza@example.com",
        "id_number": "293-6514",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000109"),
        "name": "Gift",
        "phone_number": "0876655443",
        "email": "gift888@example.com",
        "id_number": "618-2047",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000110"),
        "name": "Olive",
        "phone_number": "0943322110",
        "email": "oliveoil@example.com",
        "id_number": "835-9761",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000111"),
        "name": "Bowie",
        "phone_number": "0835566778",
        "email": "bowieheeh@example.com",
        "id_number": "147-3682",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000112"),
        "name": "Jean",
        "phone_number": "0917788990",
        "email": "jeanbyjean@example.com",
        "id_number": "529-8413",
        "blacklist_flag": true
    },
    {
        "_id": ObjectId("689a00000000000000000113"),
        "name": "Kay",
        "phone_number": "0801122334",
        "email": "kayler@example.com",
        "id_number": "374-2156",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000114"),
        "name": "Sonya",
        "phone_number": "0968877665",
        "email": "sonyayoung@example.com",
        "id_number": "961-5837",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000115"),
        "name": "Mew",
        "phone_number": "0823344556",
        "email": "meew123@example.com",
        "id_number": "208-7493",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000116"),
        "name": "Praew",
        "phone_number": "0985566778",
        "email": "praewdamm@example.com",
        "id_number": "492-1678",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000117"),
        "name": "Jane",
        "phone_number": "0859988776",
        "email": "janerubyjane@example.com",
        "id_number": "716-3924",
        "blacklist_flag": true
    },
    {
        "_id": ObjectId("689a00000000000000000118"),
        "name": "Belle",
        "phone_number": "0932211009",
        "email": "belee@example.com",
        "id_number": "385-6147",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000119"),
        "name": "Mimi",
        "phone_number": "0846677889",
        "email": "mimi@example.com",
        "id_number": "623-8571",
        "blacklist_flag": false
    },
    {
        "_id": ObjectId("689a00000000000000000120"),
        "name": "Tang",
        "phone_number": "0901122334",
        "email": "tangkub@example.com",
        "id_number": "157-9302",
        "blacklist_flag": false
    }
]);