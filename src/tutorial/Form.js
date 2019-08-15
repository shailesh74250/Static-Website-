import React, { Component } from 'react';

export default class Form extends Component{
    state = {
        user_name:null,
        email_id:null,
        phone_number:null,
        message:null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">User Name:</label>
                    <input type="text" id="user_name" onChange={this.handleChange} />
                    <label htmlFor="email_id">Email:</label>
                    <input type="email" id="email_id" onChange={this.handleChange} />
                    <label htmlFor="phone_number">Mobile:</label>
                    <input type="text" id="phone_number" onChange={this.handleChange} />
                    <label htmlFor="message">Message:</label>
                    {/* <input type="text" id="belt" onChange={this.handleChange} /> */}
                    <textarea type="textarea" id="message" onChange={this.handleChange} /> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
