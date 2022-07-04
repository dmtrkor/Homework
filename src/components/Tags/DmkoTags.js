import React from "react";
import DmkoTagAdd from "./DmkoTagAdd";


class DmkoTags  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []

        }
    }
    getDataFromServer(){
        this.setState({
            data : [
                {id : 1, name: "Asp"},
                {id : 2, name: "Php"},
                {id : 3, name: 'C#'},
                {id : 4, name: 'C++'},
                {id : 5, name: "Html"},
                {id : 6, name: 'Css'}
            ],

            isLoaded: true
        })
    }


    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(this.getDataFromServer.bind(this), 3000)

    }

    render(){
        if (this.state.error){
            return this.renderError()
        }
        if (!this.state.isLoaded){
            return this.renderPreload()
        }
        return this.renderData()
    }
    renderData() {
        return (
            <>
            <ul>
                {
                    this.state.data.map( tag =>(
                            <li key={tag.id}>{tag.name}</li>
                        ))
                }
                <DmkoTagAdd></DmkoTagAdd>
            </ul>
            </>
        )
    }
    renderError(){
        return(
        <div>
            <h3>ERROR!!!</h3>
            <div>{this.state.error}</div>
        </div>)
    }
    renderPreload(){
        return(
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

}
export default DmkoTags