import './Hello.css';


const Hello =  ({age, email, imageUrl}) => {
    // console.log("props ===> ",props)
    // const {age, email} = props;
    const name = "Bhavesh";
    const card = {
        color: "Blue",
        padding: "10px"
    }
    return (
        <div>
            <h1 style={{color: 'Red'}}>Red & White</h1>
            <h2 style={card}>{name}</h2>
            <h3>{age}</h3>
            <h3>{email}</h3>
            <img src={imageUrl} height={100}/>
        </div>
    )
};

export default Hello;

// mutable, unmutable
//  Product -> 5, 6 (title, price, rating, category, image)