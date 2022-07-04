import React from "react";

import DmkoInputPassword from "../../../UI/Forms/Input/DmkoInputPassword";
import DmkoInputSubmit from "../../../UI/Forms/Input/DmkoInputSubmit";
import DmkoInputEmail from "../../../UI/Forms/Input/DmkoInputEmail";

class FormSignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: [],
            p: '',
            pc: ''
        }
    }
    onPasswordChange(ev){
        let oldState = this.state;
        oldState.p = ev.target.value;
        this.setState(oldState)
        this.validate()
    }
    onPasswordConfirm(ev){
        let oldState = this.state;
        oldState.pc = ev.target.value;
        this.setState(oldState)
        this.validate()
    }
    validate(){
        let err = []
        if (this.state.p !== this.state.pc) {
            err.push('Passwords do not match')
        }
            let oldState = this.state
            if(err.length > 0){
                oldState.isValid = false
            } else {
                oldState.isValid = true
            }
            oldState.err = err
            this.setState(oldState)

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
        return(
            <>
                <DmkoInputEmail label="Enter email"></DmkoInputEmail>
                <DmkoInputPassword label="Password" onChange={this.onPasswordChange.bind(this)}></DmkoInputPassword>
                <DmkoInputPassword label="Repeat Password" onChange={this.onPasswordConfirm.bind(this)}></DmkoInputPassword>
                {err}
                <DmkoInputSubmit></DmkoInputSubmit>
            </>
        )
    }
}
export default FormSignUp