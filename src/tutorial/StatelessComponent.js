/*
    * Container vs UI Components
    * Container Componets
        * contain state
        * contain lifecycle hooks
        * not concerned with UI
        * Use classes to create
    * UI components
        * Don't contain state
        * Receive data from props
        * Only concerned with UI
        * Use functions to create  
*/

//  example below
// const OutputList = ({list}) => { 
//     const studentList = list.map(record => {
//         return(
//             <div key={record.id}>
//                 <div>Name: {record.name}</div>
//                 <div>Age: {record.age}</div>
//                 <div>Color: {record.color}</div>
//             </div>
//         )
//     })
//     return (
//         <div>
//             { studentList }
//         </div>
//     )
// }
