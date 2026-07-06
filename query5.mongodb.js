
// Exercise 5

use("sample_mflix");

// What are top 5 runtime movies?
db.movies.find().sort({ runtime: -1 }).limit(5)

// What are top 5 runtime movies that less than 60 minutes?
db.movies.find({ runtime: {$lte: 60}}).sort({ runtime: -1 }).limit(5)

// I was born in 1955, which 3 movies should i watch in next 10 years?
db.movies.find({ year: {$gt: 1955, $lt: 1965}}).sort({ year: 1 }).limit(3)

// How many movies were released during 1990 - 2000?
db.movies.find({ released: { $gt: ISODate("1990-01-01T00:00:00Z"), $lte: ISODate("2001-01-01T00:00:00Z") }}).count()