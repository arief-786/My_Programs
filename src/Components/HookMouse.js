import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = e =>{
        console.log('Mouse event');
        setX(e.ClientX)
        setY(e.ClientY)
    }
    useEffect(() =>{
        console.log('Useeffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () =>{
            console.log('Component Unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[])
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse