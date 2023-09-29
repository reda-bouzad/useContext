import { useContext } from "react";
import { UserContext } from "./CreateContext";

const Home = () => {
    const msg = useContext(UserContext)
    return (<>
        <h1>Hello from Home</h1>

        <h1>{msg}</h1>
    </>);
}

export default Home;