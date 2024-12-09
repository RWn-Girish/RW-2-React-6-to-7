import { useState } from "react";

const ValidationForm = () => {

const initalState = {
    fname : "",
    lname: "",
    email : "",
    password: "",
    phoneNo: ""
}
const [inputForm, setInputForm] = useState(initalState);

const [errors, setErrors] = useState({});

const handelChaged = (e) => {
    const {name, value} = e.target;
    setInputForm({...inputForm, [name]: value})
}

const validation = () => {
    let formError = {};
    if(inputForm.fname === ""){
        formError.fname = "* First name is Requried"
    }else{
        if(inputForm.fname.length < 3){
            formError.fname = "* First name Minimum 3 character required"
        }
    }
    if(inputForm.lname === ""){
        formError.lname = "* Last name is Requried"
    }

    if(inputForm.email === "") {
        formError.email = "* Email is Requried"
    }else{
        let pattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(pattern.test(inputForm.email)){
            formError.email = "* Email Formated providing"
        }
    }
    if(inputForm.password === "") {
        formError.password = "* password is Requried"
    }
    if(inputForm.phoneNo === "") {
        formError.phoneNo = "* Phone Number is Requried"
    }

    setErrors(formError);
    if(Object.keys(formError).length > 0){
        return false;
    }else{
        return true;
    }
}


const handelSubmit = (e) => {
    e.preventDefault();
    if(validation()){
        console.log("Form Submit ===> ", inputForm);
        setInputForm(initalState)
    }else{
        console.log('Form is not Submit');
    }
    
}

    return (
        <>
        <h2> Dynamic From </h2>
        <form onSubmit={handelSubmit}>
            <label>Firstname: </label>
            <input type="text" name="fname" value={inputForm.fname} onChange={handelChaged} onBlur={()=> {
                let err;
                if(inputForm.fname === ""){
                    err = "* First name is Requried"
                }else{
                    if(inputForm.fname.length < 3){
                        err = "* First name Minimum 3 character required"
                    }
                }
                setErrors({...errors, fname: err});
            }} />
            {errors.fname ? <i style={{color: errors.fname ? "Red" : ""}}>{errors.fname}</i> : ""}
            <br />
            <label>Lastname: </label>
            <input type="text" name="lname" value={inputForm.lname} onChange={handelChaged} />
            {errors.lname ? errors.lname : ""}
            <br />
            <label>Email: </label>
            <input type="text" name="email" value={inputForm.email} onChange={handelChaged} />
            <br />
            <label>Password: </label>
            <input type="password" name="password" value={inputForm.password} onChange={handelChaged} />
            <br />
            <label>Mobile No: </label>
            <input type="number" name="phoneNo" value={inputForm.phoneNo} onChange={handelChaged} />
            <br />
            <button type="submit">Register Now</button>
        </form>
        </>
    )
};

export default ValidationForm;