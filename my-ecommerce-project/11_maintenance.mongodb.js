use("rental-project-db");

// Clear existing data
db.maintenance.deleteMany({});

// Insert mock data for maintenance collection
db.maintenance.insertMany([
    {
        "_id": ObjectId("689a00000000000000000051"),
        "product_id": ObjectId("689a00000000000000000011"), // Chanel Classic
        "maintenance_type": "cleaning",
        "cost": 500,
        "vendor": "ร้านซักผ้าหนังพรีเมียม",
        "start_date": "2026-07-18",
        "completion_date": "2026-07-19"
    },
    {
        "_id": ObjectId("689a00000000000000000052"),
        "product_id": ObjectId("689a00000000000000000012"), // Chanel Handbag
        "maintenance_type": "authentication_recheck",
        "cost": 800,
        "vendor": "ศูนย์ตรวจสอบของแท้ Bangkok Authentication",
        "start_date": "2026-08-01",
        "completion_date": "2026-08-03"
    },
    {
        "_id": ObjectId("689a00000000000000000053"),
        "product_id": ObjectId("689a00000000000000000013"), // Fabrique Dress
        "maintenance_type": "repair",
        "cost": 400,
        "vendor": "ร้านรับปะ ตัดเย็บเสื้อผ้า",
        "start_date": "2026-06-21",
        "completion_date": "2026-06-24"
    },
    {
        "_id": ObjectId("689a00000000000000000054"),
        "product_id": ObjectId("689a00000000000000000014"), // Louis Vuitton Neverfull
        "maintenance_type": "deep_cleaning",
        "cost": 700,
        "vendor": "ร้านซักผ้าหนังพรีเมียม",
        "start_date": "2026-07-20",
        "completion_date": "2026-07-21"
    },
    {
        "_id": ObjectId("689a00000000000000000055"),
        "product_id": ObjectId("689a00000000000000000015"), // Dior Lady Dior
        "maintenance_type": "leather_conditioning",
        "cost": 600,
        "vendor": "ร้านซักผ้าหนังพรีเมียม",
        "start_date": "2026-07-22",
        "completion_date": "2026-07-23"
    },
    {
        "_id": ObjectId("689a00000000000000000056"),
        "product_id": ObjectId("689a00000000000000000016"), // Gucci GG Marmont
        "maintenance_type": "zipper_repair",
        "cost": 350,
        "vendor": "ช่างซ่อมกระเป๋าแบรนด์เนม",
        "start_date": "2026-07-10",
        "completion_date": "2026-07-12"
    },
    {
        "_id": ObjectId("689a00000000000000000057"),
        "product_id": ObjectId("689a00000000000000000017"), // Hermès Birkin
        "maintenance_type": "leather_conditioning",
        "cost": 1200,
        "vendor": "ร้านซักผ้าหนังพรีเมียม",
        "start_date": "2026-08-05",
        "completion_date": "2026-08-07"
    },
    {
        "_id": ObjectId("689a00000000000000000058"),
        "product_id": ObjectId("689a00000000000000000018"), // Valentino Gown
        "maintenance_type": "stitching_repair",
        "cost": 450,
        "vendor": "ช่างตัดเสื้อแบรนด์เนม",
        "start_date": "2026-07-25",
        "completion_date": "2026-07-27"
    },
    {
        "_id": ObjectId("689a00000000000000000059"),
        "product_id": ObjectId("689a00000000000000000019"), // Prada Jacket
        "maintenance_type": "cleaning",
        "cost": 400,
        "vendor": "ร้านซักผ้าแบรนด์เนม",
        "start_date": "2026-07-15",
        "completion_date": "2026-07-16"
    },
    {
        "_id": ObjectId("689a00000000000000000060"),
        "product_id": ObjectId("689a00000000000000000020"), // Chanel Ballet Flats
        "maintenance_type": "polishing",
        "cost": 300,
        "vendor": "ร้านขัดPolish รองเท้า",
        "start_date": "2026-07-28",
        "completion_date": "2026-07-28"
    },
    {
        "_id": ObjectId("689a00000000000000000061"),
        "product_id": ObjectId("689a00000000000000000021"), // Louboutin Pumps
        "maintenance_type": "sole_repair",
        "cost": 900,
        "vendor": "ร้านซ่อมรองเท้าหนัง",
        "start_date": "2026-08-02",
        "completion_date": "2026-08-04"
    },
    {
        "_id": ObjectId("689a00000000000000000062"),
        "product_id": ObjectId("689a00000000000000000022"), // Jimmy Choo Pumps
        "maintenance_type": "crystal_replacement",
        "cost": 650,
        "vendor": "ช่างซ่อมเครื่องประดับ",
        "start_date": "2026-07-30",
        "completion_date": "2026-08-01"
    },
    {
        "_id": ObjectId("689a00000000000000000063"),
        "product_id": ObjectId("689a00000000000000000023"), // Cartier Love Bracelet
        "maintenance_type": "polishing",
        "cost": 500,
        "vendor": "ร้านทำความสะอาดเครื่องประดับ",
        "start_date": "2026-08-08",
        "completion_date": "2026-08-09"
    },
    {
        "_id": ObjectId("689a00000000000000000064"),
        "product_id": ObjectId("689a00000000000000000024"), // Tiffany Necklace
        "maintenance_type": "cleaning",
        "cost": 350,
        "vendor": "ร้านทำความสะอาดเครื่องประดับ",
        "start_date": "2026-07-19",
        "completion_date": "2026-07-19"
    },
    {
        "_id": ObjectId("689a00000000000000000065"),
        "product_id": ObjectId("689a00000000000000000025"), // Bulgari Ring
        "maintenance_type": "prong_check",
        "cost": 400,
        "vendor": "ช่างอัญมณี certified",
        "start_date": "2026-08-10",
        "completion_date": "2026-08-11"
    },
    {
        "_id": ObjectId("689a00000000000000000066"),
        "product_id": ObjectId("689a00000000000000000026"), // Saint Laurent Jacket
        "maintenance_type": "dry_cleaning",
        "cost": 350,
        "vendor": "ร้านซักผ้าแบรนด์เนม",
        "start_date": "2026-07-14",
        "completion_date": "2026-07-15"
    },
    {
        "_id": ObjectId("689a00000000000000000067"),
        "product_id": ObjectId("689a00000000000000000027"), // Bottega Veneta Clutch
        "maintenance_type": "stitching_repair",
        "cost": 500,
        "vendor": "ช่างซ่อมกระเป๋าแบรนด์เนม",
        "start_date": "2026-08-06",
        "completion_date": "2026-08-08"
    },
    {
        "_id": ObjectId("689a00000000000000000068"),
        "product_id": ObjectId("689a00000000000000000011"), // Chanel Classic
        "maintenance_type": "hardware_check",
        "cost": 300,
        "vendor": "ศูนย์บริการ Chanel",
        "start_date": "2026-08-12",
        "completion_date": "2026-08-12"
    },
    {
        "_id": ObjectId("689a00000000000000000069"),
        "product_id": ObjectId("689a00000000000000000014"), // Louis Vuitton Neverfull
        "maintenance_type": "authentication_recheck",
        "cost": 800,
        "vendor": "ศูนย์ตรวจสอบของแท้ Bangkok Authentication",
        "start_date": "2026-08-15",
        "completion_date": "2026-08-17"
    },
    {
        "_id": ObjectId("689a00000000000000000070"),
        "product_id": ObjectId("689a00000000000000000020"), // Chanel Ballet Flats
        "maintenance_type": "insole_replacement",
        "cost": 250,
        "vendor": "ร้านซ่อมรองเท้าหนัง",
        "start_date": "2026-08-03",
        "completion_date": "2026-08-04"
    }
]);
