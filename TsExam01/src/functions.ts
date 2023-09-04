
import { BoxProps } from "./types";
export const Box=(props:BoxProps)=> {
    const elem= document.createElement(props.element);
    // if (props.attr){
    // elem.className=props.attr.className;
    // elem.id=props.attr?.id;
    // }
    if (props.attr){
        Object.keys(props.attr).forEach((key:keyof typeof props.attr)=>{
            elem[key]=props.attr[key];
        });
    }
    
    if (!Array.isArray(props.children))elem.append(props.children!);
    else elem.append(...props.children);
    return elem;
}



