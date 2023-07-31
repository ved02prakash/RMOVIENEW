import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function Creategenres(){
    const history = useHistory();
    return (
        <>
        <h3>Create Genres</h3>
        <Button onClick={() => {
history.push('/genres');
        }}>Save Changes</Button>
        </>
    )
}