import { useContext } from "react";
import { UserContext } from "./CreateContext";

const About = () => {
    const msg = useContext(UserContext)
    return (<>
        <h1>Hello from About</h1>
        <h1>{msg}</h1>

    </>);
}

export default About;