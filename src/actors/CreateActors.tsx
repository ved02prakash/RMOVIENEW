import ActorForm from "./ActorForm";

export default function CreateActors(){
    return (
        <>
        <h3>Create Actors</h3>
        <ActorForm model={{name:'',dateofBirth:undefined}}
        onSubmit={values=> console.log(values)}
        ></ActorForm>
        </>
    )
}