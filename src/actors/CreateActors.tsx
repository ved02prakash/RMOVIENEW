import ActorForm from "./ActorForm";

export default function CreateActors(){
    return (
        <>
        <h3>Create Actors</h3>
        <ActorForm model={{name:'',dateofBirth:undefined}}
        onSubmit={async value => {
            await new Promise((r) => setTimeout(r, 3000));
            console.log(value);}}
        ></ActorForm>
        </>
    )
}