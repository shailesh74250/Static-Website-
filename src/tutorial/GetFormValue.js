import React, {Component} from 'react';
import Form from './Form';
import axios from 'axios';


class GetFormValue extends Component{
    state = {
        user_inquery: {
            user_name:null,
            email_id:null,
            phone_number:null,
            message:null
        },
        ninjas:[
            {name: 'abc', age:30, belt:'black', id:1},
            {name: 'xyz', age:35, belt:'green', id:2}
        ]
    }
    componentDidMount(){
        console.log('component mounted');
    }
    // this will call each time when new state or new props gonna be recevice by component
    componentDidUpdate(prevProps, prevState){
        console.log('component updated');
        console.log(prevProps, prevState);
    }
    addNinja = (item) => {
        console.log(item);
        //item.id = Math.random();
        let updatedinfo = [...this.state.user_inquery, item];
        this.setState({
            user_inquery:updatedinfo
        })
        //this.sendMail();

        let formData = new FormData()  
        formData.set('user_name', item.user_name);
        formData.set('email_id', item.email_id);
        formData.set('phone_number', item.phone_number);
        formData.set('message', item.message);
        try {
            axios.post('https://dev.farmstock.in/api/v1/contact-us',
            formData, {
                headers:{
                    'content-type': 'application/json'
                }
            }).then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        
        //     console.log('Returned data:', response);
        } catch (e) {
            console.log(`Axios request failed: ${e}`);
        }
    }
    // this function we can pass to a component as props and then call from component like - 
    // onClick={()=>{deleteNinja(ninja.id)}}  it call only when button gonna click
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninjs =>{
            return ninjas.id !== id
        });
        this.setState({
            ninjas: ninjas
        })
    }
    render(){
        return(
            <div>
                {/* passing function addNinja as a props */}
                <Form addNinja={this.addNinja} />
            </div>
        )
    }
}

export default GetFormValue;