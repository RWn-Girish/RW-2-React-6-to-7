import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebaseConfig";


const registerSuccess = () => {
    return {
        type: "REGISTER_SUC"
    }
}
const registerFailed = (msg) => {
    return {
        type: "REGISTER_REJ",
        payload: msg
    }
}

export const addNewUserAsync = (data) => {
    return async (dispatch) => {
        try {
            let newUser = await createUserWithEmailAndPassword(auth, data.email, data.password)
        // console.log(newUser)
        dispatch(registerSuccess())
        } catch (error) {
            if(error.code == "auth/email-already-in-use"){
                dispatch(registerFailed("Already Register, Please Login!!!"))
            }else
            dispatch(registerFailed(error.message))
        }
    }
}