

const HOC = (Component) => {
    return ({isLoading, ...props}) => {
        if(isLoading){
            return <Component />
        }else{
            return <h2>Loading....</h2>
        }
    }
}


export default HOC;