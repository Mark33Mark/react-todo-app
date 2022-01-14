
import React, { Component } from "react";

class InputTodo extends Component {
    
    state = {
        title: "",
    };

    handleSubmit = e => {
        e.preventDefault()
            if(this.state.title.trim()) {
                this.props.addTodoProps(this.state.title)
                this.setState({
                title: "",
                })
            }else{
                alert("Sorry, I can't create a to-do unless you type in one.")
        }
    }
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
        <form
            onSubmit={this.handleSubmit}
            className="form-container"
        >
            <input 
                type="text" 
                className="input-text"
                placeholder="Add todo..." 
                value={this.state.title} 
                name="title"
                onChange={this.onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
        )
    }
}
export default InputTodo