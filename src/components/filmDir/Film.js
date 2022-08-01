import React from "react"

class Film extends React.Component {

    /**
     * Конструктор для того, что бы описать флаг редактирования
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            film: props.film, // сохранить пользователя
            isEdit: false // флаг, который будет переводить систему в режим редактирования
        }
        this.onChange = this.onChange.bind(this)
    }



    /**
     * Читает данные с полей input и сохраняет их в стейте
     * @param e
     */
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }

    /**
     * Выводит данные в формочке - удобной для редактирования
     * @returns {JSX.Element}
     */
    renderForm(){
        return (
            <>
                <div>
                  <label> Name:  <input type="text" name="name" value={this.state.name} onChange={this.onChange} /> </label>
                  <label>imgUrl:  <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.onChange} /> </label>
                   <label>Description: <input type="text" name="des" value={this.state.des} onChange={this.onChange} /> </label>
                   <button onClick={this.stopEdit.bind(this)}>Cancel</button>
                   <button onClick={this.save.bind(this)}>Save</button>
                </div>
            </>
        )
    }

    /**
     * Убирает флаг редактирования - что приводит к выводу только данных
     */
    stopEdit(){
        const oldState = this.state
        oldState.isEdit = false
        this.setState(oldState)
    }

    /**
     * Готовит новй объект и передает его на обновление в главный компонент
     */
    save(){
        this.props.update(this.props.film.id, {
            name: this.state.name,
            imgUrl: this.state.imgUrl,
            des: this.state.des
        })
        this.stopEdit()
    }

    /**
     * Устанавливает флаг - отображать в режиме редактирования
     * А так же переносит значения полей из пропсов в стейт
     */
    startEdit(){
        const oldState = this.state
        oldState.isEdit = true
        oldState.name = this.props.film.name
        oldState.imgUrl = this.props.film.imgUrl
        oldState.des = this.props.film.des
        this.setState(oldState)
    }

    /**
     * Вывод информации о записи в телефонной книге
     * @returns {JSX.Element}
     */
    renderInfo(){
        return (
            <li>
                <img src={this.props.film.imgUrl} alt='alt' />
                <p>{this.props.film.name}</p>
                <p>{this.props.film.des}</p>
                <button onClick={this.startEdit.bind(this)}>Edit</button>
                <button data-id={this.props.film.id} onClick={this.props.delete.bind(this)}>del</button>
            </li>



        )
    }


    /**
     * Выводит или форму для воода данных, или информацию о контакте
     * @returns {JSX.Element}
     */
    render() {
        if(this.state.isEdit) return this.renderForm()
        else return this.renderInfo()
    }
}

export default Film