import React from "react";



class DmkoInputEmail  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }
    onChange(ev){
        this.checkValid(ev)
        if ((this.props.onChange)){
            this.props.onChange(ev)
        }
    }

    checkValid(ev){
        let email = ev.target.value
        let err = []
       // let isNum = /\d{1,}/
        let isUpper = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
      //  let isLower = /.*[a-z]*./
        if (email.length < 8){
            err.push('Short email')
        }
        if(!isUpper.test(email)){
            err.push('Includes latin alphabet')
        }
        let oldState = this.state
        if(err.length > 0){
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        console.log(err)
    }
    render() {
        let  err = ''
        if(!this.state.isValid){
            err = (
                <ul>
                    {this.state.err.map( e =>{
                        return (  <li> {e} </li>
                        ) })}
                </ul>
            )
        }
        let  label = ''
        if (this.props.label){
            label = (<label>{this.props.label}</label>)
        }
        return(
            <div>
                {label}
                                  <input type="email" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}

export default DmkoInputEmail