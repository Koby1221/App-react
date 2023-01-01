import React ,{ Component } from 'react';



class Myinput extends Component{
    state={user:"klain"}
    userinput=React.createRef()

    changename=() =>{
        this.setState({user:this.userinput.current.value})
    }
    
    render(){
        return(
            <div>
                <h1>welcome {this.state.user}</h1>
                <h2>enter your name</h2>
                <input ref={this.userinput} type="text" defaultValue="kobi"/>
                <button onClick={this.changename}>change name</button>
            </div>
        )
    }
}

export default  Myinput