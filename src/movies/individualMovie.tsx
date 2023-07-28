import { movieDTO } from "./movies.model"
import css from "./individualMovie.module.css"

export default function individualMovie(props: movieDTO){
    const buildLink=()=> `/movie/${props.id}`
    return (
        <div className={css.div}>
<a>
    <img alt="Poster" src={props.poster}></img>
</a>
<p>
    <a href="{buildLink()}">{props.title}</a>
</p>
        </div>
    )
}