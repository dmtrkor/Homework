import React from "react";

class AddFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imgUrl: '',
            des: '',
            isEdit: false
        }
        this.onChange = this.onChange.bind(this) // Разрешить методу доступ к классу
    }


    /**
     * Динапический перенос данных в стейт
     * @param e
     */
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)

    }

    /**
     * Метод, который передаст информацию в главный компонент
     */
    onSave(){
        this.props.save(this.state);
    }


    render() {
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFilm">
                    Add New Film
                </button>

                <div className="modal fade" id="addFilm" tabIndex="-1" aria-labelledby="AddFilmModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="AddFilmModalLabel">Add Film</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> Name: <input type="text" name="name" onChange={this.onChange}/></label>
                                <label> imgUrl: <input type="text" name="imgUrl" onChange={this.onChange}/></label>
                                <label> Description: <input type="text" name="des" onChange={this.onChange}/></label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button  onClick={this.onSave.bind(this)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default AddFilm