import React from 'react';

// class OutputList extends Component{
//     render(){
//         const { list } = this.props;
//         const studentList = list.map(record => {
//             return(
//                 <div key={record.id}>
//                     <div>Name: {record.name}</div>
//                     <div>Age: {record.age}</div>
//                     <div>Color: {record.color}</div>
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 { studentList }
//             </div>
//         )
//     }
// }

// functional component or stateless component
const OutputList = ({list}) => { 
    const studentList = list.map(record => {
        return(
            <div key={record.id}>
                <div>Name: {record.name}</div>
                <div>Age: {record.age}</div>
                <div>Color: {record.color}</div>
            </div>
        )
    })
    return (
        <div>
            { studentList }
        </div>
    )
}
