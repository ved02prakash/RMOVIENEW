import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import TextField from "../utils/TextField";
export default function Creategenres(){
   // const history = useHistory();
    return (
        <>
        <h3>Create Genres</h3>
<Formik initialValues={{
    name:''
}}

onSubmit={value=>{
    console.log(value);
}}
validationSchema={Yup.object({
    name:Yup.string().required('This field is required').firstLetterUppercase()
})}
>
        <Form>
        <TextField field="name" displayName="Name"></TextField>
        <Button type="submit">Save Changes</Button>
        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
    </Form>
</Formik>

        </>
    )
}