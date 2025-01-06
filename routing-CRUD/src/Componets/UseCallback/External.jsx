import { useMemo } from "react";

const External = () => {
    const total = useMemo(() => {
        let i;
        for(i = 0; i<=10005000000; i++){
            i = i+1;
        }
        return i;
    }, [])
    return (
        <>
        <p>Total Num is : {total}</p>
        </>
    )
};

export default External;