import React,{useState} from 'react';

const HookCounterTwo = () =>{
    const intialValue=0;
    const [count,setCount] = useState(intialValue);
    const [normal, setNormal] = useState(false);
    const [previous, setPrevious] = useState(false);
    
    const normalUpdate = () =>{
        setNormal(true);
        setPrevious(false);
    }

    const previousUpdate = () =>{
        setNormal(false);
        setPrevious(true);
    }
    const incermentFive = () =>{
        for(let i =0;i <5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            {/* <button onClick={() => setCount(count + 1)}>onclick{count}</button> */}
            <button onClick={normalUpdate}>Normal update value</button>
            <button onClick={previousUpdate}>Previous update value</button>

            {normal && (
                <>
                    <p>Normal update value</p>
                    <p> Count: {count}</p>
                    <button onClick={() => setCount(intialValue)}>Reset</button>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                </>
            )}

           {previous && (
            <>
                <p>previous updated value </p>
                <p> Count: {count}</p>
                <button onClick={() => setCount(intialValue)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
                <button onClick={incermentFive}>Increment 5</button>

            </>
           )}
        </div>
    )
}
export default HookCounterTwo;