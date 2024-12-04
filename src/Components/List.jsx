import React, { useState } from "react";


const List = ({list}) => {
    
    return (
        <React.Fragment>
            <h2>Static List Component</h2>
            <ul>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
                <li>{list[4]}</li>
            </ul>
        </React.Fragment>
    )
};

export default List;