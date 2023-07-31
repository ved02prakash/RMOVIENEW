import { Link } from "react-router-dom";

export default function IndexGenres(){
    return (
        <>
        <h3>Index Genres</h3>
        <Link className="btn btn-primary" to="/genres/create">Create</Link>
        </>
    )
}