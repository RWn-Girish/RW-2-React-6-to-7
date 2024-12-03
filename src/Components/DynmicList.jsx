

const DynamicList = ({list}) =>{

    return (
        <div>
            <h2>Dynmic Component</h2>
            {
                list.map((val, index)=>(
                   <li key={val}>{val}</li> 
                ))
            }
        </div>
    )
};

export default DynamicList;