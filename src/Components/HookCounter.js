import React,{useState} from 'react';

const HookCounter = () =>{

    const [count,setCount] = useState(0);
    const onChangeData = () =>{
        setCount(count + 1)
    }
    return(
        <div>
            {/* <button onClick={() => setCount(count + 1)}>onclick{count}</button> */}
            <button onClick={onChangeData}>onclick{count}</button>
        </div>
    )
}
export default HookCounter;