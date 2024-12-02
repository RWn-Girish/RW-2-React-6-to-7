import { useState } from "react";


const Event = () => {

    const [list, setList] = useState(false);
    const handelEnter = (name)=> {
        console.log('Mouse Enter....');
        console.log('Name : ', name);
    }
    const handelLeave = ()=> {
        console.log('Mouse Leave....');
    }
    const handelClick  = () =>{
        setList(!list)
    }
    return (
        <div>
               {/* <h1 onMouseEnter={()=>handelEnter('John')} onMouseLeave={handelLeave}>Mouse Over Event</h1> */}
               <button onClick={handelClick}>Change Now</button>
               <h1 style={{color: list ? "red" : "black"}} >React JS Learning</h1>
               {list ? 
                    <div>
                        
                        <p>Batch Time: 6 to 7</p>
                    </div> 
                : ""}
        </div>
    )
}

export default Event;
