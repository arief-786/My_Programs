import React,{useState} from 'react'

function ArrayOfObjects() {
    const [employees,setEmployees] = useState(
        [
            {id:1, Name:"Arief"},
            {id:2, Name:"Eshan"},
            {id:3, Name:"Ram"},  
        ])
    const onChangeData = () =>{
       const newData = {id:4,Name:"Ramu"}
       const arr = employees.concat(newData)
       setEmployees(arr)
    }
  return (
    <div>
       
            <ul>{
                employees.map(employe =>(
                    <li key={employe.id}>{employe.Name}</li>
                ))
            }
            </ul>
            <button onClick={onChangeData}>Add</button>
    </div>
  );
};

export default ArrayOfObjects;