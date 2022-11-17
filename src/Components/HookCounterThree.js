import React,{useState} from 'react';

const HookCounterThree = () =>{

    const [name,setName] = useState({
        firstname:'',
        lastname:''
    });

   const onChangefirstName = (e) => {
    setName(
        {...name, firstname:e.target.value}
    )
   }

   const lastnameChange = (e) =>{
    setName(
        {...name, lastname:e.target.value}
    )
   }
    return(
        <div>
            <input type="text" value={name.firstname} onChange={onChangefirstName}/>
            <input type="text" value={name.lastname} onChange={lastnameChange}/>

            <p>Your first name is :{name.firstname}</p>
            <p>Your lastname name is :{name.lastname}</p>
        </div>
    )
}
export default HookCounterThree;