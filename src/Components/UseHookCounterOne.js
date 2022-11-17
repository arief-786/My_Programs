import React,{useState,useEffect} from 'react'

function UseHookCounterOne() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("")
    useEffect(() =>{
        document.title = `You clicked ${count}`
        console.log('useeffect - updating document title ');
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>onclick:{count}</button>
    </div>
  )
}

export default UseHookCounterOne