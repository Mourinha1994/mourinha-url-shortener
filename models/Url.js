const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.Now }
});

module.exports = mongoose.Model('Url', UrlSchema);