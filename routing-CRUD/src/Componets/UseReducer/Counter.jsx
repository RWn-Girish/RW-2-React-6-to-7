import { useReducer, useState } from "react";
import { Button } from "react-bootstrap"
import { myReducer } from "./reducer";

const Counter = () => {

    const user = {
        name: "John Peter",
        count: 0
    }
    // const [count, setCount] = useState(0)
    const [data, dispatch] = useReducer(myReducer, user)

    const handelInc = () =>{
        dispatch({
            type: "INCREMENT"
        })
    }

    const handelDec = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    return (
        <>
            <h3>{data.name}</h3>
            <h2>Counter App: {data.count}</h2>
            <Button onClick={handelInc}>Increment</Button>
            <Button variant="danger" onClick={handelDec}>Decrement</Button>
        </>
    )
}

export default Counter;