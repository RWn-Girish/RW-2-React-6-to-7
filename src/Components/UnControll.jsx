import { useRef } from "react";
import { useNavigate } from "react-router";


const UnControll = () => {
    const navigate = useNavigate();
    const fname = useRef();
    const emailRef = useRef();

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("First Name: ",fname.current.value);
        console.log("Email : ",emailRef.current.value);
    }
    return (
        <>
            <h3>UnControll Component</h3>
            <button onClick={()=>navigate(`/contact/${fname.current.value}`)}>Contact</button>
            <form onSubmit={handelSubmit}>
            <table border={1}>
                <tr>
                    <td>Firstname:</td>
                    <td><input type="text" placeholder="Enter Name"  ref={fname} /></td>
                </tr>
                <tr>
                    <td>email:</td>
                    <td><input type="text" placeholder="Enter Email"  ref={emailRef} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Submit</button></td>
                </tr>
                
            </table>
            </form>
        </>
    )
};

export default UnControll;