import React,{useState} from 'react'

const  HookCounterFour = () => {
    const [items,setItems] = useState([1,2,3,4])

    const onHandle = () =>{
        setItems([...items,
            {id:items.length,
            value:Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div>
        <button onClick={onHandle}>onClick</button>
        {items.map(item => (
            <li key={item.id}>{item.value}

            </li>
        ))}
    </div>
  )
}

export default HookCounterFour;