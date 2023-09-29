import { useContext } from "react";
import { UserContext } from "./CreateContext";

const About = () => {
    const {name,setName} = useContext(UserContext)
    return (<>
        <h1>Hello from About</h1>
        <h1>{name}</h1>

    </>);
}

export default About;