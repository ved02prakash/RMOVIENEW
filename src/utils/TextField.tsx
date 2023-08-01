import { ErrorMessage, Field } from "formik";

export default function TextField(props: textFiledProps){
    return (
        <>
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field name={props.field} id={props.field} className="form-control"></Field>
            <ErrorMessage name={props.field}>{msg=><div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>
        </>
    )
}

interface textFiledProps{
    field:string,
    displayName:string
}