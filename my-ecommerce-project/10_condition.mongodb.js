use("rental-project-db");

// Clear existing data
db.condition.deleteMany({});

// Insert mock data for condition collection
db.condition.insertMany([
    {
        "_id": ObjectId("689a00000000000000000041"),
        "rental_items_id": ObjectId("689a00000000000000000021"), // Chanel Classic
        "check_type": "before_rental",
        "condition_notes": "สภาพสมบูรณ์ ไม่มีรอย",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000042"),
        "rental_items_id": ObjectId("689a00000000000000000021"),
        "check_type": "after_return",
        "condition_notes": "มีรอยขีดข่วนเล็กน้อยที่มุมล่างซ้าย",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000043"),
        "rental_items_id": ObjectId("689a00000000000000000022"), // Chanel Handbag
        "check_type": "before_rental",
        "condition_notes": "สภาพดีมาก ไม่มีรอยขีดข่วน",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000044"),
        "rental_items_id": ObjectId("689a00000000000000000022"),
        "check_type": "after_return",
        "condition_notes": "สภาพดี ไม่มีความเสียหาย",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000045"),
        "rental_items_id": ObjectId("689a00000000000000000023"), // Fabrique Dress
        "check_type": "before_rental",
        "condition_notes": "ผ้าเรียบ ไม่มีคราบ",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000046"),
        "rental_items_id": ObjectId("689a00000000000000000024"), // LV Neverfull
        "check_type": "before_rental",
        "condition_notes": "สภาพสมบูรณ์ ซิปทำงานปกติ",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000047"),
        "rental_items_id": ObjectId("689a00000000000000000024"),
        "check_type": "after_return",
        "condition_notes": "มีรอยเปื้อนเล็กน้อยด้านใน ทำความสะอาดแล้ว",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000048"),
        "rental_items_id": ObjectId("689a00000000000000000025"), // Dior Lady Dior
        "check_type": "before_rental",
        "condition_notes": "สภาพดีมาก หูกระเป๋าไม่มีรอย",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000049"),
        "rental_items_id": ObjectId("689a00000000000000000026"), // Gucci GG Marmont
        "check_type": "before_rental",
        "condition_notes": "ผิวหนังเรียบ ไม่มีรอยถลอก",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000050"),
        "rental_items_id": ObjectId("689a00000000000000000026"),
        "check_type": "after_return",
        "condition_notes": "มีรอยขีดข่วนเล็กน้อยที่สายคล้อง",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000051"),
        "rental_items_id": ObjectId("689a00000000000000000027"), // Hermès Birkin
        "check_type": "before_rental",
        "condition_notes": "สภาพสมบูรณ์แบบ ไม่มีที่ติ",
        "photo_evidence": [],
        "checked_by": "manager"
    },
    {
        "_id": ObjectId("689a00000000000000000052"),
        "rental_items_id": ObjectId("689a00000000000000000028"), // Valentino Gown
        "check_type": "before_rental",
        "condition_notes": "ผ้าเรียบ ไม่มีรอยยับ",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000053"),
        "rental_items_id": ObjectId("689a00000000000000000029"), // Prada Jacket
        "check_type": "before_rental",
        "condition_notes": "สภาพดี ซิปกางทำงานปกติ",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000054"),
        "rental_items_id": ObjectId("689a00000000000000000029"),
        "check_type": "after_return",
        "condition_notes": "ไม่มีความเสียหาย สภาพดีเหมือนเดิม",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000055"),
        "rental_items_id": ObjectId("689a00000000000000000030"), // Chanel Ballet Flats
        "check_type": "before_rental",
        "condition_notes": "พื้นรองเท้าไม่มีรอยสึก",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000056"),
        "rental_items_id": ObjectId("689a00000000000000000031"), // Louboutin Pumps
        "check_type": "before_rental",
        "condition_notes": "พื้นแดงไม่มีรอยขีดข่วน ส้นเรียบร้อย",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000057"),
        "rental_items_id": ObjectId("689a00000000000000000032"), // Jimmy Choo Pumps
        "check_type": "before_rental",
        "condition_notes": "คริสตัลเรียงเรียบร้อย ไม่มีหลุด",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000058"),
        "rental_items_id": ObjectId("689a00000000000000000033"), // Cartier Love Bracelet
        "check_type": "before_rental",
        "condition_notes": "สภาพสมบูรณ์ สกรูทำงานปกติ",
        "photo_evidence": [],
        "checked_by": "manager"
    },
    {
        "_id": ObjectId("689a00000000000000000059"),
        "rental_items_id": ObjectId("689a00000000000000000034"), // Tiffany Necklace
        "check_type": "before_rental",
        "condition_notes": "โซ่ไม่มีรอย ตัวล็อกปกติ",
        "photo_evidence": [],
        "checked_by": "staff"
    },
    {
        "_id": ObjectId("689a00000000000000000060"),
        "rental_items_id": ObjectId("689a00000000000000000035"), // Bulgari Ring
        "check_type": "before_rental",
        "condition_notes": "เพชรไม่มีรอย ตัวเรือนเงางาม",
        "photo_evidence": [],
        "checked_by": "manager"
    }
]);