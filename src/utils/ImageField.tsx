import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function ImageField(props:imageFieldProps){

    const divStyle={marginTop:'10px'}
    const imgStyle={marginTop:'450px'}

    const [imagebase64,setImagebase64]=useState('');
    const [imageURL,setImageURL]=useState(props.imageURL);

    const {values}=useFormikContext<any>();

    const handleChange=(eventArgs:ChangeEvent<HTMLInputElement>)=>{
        if(eventArgs.currentTarget.files){
            const file=eventArgs.currentTarget.files[0];
            if(file){
tobase64(file)
.then((base64representation:string)=>setImagebase64(base64representation))
.catch(error=>console.error(error));
values[props.field]=file;
setImageURL('');
            }
            else{
setImagebase64('');
            }
        }
    }

    const tobase64=(file:File)=>{
        return new Promise<string>((resolve,reject)=>{
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>resolve(reader.result as string);
            reader.onerror=(error)=>reject(error);
        })  
    }
return (
    <div>
        <label>{props.displayName}</label>
        <div>
            <input type="file" accept=".jpg,.jpeg,.png" onChange={handleChange}/>
        </div>
        {imagebase64?
    <div>
        <div style={divStyle}>
<img style={imgStyle} src={imagebase64} alt="selected"/>
            </div>
        </div> :null   
    }

{imageURL?
    <div>
        <div style={divStyle}>
<img style={imgStyle} src={imageURL} alt="selected"/>
            </div>
        </div> :null   
    }
    </div>
)
}

interface imageFieldProps{
    displayName:string;
    imageURL:string;
    field:string;
}

ImageField.defaultProps={
    imageURL:''
}