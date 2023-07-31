import { Link } from "react-router-dom";

export default function indexmovietheaters(){
    return (
        <>
        <h3>Index Movie Theaters</h3>
        <Link className="btn btn-primary" to="/movietheaters/create">Create</Link>
        </>
    )
}