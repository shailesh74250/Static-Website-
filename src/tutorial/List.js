import React, {Component} from 'react';

// import outputlist
import OutputList from './OutputList';
class List extends Component{
    state = {
        list:[
            {name:'abc', age:30, color:'black', id:1},
            {name:'xyz', age:25, color:'gree', id:2},
            {name:'pqr', age:33, color:'yellow', id:3}
        ]
    }
    render(){
        return(
            <div>
                <h1>list example</h1>
                <OutputList list={this.state.list} />
            </div>
        )
    }
}