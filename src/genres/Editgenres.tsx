import { useParams } from "react-router-dom"

export default function Editgenres(){
    const {id} : any = useParams();
    return (
        <>
        <h3>Edit Genres</h3>
        This id is {id}
        </>
    )
}