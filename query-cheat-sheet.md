# MongoDB Cheat Sheet


## 📁 Contents

- [Database](#-database)
- [Collection](#-collection)
- [Insert](#-insert-เพิ่มข้อมูล)
- [Query / Find](#-query--find-ค้นหาข้อมูล)
- [Sort, Limit, Count](#-sort-limit-count)
- [Update](#-update-แก้ไขข้อมูล)
- [Delete](#-delete-ลบข้อมูล)
- [Operators](#-operators)
- [Index & Text Search](#-index--text-search)
- [Sub-Document / Array](#-sub-document--array)

---

## 🗄️ Database

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `show dbs` | แสดงฐานข้อมูลทั้งหมด |
| `db` | แสดงฐานข้อมูลปัจจุบัน |
| `use acme` | สร้างหรือสลับไปใช้ db ชื่อ `acme` |
| `db.dropDatabase()` | ลบฐานข้อมูลปัจจุบัน |

---

## 📦 Collection

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.createCollection('posts')` | สร้าง collection ชื่อ `posts` |
| `show collections` | แสดง collection ทั้งหมด |

---

## ✏️ Insert (เพิ่มข้อมูล)

### เพิ่มเอกสารเดียว

```javascript
db.posts.insertOne({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

### เพิ่มหลายเอกสาร

```javascript
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

---

## 🔍 Query / Find (ค้นหาข้อมูล)

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.posts.find()` | ดึงข้อมูลทั้งหมด |
| `db.posts.find().pretty()` | ดึงทั้งหมด แสดงผลสวยงาม |
| `db.posts.findOne({ category: 'News' })` | ดึงแค่ตัวแรกที่ตรงเงื่อนไข |
| `db.posts.find({ category: 'News' })` | ดึงเฉพาะที่ `category` เป็น 'News' |
| `db.posts.find({ title: 'Post One' }, { title: 1, author: 1 })` | ดึงเฉพาะ field `title` และ `author` |

### foreach

```javascript
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

---

## 📊 Sort, Limit, Count

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.posts.find().sort({ title: 1 }).pretty()` | เรียงจากน้อยไปมาก (A→Z) |
| `db.posts.find().sort({ title: -1 }).pretty()` | เรียงจากมากไปน้อย (Z→A) |
| `db.posts.find().limit(2).pretty()` | จำกัดผลลัพธ์ 2 รายการ |
| `db.posts.find().limit(2).sort({ title: 1 }).pretty()` | จำกัด + เรียง |
| `db.posts.find().count()` | นับจำนวนทั้งหมด |
| `db.posts.find({ category: 'news' }).count()` | นับเฉพาะที่ตรงเงื่อนไข |

---

## ✏️ Update (แก้ไขข้อมูล)

### อัปเดตแบบเดิม (replace ทั้งเอกสาร)

```javascript
db.posts.update(
  { title: 'Post Two' },
  {
    title: 'Post Two',
    body: 'New body for post 2',
    date: Date()
  },
  { upsert: true }
)
```

### อัปเดตเฉพาะ field ด้วย `$set`

```javascript
db.posts.update(
  { title: 'Post Two' },
  { $set: { body: 'Body for post 2', category: 'Technology' } }
)
```

### เพิ่มค่า num ด้วย `$inc`

```javascript
db.posts.update(
  { title: 'Post Two' },
  { $inc: { likes: 5 } }
)
```

### เปลี่ยนชื่อ field ด้วย `$rename`

```javascript
db.posts.update(
  { title: 'Post Two' },
  { $rename: { likes: 'views' } }
)
```

### updateOne / updateMany (Highly Recommend)

```javascript
db.posts.updateOne(
  { title: 'Post One' },
  { $set: { body: 'Updated body' }, $unset: { category: '' } }
)

db.posts.updateMany(
  { category: 'News' },
  { $set: { category: 'Updated News' } }
)
```

---

## ❌ Delete Data

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.posts.remove({ title: 'Post Four' })` | ลบที่ตรงเงื่อนไข |
| `db.posts.deleteOne({ title: 'Post Four' })` | ลบแค่ตัวแรกที่ตรง (แนะนำ) |
| `db.posts.deleteMany({ category: 'Entertainment' })` | ลบทั้งหมดที่ตรง (แนะนำ) |

---

## ⚙️ Operators

### Comparison

| Operator | ความหมาย | ตัวอย่าง |
|----------|----------|----------|
| `$gt` | มากกว่า | `db.posts.find({ views: { $gt: 2 } })` |
| `$gte` | มากกว่าหรือเท่ากับ | `db.posts.find({ views: { $gte: 7 } })` |
| `$lt` | น้อยกว่า | `db.posts.find({ views: { $lt: 7 } })` |
| `$lte` | น้อยกว่าหรือเท่ากับ | `db.posts.find({ views: { $lte: 7 } })` |
| `$ne` | ไม่เท่ากับ | `db.posts.find({ category: { $ne: "News" } })` |
| `$in` | อยู่ในรายการ | `db.posts.find({ category: { $in: ["News", "Technology"] } })` |
| `$nin` | ไม่อยู่ในรายการ | `db.posts.find({ category: { $nin: ["News", "Technology"] } })` |

### Logical

| Operator | ความหมาย | ตัวอย่าง |
|----------|----------|----------|
| `$and` | และ (ทุกเงื่อนไขเป็นจริง) | `db.posts.find({ $and: [ { category: "News" }, { "user.name": "John Doe" } ] })` |
| `$or` | หรือ (อย่างน้อย 1 เงื่อนไข) | `db.posts.find({ $or: [ { category: "News" }, { category: "Technology" } ] })` |
| `$nor` | ไม่ตรงเลยสักเงื่อนไข | `db.posts.find({ $nor: [ { category: "News" }, { category: "Technology" } ] })` |
| `$not` | นิเสธของเงื่อนไข | `db.posts.find({ views: { $not: { $lte: 100 } } })` |

---

## 📑 Index & Text Search

```javascript
// สร้าง text index
db.posts.createIndex({ title: 'text' })

// ค้นหาข้อความ
db.posts.find({ $text: { $search: "\"Post O\"" } })

// ดู index ทั้งหมด
db.posts.getIndexes()

// ลบ index
db.posts.dropIndex({ title: 1 })
```

---

## 👨‍👩‍👧‍👦 Sub-Document / Array

### เพิ่ม sub-document

```javascript
db.posts.update(
  { title: 'Post One' },
  {
    $set: {
      comments: [
        { body: 'Comment One', user: 'Mary Williams', date: Date() },
        { body: 'Comment Two', user: 'Harry White', date: Date() }
      ]
    }
  }
)
```

### ค้นหาด้วย `$elemMatch`

```javascript
db.posts.find({
  comments: { $elemMatch: { user: 'Mary Williams' } }
})
```

---

> 💡 **Tip:** ใน MongoDB เวอร์ชันใหม่ ๆ แนะนำให้ใช้ `insertOne`, `insertMany`, `updateOne`, `updateMany`, `deleteOne`, `deleteMany` แทน `insert`, `update`, `remove` แบบเก่า
