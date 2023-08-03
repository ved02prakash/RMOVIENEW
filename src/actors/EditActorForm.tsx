import ActorForm from "./ActorForm";

export default function EditActorForm(){
    return (
        <>
        <h3>Edit Actor</h3>
        <ActorForm model={{name:'Actor Form 2',dateofBirth:new Date('1996-06-01T00:00:00')}}
        onSubmit={values=> console.log(values)}
        ></ActorForm>
        </>
    )
}