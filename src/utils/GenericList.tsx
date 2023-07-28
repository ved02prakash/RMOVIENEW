import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps){
    if(!props.list)
    {
        if(props.LoadingUi)
        {
            return props.LoadingUi;
        }
        return <Loading/>
    }
    else if(props.list.length===0)
    {
        if(props.emptyListUi)
        {
            return props.emptyListUi;
        }
        return <>There are no elemenets</>
    }
    else{
        return props.children;
    }
}

interface genericListProps{
    list:any;
    LoadingUi?:ReactElement;
    emptyListUi?:ReactElement;
    children:ReactElement;
}