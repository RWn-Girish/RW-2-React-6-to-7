import { useCallback, useState } from "react";
import ButtonComp from "./Button";
import External from "./External";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const handelInc = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    const handelDec = useCallback(() => {
        setCount(prev => prev - 1)
    }, [])

    return (
        <>
        <External />
        <h2>Counter App : {count}</h2>
        <ButtonComp name="Increment"  handelClick={handelInc} /> &nbsp;
        <ButtonComp name="Decrement" handelClick={handelDec} />
        </>
    )
}

export default UseCallback;