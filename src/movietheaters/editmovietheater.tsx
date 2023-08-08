import { useParams } from "react-router-dom";
import MoviesTheaterForm from "./MoviesTheaterForm";

export default function Editmovietheater(){
    const {id} : any = useParams();
    return (
        <>
        <h3>Edit Movie Theater</h3>
        <MoviesTheaterForm
        model={{name:'Bairia'}}
        onSubmit={values=>{
            console.log(values);
            console.log(id);
        }}
        />
        </>
    )
}