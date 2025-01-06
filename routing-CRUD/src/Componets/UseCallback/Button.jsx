import { memo } from "react";

const ButtonComp = memo(({name, handelClick}) => {
    console.log("Render ====> ", name);
    return (
        <>
            <button onClick={handelClick}>{name}</button>
        </>
    )
});

export default ButtonComp;