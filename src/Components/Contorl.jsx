import { useState } from "react";

const Control = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");

    const handelName = (e) => {
        // console.log(e);
        setFname(e.target.value)
    }

    const handelSubmit = (e) => {
            e.preventDefault();
            console.log("First name: ", fname);
            console.log("Email: ", email);

            setEmail("")
            setFname("")
    }

    return (
        <>
        <h2>Controll Component</h2>
        <form onSubmit={handelSubmit}>
            <table border={1}>
                <tr>
                    <td>Firstname:</td>
                    <td><input type="text" placeholder="Enter Name" value={fname} onChange={handelName} onBlur={()=>console.log('Blue Event...')} /></td>
                </tr>
                <tr>
                    <td>email:</td>
                    <td><input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Submit</button></td>
                </tr>
                
            </table>
        </form>
        </>
    )
} ;

export default Control;