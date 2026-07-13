use("rental-project-db");

// Clear existing data
db.rental_items.deleteMany({});

// Insert mock data for rental_items collection
db.rental_items.insertMany([
    {
        "_id": ObjectId("689a00000000000000000021"),
        "rental_id": ObjectId("689a00000000000000000001"),
        "product_id": ObjectId("689a00000000000000000011"), // Chanel Classic
        "item_price": 1300
    },
    {
        "_id": ObjectId("689a00000000000000000022"),
        "rental_id": ObjectId("689a00000000000000000002"),
        "product_id": ObjectId("689a00000000000000000012"), // Chanel Handbag
        "item_price": 1400
    },
    {
        "_id": ObjectId("689a00000000000000000023"),
        "rental_id": ObjectId("689a00000000000000000003"),
        "product_id": ObjectId("689a00000000000000000013"), // Fabrique Dress
        "item_price": 300
    },
    {
        "_id": ObjectId("689a00000000000000000024"),
        "rental_id": ObjectId("689a00000000000000000004"),
        "product_id": ObjectId("689a00000000000000000014"), // Louis Vuitton Neverfull
        "item_price": 1100
    },
    {
        "_id": ObjectId("689a00000000000000000025"),
        "rental_id": ObjectId("689a00000000000000000005"),
        "product_id": ObjectId("689a00000000000000000015"), // Dior Lady Dior
        "item_price": 1200
    },
    {
        "_id": ObjectId("689a00000000000000000026"),
        "rental_id": ObjectId("689a00000000000000000006"),
        "product_id": ObjectId("689a00000000000000000016"), // Gucci GG Marmont
        "item_price": 950
    },
    {
        "_id": ObjectId("689a00000000000000000027"),
        "rental_id": ObjectId("689a00000000000000000007"),
        "product_id": ObjectId("689a00000000000000000017"), // Hermès Birkin
        "item_price": 2000
    },
    {
        "_id": ObjectId("689a00000000000000000028"),
        "rental_id": ObjectId("689a00000000000000000008"),
        "product_id": ObjectId("689a00000000000000000018"), // Valentino Gown
        "item_price": 500
    },
    {
        "_id": ObjectId("689a00000000000000000029"),
        "rental_id": ObjectId("689a00000000000000000009"),
        "product_id": ObjectId("689a00000000000000000019"), // Prada Jacket
        "item_price": 450
    },
    {
        "_id": ObjectId("689a00000000000000000030"),
        "rental_id": ObjectId("689a00000000000000000010"),
        "product_id": ObjectId("689a00000000000000000020"), // Chanel Ballet Flats
        "item_price": 600
    },
    {
        "_id": ObjectId("689a00000000000000000031"),
        "rental_id": ObjectId("689a00000000000000000011"),
        "product_id": ObjectId("689a00000000000000000021"), // Louboutin Pumps
        "item_price": 700
    },
    {
        "_id": ObjectId("689a00000000000000000032"),
        "rental_id": ObjectId("689a00000000000000000012"),
        "product_id": ObjectId("689a00000000000000000022"), // Jimmy Choo Pumps
        "item_price": 550
    },
    {
        "_id": ObjectId("689a00000000000000000033"),
        "rental_id": ObjectId("689a00000000000000000013"),
        "product_id": ObjectId("689a00000000000000000023"), // Cartier Love Bracelet
        "item_price": 1500
    },
    {
        "_id": ObjectId("689a00000000000000000034"),
        "rental_id": ObjectId("689a00000000000000000014"),
        "product_id": ObjectId("689a00000000000000000024"), // Tiffany Necklace
        "item_price": 800
    },
    {
        "_id": ObjectId("689a00000000000000000035"),
        "rental_id": ObjectId("689a00000000000000000015"),
        "product_id": ObjectId("689a00000000000000000025"), // Bulgari Ring
        "item_price": 1200
    },
    {
        "_id": ObjectId("689a00000000000000000036"),
        "rental_id": ObjectId("689a00000000000000000016"),
        "product_id": ObjectId("689a00000000000000000026"), // Saint Laurent Jacket
        "item_price": 400
    },
    {
        "_id": ObjectId("689a00000000000000000037"),
        "rental_id": ObjectId("689a00000000000000000017"),
        "product_id": ObjectId("689a00000000000000000027"), // Bottega Veneta Clutch
        "item_price": 850
    },
    {
        "_id": ObjectId("689a00000000000000000038"),
        "rental_id": ObjectId("689a00000000000000000018"),
        "product_id": ObjectId("689a00000000000000000011"), // Chanel Classic
        "item_price": 1300
    },
    {
        "_id": ObjectId("689a00000000000000000039"),
        "rental_id": ObjectId("689a00000000000000000019"),
        "product_id": ObjectId("689a00000000000000000014"), // Louis Vuitton Neverfull
        "item_price": 1100
    },
    {
        "_id": ObjectId("689a00000000000000000040"),
        "rental_id": ObjectId("689a00000000000000000020"),
        "product_id": ObjectId("689a00000000000000000020"), // Chanel Ballet Flats
        "item_price": 600
    }
]);
