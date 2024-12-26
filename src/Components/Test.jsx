import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Test = ({name}) => {
    // let count = 10;

    const navigate = useNavigate();
    const [count, setCount] = useState(100);
    const handelClick = () => {
        setCount(count + 1)
        console.log("Count: ", count);
        navigate("/about");
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