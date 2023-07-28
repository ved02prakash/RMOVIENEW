import { movieDTO } from "./movies.model"
import IndividualMovie from "./individualMovie"
import css from "./MoviesList.module.css"
import Loading from "../utils/Loading"
import GenericList from "../utils/GenericList"
export default function movieList(props: movieListProps){
   
    return <GenericList list={props.movies}>
            <div className={css.div}>
                {props.movies?.map(movie=>
                    <IndividualMovie {...movie} key={movie.id}></IndividualMovie>)}
            </div>
            </GenericList>

}
interface movieListProps{
    movies?:movieDTO[];
}