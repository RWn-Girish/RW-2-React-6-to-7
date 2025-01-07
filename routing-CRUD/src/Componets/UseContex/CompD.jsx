import { useContext } from "react";
import { UserContex } from "../../App";

const CompD = () => {
    const user = useContext(UserContex)
    return (
        <>
        <h2> Comp D</h2>
        <h3>Name : {user.name}</h3>
        </>
    )
};

export default CompD;