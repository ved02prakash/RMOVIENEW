import ActorForm from "./ActorForm";

export default function EditActorForm(){
    return (
        <>
        <h3>Edit Actor</h3>
        <ActorForm model={{name:'Actor Form 2',dateofBirth:new Date('1996-06-01T00:00:00'),
    pictureURL:'https://upload.wikimedia.org/wikipedia/en/5/54/Shamshera_poster.jpg',
    biography:`# Session 
    This is our biography`    
    }}
        onSubmit={values=> console.log(values)}
        ></ActorForm>
        </>
    )
}