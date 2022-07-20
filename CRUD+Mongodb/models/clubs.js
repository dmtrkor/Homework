// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const clubSchema = new mongoose.Schema({
    name: { type: String }, // Можно указывать так, если будут расширенные параметры
    score: Number // Необходимое и достаточное описание
});

module.exports = mongoose.model("clubs", clubSchema);