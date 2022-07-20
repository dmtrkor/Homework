// Получить модуль работы с базой данных
const Club = require('../models/clubs')

/**
 * Создать нового студента
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
    // Получили нового студента на сервере
    let bodyClub = request.body
    // Создали запись в базе даннх
    const newClub = new Club(bodyClub)

    // Сохранили запись в базе данных
    newClub.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newClub);
        }
    });


}

/**
 * Вернуть все клубы
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    Club.find({}, function(err, allClubs){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allClubs);
        }
    });
}

/**
 * Вернуть конкретный клуб
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {

    let findId = request.params.clubId

    Club.findById(findId, function(err, allClubs){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allClubs);
        }
    });
}

/**
 * Обновить конкретный клуб
 * Update (One) === PUT
 * @param request
 * @param response
 */
exports.update = function (request, response) {
    let findId = request.params.clubId
    let upClub = request.body

    Club.findByIdAndUpdate(findId, upClub, function (err, newClub) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Update Ok')
            return response.sendStatus(204);
        }
    })
    
}

/**
 * Удалить конкретный клуб
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    let findId = request.params.clubId
    console.log('Delete:' + findId)

    Club.findByIdAndDelete(findId, function(err){

        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Del Ok')
            return response.sendStatus(200);
        }
    });
}
