import React from "react";

class DmkoTagAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newTagName: '',
            help: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }
    render() {
        return(

            <>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#DmkoTagAdd">
                    Add New Tag
                </button>
                <div className="modal fade" id="DmkoTagAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> NewTag: <input type="text" name="newTagName" onChange={this.onChange}/></label>
                                <button> Add </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default DmkoTagAdd