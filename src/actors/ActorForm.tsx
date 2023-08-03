import { Form, Formik, FormikHelpers } from "formik"
import actorCreationDTO from "./actor.global"
import TextField from "../utils/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import DateField from "../utils/DateField";
import ImageField from "../utils/ImageField";
export default function ActorForm(props: actorFormProps){
    return (
<Formik 
initialValues={props.model}
onSubmit={props.onSubmit}
validationSchema={Yup.object({
    name:Yup.string().required('This field is required').firstLetterUppercase(),
    dateofBirth:Yup.date().nullable().required('This field is required')
})}
>
{(formikProps)=>(
<Form>
    <TextField displayName="Name" field="name"></TextField>
    <DateField field="dateofBirth" displayName="Date of Birth"/>
    <ImageField displayName="Image" field="picture"
    imageURL={props.model.pictureURL}
    ></ImageField>
    <Button disabled={formikProps.isSubmitting} className="btn btn-primary" type="submit">Save Changes</Button>
    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
</Form>
)}
</Formik>
    )
}

interface actorFormProps{
    model:actorCreationDTO,
    onSubmit(values:actorCreationDTO,actor:FormikHelpers<actorCreationDTO>):void;
}