let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cClub = require('../controllers/ClubController')

// Создать новую запись
// Create === POST
router.post('/', cClub.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cClub.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:clubId', cClub.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:clubId', cClub.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:clubId', cClub.delete)


module.exports = router;