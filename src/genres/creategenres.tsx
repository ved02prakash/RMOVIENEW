import GenreForm from "./GenreForm";

export default function Creategenres() {
  // const history = useHistory();
  return (
    <>
      <h3>Create Genres</h3>
     <GenreForm model={{name:''}} 
     onSubmit={async value => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(value);
        }}
        />
    </>
  );
}
