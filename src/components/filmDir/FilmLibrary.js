import React from "react"
import AddFilm from "./AddFilm";
import Film from "./Film";




class FilmLibrary extends React.Component {

    /**
     * Настройка моего компонента
     * Практически обязательный участок кода, в котором мы описываем, что в компоненте будет.
     * Особое внимание к this.state
     * @param props - то, что приходит снаружи - даже если мы ничего не ждем - мы фиксируем передачу
     */
    constructor(props) {
        super(props);

        this.state = {
            search: '', // Для поиска
            oldContacts: null, // Для сохранения старой коллекции
            films: []
        }

    }

    /**
     * Сохраняет коллекцию в локальное хранилище
     */
    saveToLS(){
        localStorage.setItem("filmLibrary", JSON.stringify(this.state.films))
    }


    /**
     * Читает коллекцию из хранилища
     */
    loadFromLS(){
        const oldState = this.state // Получаю состояние хранилища компонента
        if(localStorage.getItem("filmLibrary")) // Если в локальном хранилище есть данные
            oldState.films = JSON.parse(localStorage.getItem("filmLibrary")); // получаю их
        else
            oldState.films = [] // Если данных нет - оставляю пустым
        this.setState(oldState) // Обновляю хранилище компонента
    }

    /**
     * (С) - Create
     * Метод, который отвечает за помещение нового фильма в библиотеку
     * @param newFilm - новый фильм
     */
    create(newFilm) {
        let newEl = {
            id: Date.now(), // + "_" + Math.random(),
            name: newFilm.name,
            imgUrl: newFilm.imgUrl,
            des: newFilm.des,

        }
        const oldState = this.state
        oldState.films.push(newEl)
        this.setState(oldState)
        console.log(this.state.films)

    }

    /**
     * (U) Update
     * Ищет в коллекции элемент с нужным нам id и обновляет информацию в нем
     * @param id
     * @param newData
     */
    update(id, newData){
        const oldState = this.state
        oldState.films[oldState.films.findIndex(el=> el.id === id)] = {
            id: id,
            name: newData.name,
            imgUrl: newData.imgUrl,
            des: newData.des
        }
        this.setState(oldState)
    }


    /**
     * Удаление элемента по его Id
     * @param contactId - Id записи
     */
    deleteById(filmId){
        const oldState = this.state
        let index = oldState.films.findIndex(c=> c.id === filmId)
        console.log(index)
        oldState.films.splice( index, 1)
        this.setState(oldState)
    }


    /**
     * Эелемнт, в котором в атрибуте data-id зафиксирован Id записи
     * @param el - tag с data-id
     */
    deleteByEl(el){
        let id = el.target.getAttribute('data-id')
        console.log(id)
        this.deleteById(id)
    }

    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }



    /**
     * Заргузка в коллекцию демо данные.
     * Такой метод позволяет другим разработчикам понять, какие поля вы используете
     */
    loadSimpleData(){

        let film = {
            id: Date.now()  + "_" +  Math.random(),
            name: "Имя",
            imgUrl: "Ссылка на картинку",
            des: "Описание к фильму"
        }

        const oldState = this.state // Взять старый стейт (мы не знаем что там храниться - но хотим оставить)
        oldState.films = [film] // Поместим в библиотеку массив (коллекцию) с 1 фильмом
        this.setState(oldState) // Поместим стейт обратно
    }


    search(){
        let search = this.state.search
        console.log(search)
        const oldState = this.state
        if(search.length > 0) { // Обозначает что надо что то искать
            if (oldState.oldFilms === null ) {
                oldState.oldFilms = oldState.films
            }
            oldState.films = []
            oldState.oldFilms.map( c=> {
                if (c.name.includes(this.state.search) || c.imgUrl.includes(this.state.search))
                    oldState.films.push(c)
            })
            if(!oldState.films) oldState.films = []
            console.log(oldState.films)

        } else {
            if (oldState.oldFilms !== null ) {
                oldState.films = oldState.oldFilms // Если я что то сохранял
                oldState.oldFilms = null // востановлю на место и сотру старое
            }
        }
        console.log('Назад ставлю массив')
        this.setState(oldState)
    }



    /**
     * (R) Read - он как бы читает и выводит данные
     * Участок кода, который отвечает за построение компонента на странице
     * Обязательный для того, что бы компонент вообще назывался компонентом
     * @returns {JSX.Element}
     */
    render() {
        return (
            <>
                <div>
                    <button onClick={this.loadFromLS.bind(this)}> Load </button>
                    <button onClick={this.saveToLS.bind(this)}> Save </button>
                    <button onClick={this.loadSimpleData.bind(this)}> Simple </button>
                    <AddFilm save={this.create.bind(this)}></AddFilm>
                    <input type="text" name="search" onChange={this.onChange.bind(this)}  />
                    <button onClick={this.search.bind(this)}> Search </button>
                </div>

                <ul>

                    {
                        this.state.films.map(film => (
                            <Film  key={film.id} film={film}
                                      update={this.update.bind(this)}
                                      delete={this.deleteByEl.bind(this)}></Film>
                        ))
                    }
                </ul>
            </>
        )
    }


}
export default FilmLibrary
