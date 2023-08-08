import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../utils/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { moviesTheaterCreateDTO } from "./moviestheater";
import * as Yup from 'yup'

export default function MoviesTheaterForm(props:MoviesTheaterForm){
    return (
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required('This field is requiered').firstLetterUppercase()
        })}
        >
            {(formikProps)=>(
<Form>
    <TextField displayName="Name" field="name"/>
    <Button disabled={formikProps.isSubmitting} className="btn btn-primary" type="submit">
        Save Changes
    </Button>
    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
</Form>
            )}
        </Formik>
    )
}

interface MoviesTheaterForm{
    model:moviesTheaterCreateDTO;
    onSubmit(values:moviesTheaterCreateDTO,action:FormikHelpers<moviesTheaterCreateDTO>):void;
}