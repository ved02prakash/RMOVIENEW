import MoviesTheaterForm from "./MoviesTheaterForm";

export default function CreateMovieTheater(){
    return (
        <>
        <h3>Create Movie Theater</h3>
        <MoviesTheaterForm
        model={{name:''}}
        onSubmit={values=> console.log(values)}
        />
        </>
    )
}