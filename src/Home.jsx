import { useContext } from "react";
import { UserContext } from "./CreateContext";

const Home = () => {
    const {name,setName} = useContext(UserContext)
    return (<>
        <h1>Hello from Home</h1>

        <h1>{name}</h1>
        <button onClick={() => setName("Bouzad")}>Change</button>
    </>);
}

export default Home;