import { useEffect, useState } from "react";

const Test = ({name}) => {
    // let count = 10;
    const [count, setCount] = useState(100);
    const handelClick = () => {
        setCount(count + 1)
        console.log("Count: ", count);
    }

    // useEffect(()=>{
    //     console.log('Every time run');
    // })
    useEffect(()=>{
        console.log('First time run');
    }, [])
    useEffect(()=>{
        console.log('Update time run');
    }, [count])

    return (
        <div>
            <h1>Hello, {name}</h1>
            <h2>count: {count}</h2>
            <button onClick={handelClick}>Increment</button>
        </div>
    )
}

export default Test;