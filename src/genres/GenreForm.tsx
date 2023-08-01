import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import TextField from "../utils/TextField";
import { genereCreateDTO } from "./genere.model";

export default function GenreForm(props:genreFormProps){
    return (
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name"></TextField>
            <Button disabled={formikProps.isSubmitting} type="submit">
              Save Changes
            </Button>
            <Link className="btn btn-secondary" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    )
}

interface genreFormProps{
    model:genereCreateDTO,
    onSubmit(value:genereCreateDTO,action:FormikHelpers<genereCreateDTO>):void;
}