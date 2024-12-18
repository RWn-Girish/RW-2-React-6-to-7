
import { Container } from "react-bootstrap";
import Cards from "./Card";

const Banner = () => {
    let users = [
        {
            id: 1,
            name: "John Peter",
            email: "john@test.in",
            gender: "male"
        },
        {
            id: 2,
            name: "Jolly Peter",
            email: "jolly@test.in",
            gender: "female"
        },
        {
            id: 3,
            name: "Smith Peter",
            email: "smith@test.in",
            gender: "male"
        },
        {
            id: 4,
            name: "Fenna Peter",
            email: "fenna@test.in",
            gender: "female"
        }
    ]
    return (
        <>
            <Container>
                {
                    users.map((user) => (
                        <Cards user={user} />
                    )
                    )
                }
            </Container>
        </>
    )
};


export default Banner;