import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function Editgenres(){
    const {id} : any = useParams();
    return (
        <>
        <h3>Edit Genres</h3>
        <GenreForm model={{name:'Action'}} 
     onSubmit={async value => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(id);
          console.log(value);
        }}
        />
        </>
    )
}