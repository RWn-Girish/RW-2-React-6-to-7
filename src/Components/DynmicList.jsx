import { useRef } from "react";


const DynamicList = ({list}) =>{
    const test = useRef()
    const test1 = useRef();

    const handelClick = () => {
        test.current.style.color = "Red"
        console.log(test1.current.value)
        // console.log(test.current.innerHTML);
    }
    return (
        <>
            <h2 ref={test}>Dynmic Component</h2>
            <input type="text" name="firstname" placeholder="Enter name" ref={test1} />
            <button onClick={handelClick}>Give Ref</button>
            {
                list.map((val, index)=>(
                   <li key={val}>{val}</li> 
                ))
            }
        </>
    )
};

export default DynamicList;