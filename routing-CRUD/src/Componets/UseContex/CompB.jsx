import { useContext } from "react";
import CompC from "./CompC";
import { UserContex } from "../../App";

const CompB = () => {
    const user = useContext(UserContex)
    return (
        <>
        <h2> Comp B</h2>
        <p>course: {user.course}</p>
        <CompC  />
        </>
    )
};

export default CompB;